import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const MAX_ATTEMPTS = 3;

// /api/gemini 와 같은 요청·응답 형식. DeepSeek 도 OpenAI 호환 API
// 키: .env 의 DEEPSEEK_API_KEY (dynamic — 키가 없어도 다른 화면은 동작)
export const POST: RequestHandler = async ({ request }) => {
	const apiKey = env.DEEPSEEK_API_KEY;
	if (!apiKey) return json({ error: 'DEEPSEEK_API_KEY not configured' }, { status: 503 });

	const { message, tools, tool_choice, temperature, top_p } = await request.json();

	const body: Record<string, unknown> = {
		model: 'deepseek-flash',
		messages: [{ role: 'user', content: message }],
		// 기본 출력 상한(4K)이면 시나리오 JSON 이 잘림
		max_tokens: 8192
	};

	if (temperature !== undefined) body.temperature = temperature;
	if (top_p !== undefined) body.top_p = top_p;

	if (tools) {
		body.tools = tools;
		body.tool_choice = tool_choice ?? 'auto';
		// thinking 모드는 함수 지정 tool_choice 거부 — 지정할 때만 thinking 끔
		if (typeof body.tool_choice === 'object') body.thinking = { type: 'disabled' };
	}

	// tool 인자 JSON 의 괄호·키가 가끔 한 군데 깨짐 (호출마다 다른 곳) — 파싱 실패 시 재요청
	let lastError = '';
	for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
		const response = await fetch('https://api.deepseek.com/chat/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify(body)
		});

		if (!response.ok) {
			const errorText = await response.text();
			return json({ error: errorText }, { status: response.status });
		}

		const data = await response.json();
		const message_result = data.choices?.[0]?.message;

		if (!message_result?.tool_calls?.length) {
			const reply = message_result?.content ?? '응답 없음';
			return json({ reply });
		}

		const args = message_result.tool_calls[0].function.arguments;
		try {
			const tool_result = typeof args === 'string' ? JSON.parse(args) : args;
			return json({ tool_result });
		} catch (e) {
			// 출력 상한에 걸려 잘리면 finish_reason = 'length'
			const finish = data.choices?.[0]?.finish_reason;
			const msg = e instanceof Error ? e.message : String(e);
			const pos = Number(/position (\d+)/.exec(msg)?.[1] ?? args.length);
			lastError = `tool 인자 JSON 파싱 실패 ${attempt}회 (finish_reason: ${finish}, 길이 ${args.length}): ${msg} …${args.slice(pos - 150, pos + 50)}`;
		}
	}
	return json({ error: lastError }, { status: 502 });
};
