// next-seo.config.js
const SEO = {
  canonical: "https://www.echoslate.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.echoslate.com",
    site_name: "Echo Slate",
    images: [
      {
        url: "https://www.echoslate.com/static/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EchoSlate Logo",
      },
    ],
  },
  twitter: {
    handle: "@echoslate",
    site: "@echoslate",
    cardType: "summary_large_image",
  },
};

export default SEO;
