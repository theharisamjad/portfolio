import Head from "next/head";

export const Header = ({ seo }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Haris Amjad",
    jobTitle:
      "Senior Software Engineer, Mobile Application Developer, React Native Developer",
    image:
      "https://theharisamjad.com/_next/static/media/seo_thumbnail_haris.6074cb24.png",
    url: "https://theharisamjad.com",
    sameAs: [
      "https://github.com/theharisamjad",
      "https://www.linkedin.com/in/theharisamjad/",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Fasset",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "NUST",
      sameAs: "https://nust.edu.pk",
    },
    knowsAbout: [
      "Mobile Application Development",
      "React Native",
      "Expo",
      "Xamarin",
      "JavaScript",
      "TypeScript",
      "Android",
      "iOS",
    ],
    description:
      "Portfolio of Haris Amjad, a software engineer who creates cool and innovative cross-platform mobile applications using React Native & Expo.",
  };
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <meta
        name="keywords"
        content="Mobile Applications,React Native,Expo,Xamarin,JavaScript,TypeScript"
      />
      <meta name="author" content="Haris Amjad" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta
        property="og:image"
        content="https://theharisamjad.com/_next/static/media/og_image_haris.6074cb24.png?v=2"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://theharisamjad.com" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta
        name="twitter:image"
        content="https://theharisamjad.com/_next/static/media/twitter_image_haris.6074cb24.png"
      />
      <meta name="twitter:url" content="https://theharisamjad.com" />
    </Head>
  );
};
