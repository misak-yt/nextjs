import { NextResponse } from 'next/server'

const api = "https://jsonplaceholder.typicode.com/posts/"

export async function GET(request: Request, { params }) {
	console.log(params);

	const res = await fetch(api + params.id);
	const data = await res.json();

	return new NextResponse(JSON.stringify(data));
}

export async function POST(request: Request, { params }) {
	fetch(api, {
		method: 'POST',
		body: JSON.stringify({
			name: params.name,
			username: params.username,
			email: params.email
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		}
	})
}

export async function DELETE(request: Request, { params }) {

}

export async function PUT(request: Request, { params }) {

}

export async function PATCH(request: Request, { params }) {
	fetch(api + params.id, {
		method: 'PATCH',
		body: JSON.stringify({
			address: params.address
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
}