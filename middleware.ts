import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const host = request.headers.get('host') || '';
    const referer = request.headers.get('referer') || '';
    const { pathname } = request.nextUrl;

    // 1. ローカル環境は無条件で許可
    if (host.includes('localhost') || host.includes('127.0.0.1')) {
        return NextResponse.next();
    }

    // 2. 静的ファイルとAPIは許可
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/images') ||
        pathname.startsWith('/api') ||
        pathname === '/favicon.ico'
    ) {
        return NextResponse.next();
    }

    // 3. リファラチェック (本番環境用)
    // 許可するリファラの一部（環境変数 または 自分のドメイン）
    // ※ポートフォリオサイトのURLが決まったら環境変数に設定する想定
    const allowedDomains = [
        process.env.ALLOWED_REFERER, // Vercelの環境変数で設定
        host, // サイト内リンク
        '.vercel.app' // Vercelプレビュー
    ].filter(Boolean);

    const isAllowed = allowedDomains.some(domain => referer.includes(domain as string));

    if (!isAllowed) {
        // 許可されていないアクセスはGoogleへ
        return NextResponse.redirect('https://www.google.com');
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/:path*',
}
