import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../../i18n/settings'
import Link from 'next/link'

const Navbar = ({
    lang,
    t
}: {
    lang: string,
    t: any
}) => {
    return (
        <footer>
            <Trans i18nKey="languageSwitcher" t={t}>
                Switch from <strong>{lang}</strong> to:{' '}
            </Trans>
            {languages.filter((l: any) => lang !== l).map((l: any, index: any) => {
                return (
                    <span key={l}>
                        {index > 0 && (' or ')}
                        <Link href={`/${l}`}>
                            {l}
                        </Link>
                    </span>
                )
            })}
            {/* {languages.filter((l) => lang !== l).map((l, index) => {
                return (
                    <LangPush l={l} index={index} prevLang={lang} />
                )
            })} */}
        </footer>
    )
}

export default Navbar