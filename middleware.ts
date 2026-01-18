import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const host = request.headers.get('host') || '';
    const referer = request.headers.get('referer') || '';
    const { pathname } = request.nextUrl;

    if (host.includes('localhost') || host.includes('127.0.0.1')) {
        return NextResponse.next();
    }

    if (pathname.startsWith('/_next') || pathname.startsWith('/images') || pathname === '/favicon.ico') {
        return NextResponse.next();
    }

    const allowedDomains = [
        'vercel.app',
        'my-portfolio-eight-zeta-50.vercel.app',
    ];

    const isAllowed = allowedDomains.some(domain => referer.includes(domain));

    if (!isAllowed) {
        return NextResponse.redirect('https://www.google.com');
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/:path*',
}
