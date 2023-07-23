import { NextResponse } from 'next/server'

const api = "https://jsonplaceholder.typicode.com/users/"

export async function GET(request: Request) {

	const res = await fetch(api);
	const data = await res.json();

	return new NextResponse(JSON.stringify(data));
}