import Link from "next/link";
import { useTranslation } from "../../i18n";

export default async function Home({ params: { lang } }: { params: any }) {
  const { t } = await useTranslation(lang, 'dashboard')

  return (
    <>
      <h1>hey</h1>
      <Link
        href={'/dashboard'}
      >
        {t('headers.dashboard')}
      </Link>
    </>
  )
}
