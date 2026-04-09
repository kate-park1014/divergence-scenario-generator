import { GEMINI_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { message } = await request.json();

	const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions';

	const response = await fetch(apiUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${GEMINI_API_KEY}`
		},
		body: JSON.stringify({
			model: 'gemini-2.5-flash',
			messages: [
				{
					role: 'user',
					content: message
				}
			]
		})
	});

	if (!response.ok) {
		const errorText = await response.text();
		return json({ error: errorText }, { status: response.status });
	}

	const data = await response.json();
	const reply = data.choices?.[0]?.message?.content ?? '응답 없음';

	return json({ reply });
};
