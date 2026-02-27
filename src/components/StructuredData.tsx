import { Helmet } from "react-helmet-async";

const SITE_URL = "https://salinas-ai-consulting.com";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// Organization + ProfessionalService schema for all pages
export const OrganizationSchema = () => {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Salinas AI Consulting",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
        },
        description:
          "Enterprise-level AI strategy with hands-on execution capability. AI consulting for enterprises, founders, and small businesses in regulated and emerging industries.",
        foundingDate: "2024",
        founder: {
          "@type": "Person",
          "@id": `${SITE_URL}/#founder`,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "salinasaiconsulting@outlook.com",
          availableLanguage: ["English"],
        },
        sameAs: ["https://linkedin.com/in/larry-salinas-mba-56394934"],
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        knowsAbout: [
          "Artificial Intelligence",
          "Machine Learning",
          "Generative AI",
          "AI Strategy",
          "AI Governance",
          "Healthcare AI",
          "Financial Services AI",
          "Government AI",
          "AI Implementation",
          "AI Consulting",
          "Enterprise AI Automation",
          "AI Integration",
          "AI Advisory Services",
          "AI Product Coaching",
          "Custom GPT Consulting",
          "AI App Development",
        ],
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#founder`,
        name: "Larry Salinas",
        jobTitle: "Enterprise AI Consultant",
        description:
          "Independent AI consultant with 15+ years of experience. Enterprise AI strategy and hands-on AI product coaching for organizations of any size.",
        url: SITE_URL,
        sameAs: ["https://linkedin.com/in/larry-salinas-mba-56394934"],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "MBA",
        },
        knowsAbout: [
          "AI Strategy",
          "Enterprise AI Implementation",
          "AI Governance",
          "Regulated Industries",
          "Healthcare Technology",
          "Financial Services Technology",
          "Generative AI",
        ],
        worksFor: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Salinas AI Consulting",
        description: "Enterprise AI Consulting and Advisory Services",
        publisher: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: "Salinas AI Consulting",
        provider: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
        },
        serviceType: "AI Consulting",
        description:
          "Enterprise-level AI strategy and hands-on AI product coaching. Serving enterprises, founders, and small businesses with practical AI implementation.",
        url: SITE_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chicago",
          addressRegion: "IL",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "41.8781",
          longitude: "-87.6298",
        },
        priceRange: "$$$$",
        areaServed: [
          {
            "@type": "Country",
            name: "United States",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI Consulting Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Strategy Consulting",
                url: `${SITE_URL}/enterprise-ai-strategy`,
                description:
                  "Strategic AI planning to identify where AI creates value for your business, with a clear implementation roadmap tailored to your industry and constraints.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Consulting Services",
                url: `${SITE_URL}/ai-consulting`,
                description:
                  "End-to-end enterprise AI consulting from assessment through production deployment for regulated industries.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Automation Consulting",
                url: `${SITE_URL}/ai-automation`,
                description:
                  "Move AI initiatives from proof-of-concept to production-ready automation systems with proper governance and operations.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Integration Services",
                url: `${SITE_URL}/ai-integration`,
                description:
                  "Seamless integration of AI systems into existing enterprise infrastructure, workflows, and technology stacks.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Advisory Services",
                url: `${SITE_URL}/ai-advisory`,
                description:
                  "Expert evaluation of AI talent, vendors, and technology investments to inform hiring and procurement decisions.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Product Coaching",
                url: `${SITE_URL}/hands-on-ai-product-coaching`,
                description:
                  "Hands-on AI product coaching for founders and small businesses. Build AI-powered apps, custom GPTs, and AI workflows with expert guidance.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

// FAQ Schema
export const FAQSchema = ({ faqs }: { faqs: FAQItem[] }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

// Breadcrumb Schema
export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

// Service page specific schema
export const ServiceSchema = ({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: "AI Consulting",
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

// Default homepage FAQs
export const homepageFAQs: FAQItem[] = [
  {
    question: "What does an AI consultant do for enterprises?",
    answer:
      "An enterprise AI consultant helps organizations identify high-value AI opportunities, develop implementation strategies, select the right technologies and vendors, navigate regulatory requirements, and move AI projects from pilot to production. At Salinas AI Consulting, we focus specifically on regulated industries where governance and compliance are critical.",
  },
  {
    question: "How much does enterprise AI consulting cost?",
    answer:
      "Enterprise AI consulting engagements typically range from focused assessments (1-2 weeks) to full implementation advisory (3-6 months). Pricing depends on scope, complexity, and industry requirements. Salinas AI Consulting offers a free initial consultation to assess your needs and provide a tailored proposal.",
  },
  {
    question: "What industries does Salinas AI Consulting specialize in?",
    answer:
      "Salinas AI Consulting specializes in regulated industries including healthcare, financial services, and government. These sectors require deep understanding of compliance frameworks (HIPAA, SOX, FedRAMP), data governance, and risk management when deploying AI systems.",
  },
  {
    question:
      "What is the difference between AI strategy and AI implementation consulting?",
    answer:
      "AI strategy consulting focuses on identifying where AI creates business value and creating a roadmap. AI implementation consulting takes that strategy and turns it into working systems — selecting technologies, building governance frameworks, managing change, and ensuring production readiness. Salinas AI Consulting provides both, end-to-end.",
  },
  {
    question: "How long does it take to implement AI in an enterprise?",
    answer:
      "A typical enterprise AI implementation takes 3-12 months from strategy to production, depending on complexity, data readiness, and organizational maturity. Quick wins like process automation can be achieved in 4-8 weeks. Larger initiatives like predictive analytics platforms require 6-12 months for full deployment with proper governance.",
  },
];
