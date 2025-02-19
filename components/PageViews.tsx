'use client'

import { useEffect, useState } from 'react'

// https://elazizi.com/posts/add-views-counter-to-your-astro-blog-posts/
const PageViews = ({ slug }: { slug: string }) => {
  const [viewCount, setViewCount] = useState('...')

  useEffect(() => {
    const url = `${window.location.origin}/blog/${slug}`
    const encodedUrl = encodeURIComponent(url)
    const counterUrl = `https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${encodedUrl}&count_bg=%234E763000&title_bg=%237A464600&icon=&icon_color=%23E7E7E7&title=Reads+%28Today+%2F+All+Time%29+%3A&edge_flat=true`

    const fetchWithProxy = async (targetUrl: string) => {
      const proxyUrl = 'https://corsproxy.io/?' + encodeURIComponent(targetUrl)
      const response = await fetch(proxyUrl)
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      return response.text()
    }

    const updateViewCount = async () => {
      try {
        const svgText = await fetchWithProxy(counterUrl)
        const match = svgText.match(/<text[^>]*fill="#fff"[^>]*>([\d\s/]+)<\/text>/)

        if (match && match[1]) {
          const count = match[1].trim()
          const totalViews = count.split('/')[1].trim()
          setViewCount(totalViews)
        } else {
          setViewCount('N/A')
        }
      } catch {
        setViewCount('N/A')
      }
    }

    updateViewCount()
  }, [slug])

  return (
    <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
      <svg
        className="h-4 w-4 fill-transparent stroke-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      <span className="text-sm">
        {viewCount === '...' ? (
          <span className="inline-flex space-x-px">
            <span className="animate-[loadingDots_1.4s_infinite]">.</span>
            <span className="animate-[loadingDots_1.4s_infinite] delay-200">.</span>
            <span className="delay-400 animate-[loadingDots_1.4s_infinite]">.</span>
          </span>
        ) : (
          `${viewCount} views`
        )}
      </span>
    </div>
  )
}

export default PageViews
