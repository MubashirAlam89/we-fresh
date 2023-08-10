import Head from "next/head";

const Meta = ({ seo }: any) => {
  return (
    <Head>
      <link
        rel="shortcut icon"
        href={`https:${seo.icon.fields.file.url}`}
        type="image/png"
      />
      <link rel="apple-touch-icon" href={`https:${seo.icon.fields.file.url}`} />
      {/* Required meta tags */}
      <meta name="description" content={seo.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:image" content={seo.ogImage.fields.file.url} />
      <meta property="og:url" content={seo.ogUrl} />

      {/* Twitter */}
      <meta property="twitter:title" content={seo.twitterTitle} />
      <meta property="twitter:description" content={seo.twitterDescription} />
      <meta
        property="twitter:image"
        content={seo.twitterImage.fields.file.url}
      />
      <meta property="twitter:url" content={seo.twitterUrl} />
      <title>{seo.title}</title>
    </Head>
  );
};

export default Meta;
