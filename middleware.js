import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-foobar', 'true');

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}
