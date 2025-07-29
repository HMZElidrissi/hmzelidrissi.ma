'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import SocialIcon from 'components/icons'

export default function Comments({
  slug,
  ig,
  bsky,
  threads,
  x,
  fb,
  reddit,
  pinterest,
}: {
  slug: string
  ig?: string
  bsky?: string
  threads?: string
  x?: string
  fb?: string
  reddit?: string
  pinterest?: string
}) {
  const [loadComments, setLoadComments] = useState(false)
  return (
    <>
      {/* Share and Comment Section */}
      {(ig || threads || x || fb || reddit || pinterest || bsky) && (
        <div className="flex flex-row items-center justify-center space-x-8">
          <h2 className="text-2xl font-bold leading-8 tracking-tight">Share and Comment on</h2>
          {ig && <SocialIcon kind="instagram" href={ig} size={6} />}
          {bsky && <SocialIcon kind="bsky" href={bsky} size={6} />}
          {x && <SocialIcon kind="twitter" href={x} size={6} />}
          {fb && <SocialIcon kind="facebook" href={fb} size={6} />}
          {reddit && <SocialIcon kind="reddit" href={reddit} size={6} />}
          {pinterest && <SocialIcon kind="pinterest" href={pinterest} size={6} />}
        </div>
      )}
    </>
  )
}
