import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: {
    params: { id: string }
}) {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments/');
    const data = await res.json();
    return new NextResponse(JSON.stringify(data.filter(function(x: any) {
        return Number(x.postId) === Number(params.id)
    })));

}