import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  // Always set the theme to light mode
  const defaultTheme = 'light'

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4"
      onClick={() => setTheme(defaultTheme)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-gray-900 dark:text-gray-100"
      >
        {mounted && theme === 'dark' ? (
          // SVG for dark mode
          <path
            fillRule="evenodd"
            // ... (dark mode SVG path)
          />
        ) : (
          // SVG for light mode and default
          <path
            fillRule="evenodd"
            // ... (light mode and default SVG path)
          />
        )}
      </svg>
    </button>
  )
}

export default ThemeSwitch
