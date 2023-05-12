'use client'

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { MouseEvent } from "react"

const LangPush = ({
    l, index, prevLang
}: {
    l: string, index: number, prevLang: string
}) => {
    const pathName = usePathname()
    const newPath = pathName.replace(new RegExp(prevLang, 'gi'), l)

    return (
        <span key={l}>
            {index > 0 && (' or ')}
            <Link href={`${newPath}`}>
                {l}
            </Link>
        </span>
    )
}


export default LangPush