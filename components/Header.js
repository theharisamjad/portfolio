import Head from "next/head";

export const Header = ({ seo }) => {
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta
        name="keywords"
        content="Mobile Application Developer, React Native, Xamarin, Expo, .NET MAUI"
      />
      <meta name="author" content="Haris Amjad" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://theharisamjad.com" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:url" content="https://theharisamjad.com" />
    </Head>
  );
};
