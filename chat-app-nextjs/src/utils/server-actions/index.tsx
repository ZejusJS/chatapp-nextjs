"use server"

import { cookies } from 'next/headers';

export async function changeLang(data: any) {
    "use server"

    const cookieStore: any = cookies()
    cookieStore.set({
        name: 'language',
        value: data.get('language'),
    })
}