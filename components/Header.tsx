import Head from 'next/head'

interface SeoProps {
  title: string;
  description: string;
  image: string;
}

export const Header = ({ seo }: { seo: SeoProps }) => {
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
    </Head>
  )
}