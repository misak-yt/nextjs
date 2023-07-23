import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments/');
    const data = await res.json();
    return new NextResponse(JSON.stringify(data.filter(x => {
        return Number(x.postId) === Number(params.id)
    })));

}