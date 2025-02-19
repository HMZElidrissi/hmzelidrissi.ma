import Link from 'next/link'
import {slug} from 'github-slugger'

interface Props {
    text: string
    className?: string
}

const Tag = ({text, className}: Props) => {
    return (
        <Link
            href={`/tags/${slug(text)}`}
            className={`hover:bg-primary-50 hover:text-primary-700 group relative inline-block overflow-hidden rounded-full border border-primary-300 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-primary-600 transition-all duration-300 hover:border-primary-600 dark:border-teal-800 dark:text-teal-300 dark:hover:border-teal-700 dark:hover:bg-teal-900/20 dark:hover:text-teal-200 ${className}`}
        >
            <span className="relative z-10">{text.split(' ').join('-')}</span>
            <div
                className="group-hover:animate-shine absolute inset-0 h-full w-full translate-x-[-100%] bg-gradient-to-r from-transparent via-primary-100/40 to-transparent dark:via-primary-500/5"/>
        </Link>
    )
}

export default Tag
