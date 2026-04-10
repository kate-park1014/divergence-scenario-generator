import { GEMINI_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { message, tools, tool_choice } = await request.json();

	const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions';

	const body: Record<string, unknown> = {
		model: 'gemini-2.5-flash',
		messages: [{ role: 'user', content: message }]
	};

	if (tools) {
		body.tools = tools;
		body.tool_choice = tool_choice ?? 'auto';
	}

	const response = await fetch(apiUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${GEMINI_API_KEY}`
		},
		body: JSON.stringify(body)
	});

	if (!response.ok) {
		const errorText = await response.text();
		return json({ error: errorText }, { status: response.status });
	}

	const data = await response.json();
	const message_result = data.choices?.[0]?.message;

	// function calling 응답
	if (message_result?.tool_calls?.length) {
		const args = message_result.tool_calls[0].function.arguments;
		const tool_result = typeof args === 'string' ? JSON.parse(args) : args;
		return json({ tool_result });
	}

	// 일반 텍스트 응답
	const reply = message_result?.content ?? '응답 없음';
	return json({ reply });
};
