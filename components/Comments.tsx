'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import SocialIcon from '@/components/social-icons'

export default function Comments({
  slug,
  ig,
  threads,
  x,
  fb,
  reddit,
  pinterest,
}: {
  slug: string
  ig: string
  threads: string
  x: string
  fb: string
  reddit: string
  pinterest: string
}) {
  const [loadComments, setLoadComments] = useState(false)
  return (
    <>
      {/* Share and Comment Section */}
      <div className="flex flex-row items-center justify-center space-x-8">
        <h2 className="text-2xl font-bold leading-8 tracking-tight">Share and Comment:</h2>
        {ig && <SocialIcon kind="instagram" href={ig} size={6} />}
        {ig && <SocialIcon kind="threads" href={threads} size={6} />}
        {x && <SocialIcon kind="twitter" href={x} size={6} />}
        {fb && <SocialIcon kind="facebook" href={fb} size={6} />}
        {reddit && <SocialIcon kind="reddit" href={reddit} size={6} />}
        {pinterest && <SocialIcon kind="pinterest" href={pinterest} size={6} />}
      </div>
    </>
  )
}
