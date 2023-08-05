import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

const About = () => {
  return (
    <div className="flex flex-col items-start justify-start divide-y divide-gray-200 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-1">
      <div className="pt-6 pb-8 space-x-2 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900  sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:border-r-2 md:px-6">
          About
        </h1>
      </div>
      <div className="max-w-lg">
        <br />
        <h1 className="font-sans text-blue-600 font-semibold text-2xl">Hello World! 👋</h1>
        <br />
        <p className="font-sans text-blue-600 font-semibold">{siteMetadata.description}</p>
        <br />
        <p className="font-sans text-blue-600 font-semibold">{siteMetadata.websiteDescription}</p>
        <br />
        <p className="font-sans text-blue-600">{siteMetadata.contactInvite}</p>
        <div className="mt-6 flex space-x-4">
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} />
          <SocialIcon kind="github" href={siteMetadata.github} />
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
        </div>
      </div>
    </div>
  )
}

export default About
