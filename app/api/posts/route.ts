import { NextResponse } from 'next/server'

const api = "https://jsonplaceholder.typicode.com/posts/"

export async function GET() {

	const res = await fetch(api);
	const data = await res.json();

	return new NextResponse(JSON.stringify(data));
}