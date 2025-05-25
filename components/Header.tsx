'use client'

import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { RoughNotation } from 'react-rough-notation'

const Header = () => {
  const [showNotation, setShowNotation] = useState(false)

  useEffect(() => {
    // Show notation after a small delay for better UX
    const timer = setTimeout(() => {
      setShowNotation(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-1">
              <Logo />
            </div>
            <RoughNotation
              type="underline"
              show={showNotation}
              color="#6B7280"
              strokeWidth={2}
              animationDuration={1000}
              padding={4}
            >
              <div className="hidden h-6 text-xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            </RoughNotation>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
