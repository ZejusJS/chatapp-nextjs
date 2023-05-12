'use client'

import { useTranslation } from '../../../../i18n/client';

const page = ({ params: { lang } }: { params: any }) => {
    const { t } = useTranslation(lang, 'dashboard')

    return (
        <div>
            <p>team</p>
            <p>{t('headers.dashboard')}</p>
        </div>
    )
}

export default page