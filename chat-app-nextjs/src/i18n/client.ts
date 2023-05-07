'use client'

import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { getOptions } from './settings'

// 
i18next
    .use(initReactI18next)
    .use(resourcesToBackend((language: any, namespace: any) => import(`./dictionaries/${language}/${namespace}.json`)))
    .init(getOptions())

export function useTranslation(lng: any, ns?: any, options?: any) {
    if (i18next.resolvedLanguage !== lng) i18next.changeLanguage(lng)
    return useTranslationOrg<any>(ns, options)
}