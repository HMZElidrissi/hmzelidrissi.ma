import { PageSeo } from '@/components/SEO'
import About from '@/components/About'
import siteMetadata from '@/data/siteMetadata'

export default function AboutPage() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description="About me and this website"
        url={`${siteMetadata.siteUrl}/about`}
      />
      <About />
    </>
  )
}
