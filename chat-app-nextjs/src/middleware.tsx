import { NextResponse, URLPattern } from 'next/server';
import type { NextRequest } from 'next/server';
import acceptLanguage from 'accept-language'

import { fallbackLng, languages } from './i18n/settings'
import { NextURL } from 'next/dist/server/web/next-url';

const cookieName = 'i18next'

export async function middleware(req: NextRequest) {
    let lang
    if (req.cookies.has(cookieName)) lang = req?.cookies?.get(cookieName)?.value
    if (!lang) lang = acceptLanguage.get(req.headers.get('Accept-Language'))
    if (!lang) lang = fallbackLng

    const pathname = req.nextUrl.pathname
    const pathnameIsMissingLocale = languages.every(
        (lang) => !pathname.startsWith(`/${lang}/`) && pathname !== `/${lang}`
    )

    if (pathnameIsMissingLocale) {
        return NextResponse.redirect(
            new NextURL(`/${lang}${pathname}`, req.url)
        )
    }

    if (req.headers.has('referer')) {
        const referedHeader: any = req.headers.get('referer')
        const refererUrl = new URL(referedHeader)
        const langInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
        const response = NextResponse.next()
        if (langInReferer) response.cookies.set(cookieName, langInReferer)
        return response
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico|favicon.svg).*)'
}