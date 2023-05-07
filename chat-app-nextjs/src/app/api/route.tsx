import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    
    return new Response('sd',{
        status: 200,
        headers: {
            'Set-Cookie': 'bla=xddddd'
        }
    })
}

export const runtime = 'edge';