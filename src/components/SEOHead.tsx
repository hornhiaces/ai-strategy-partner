import { Helmet } from "react-helmet-async";

const SITE_URL = "https://salinas-ai-consulting.com";
const SITE_NAME = "Salinas AI Consulting";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  ogType?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const SEOHead = ({
  title,
  description,
  path,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: SEOHeadProps) => {
  // Normalize path: remove trailing slash except for root
  const normalizedPath = path === "/" ? "/" : path.replace(/\/+$/, "");
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {!noIndex && (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      )}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Salinas AI Consulting - Enterprise AI Strategy and Implementation Advisory"
      />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta
        name="twitter:image:alt"
        content="Salinas AI Consulting - Enterprise AI Strategy and Implementation Advisory"
      />
    </Helmet>
  );
};

export default SEOHead;
