import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../i18n/settings'
import Link from 'next/link'

const Navbar = ({
    lang,
    t
}: {
    lang: string,
    t: any
}) => {
    return (
        <nav>
            <h1>{t('headers.title')}</h1>
            <Trans i18nKey="languageSwitcher" t={t}>
                Switch from <strong>{ lang }</strong> to:{' '}
            </Trans>
            {languages.filter((l) => lang !== l).map((l, index) => {
                return (
                    <span key={l}>
                        {index > 0 && (' or ')}
                        <Link href={`/${l}`}>
                            {l}
                        </Link>
                    </span>
                )
            })}
        </nav>
    )
}

export default Navbar