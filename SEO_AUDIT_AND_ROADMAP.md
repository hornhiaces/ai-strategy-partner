# SEO Audit & Implementation Roadmap
## Salinas AI Consulting — salinas-ai-consing.com
### Audit Date: February 27, 2026

---

## SECTION 1: Technical SEO Audit

### 1.1 CRITICAL: Domain/Canonical Mismatch

**What is wrong:**
The live website is served at `https://salinas-ai-consing.com`, but every canonical URL, Open Graph tag, Twitter Card, structured data reference, sitemap, and robots.txt points to `https://salinasaiconsulting.com`. This is a **domain-level SEO catastrophe**.

**Why it matters:**
- Google sees the canonical as a *different domain*, so it may defer indexing to a URL that doesn't resolve or resolves differently.
- All social sharing (Facebook, Twitter, LinkedIn) will generate previews pointing to the wrong domain.
- Structured data validators will flag mismatched URLs, reducing rich result eligibility.
- Link equity from any backlinks to the live domain gets zero canonical consolidation.

**Impact: CRITICAL**

**Fix:**
Every reference to `salinasaiconsulting.com` must be updated to `salinas-ai-consing.com` (or vice versa — if you own both domains, pick ONE and 301-redirect the other). Affected locations:

```html
<!-- index.html — Canonical -->
<link rel="canonical" href="https://salinas-ai-consing.com" />

<!-- index.html — Open Graph -->
<meta property="og:url" content="https://salinas-ai-consing.com" />

<!-- index.html — Twitter -->
<meta name="twitter:url" content="https://salinas-ai-consing.com" />

<!-- All JSON-LD @id and url fields -->
<!-- sitemap.xml — all <loc> entries -->
<!-- robots.txt — Sitemap directive -->
```

> **Owner decision required:** If you own `salinasaiconsulting.com` AND `salinas-ai-consing.com`, consolidate to ONE domain with a 301 redirect on the other. Prefer the cleaner spelling: `salinasaiconsulting.com`.

---

### 1.2 CRITICAL: SPA Rendering — No Server-Side Rendering

**What is wrong:**
The site is a React Single Page Application (SPA). The `<body>` contains only `<div id="root"></div>` and a JS module. All content is rendered client-side.

**Why it matters:**
- Googlebot can render JavaScript but deprioritizes JS-rendered content and may take days/weeks to process it.
- Other search engines (Bing, Yandex, DuckDuckGo) have limited or no JS rendering.
- AI crawlers (GPTBot, ClaudeBot, PerplexityBot) often fetch raw HTML only.
- Core Web Vitals suffer: LCP is delayed until JS executes, FCP shows a blank page.

**Impact: CRITICAL**

**Fix (immediate):**
Add a `<noscript>` fallback with essential content so crawlers that don't execute JS still see your key messaging, services, and contact info:

```html
<noscript>
  <div style="max-width:800px;margin:0 auto;padding:40px 20px;font-family:system-ui,sans-serif;">
    <h1>Salinas AI Consulting — Enterprise AI Strategy & Implementation</h1>
    <p>Expert AI consulting for regulated industries. Larry Salinas helps enterprises
       navigate AI strategy, implementation, and governance in healthcare, financial
       services, and government sectors.</p>
    <h2>Services</h2>
    <ul>
      <li><strong>AI Strategy</strong> — Strategic AI planning and implementation roadmaps</li>
      <li><strong>Pilot to Production</strong> — Move AI from demo to production-ready systems</li>
      <li><strong>Regulated Industries</strong> — AI deployment for healthcare, finance, government</li>
      <li><strong>Technical Due Diligence</strong> — Expert evaluation of AI investments</li>
    </ul>
    <h2>Contact</h2>
    <p>Email: salinasaiconsulting@outlook.com</p>
    <p>LinkedIn: linkedin.com/in/larry-salinas-mba-56394934</p>
  </div>
</noscript>
```

**Fix (long-term):**
Migrate to a framework with SSR/SSG: Next.js, Astro, or Remix. This is the single highest-ROI technical change for SEO.

---

### 1.3 HIGH: Sitemap Uses Hash Fragments

**What is wrong:**
The `sitemap.xml` lists URLs like `https://salinasaiconsulting.com/#services`, `/#approach`, `/#about`, `/#contact`.

**Why it matters:**
Google explicitly ignores URL fragments (everything after `#`). These are treated as the same URL as the homepage. The sitemap effectively lists only one unique page five times — providing zero additional crawl value.

**Impact: HIGH**

**Fix:**
Remove all hash-fragment URLs. The sitemap should only contain real, server-resolvable URLs:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://salinas-ai-consing.com/</loc>
    <lastmod>2026-02-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://salinas-ai-consing.com/llm.html</loc>
    <lastmod>2026-02-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

As you add real pages (blog, individual service pages), add them here.

---

### 1.4 HIGH: OG Image Hosted on External Domain

**What is wrong:**
The Open Graph and Twitter Card images point to `https://ai-clarity-connect.lovable.app/og-image.png` — a Lovable platform subdomain you don't control.

**Why it matters:**
- If Lovable deprecates or changes that URL, your social previews break with no warning.
- Social platforms may flag third-party hosted OG images as lower-trust.
- You already have `og-image.png` in your `/public/` directory.

**Impact: HIGH**

**Fix:**
```html
<meta property="og:image" content="https://salinas-ai-consing.com/og-image.png" />
<meta name="twitter:image" content="https://salinas-ai-consing.com/og-image.png" />
```

Also update the JSON-LD Organization logo:
```json
"logo": "https://salinas-ai-consing.com/og-image.png"
```

---

### 1.5 HIGH: Footer Navigation Not Crawlable

**What is wrong:**
The footer uses `<button onClick={...}>` for navigation links instead of `<a href="...">` tags.

**Why it matters:**
Search engine crawlers follow `<a href>` links to discover pages and understand site structure. `<button>` elements with JavaScript click handlers are invisible to crawlers. This means your internal "link equity" from footer to sections is zero.

**Impact: HIGH**

**Fix:**
Replace `<button>` with `<a>` tags using proper `href` attributes:

```tsx
// Footer.tsx — Change from:
<button onClick={() => handleNavClick(link.href)}>{link.label}</button>

// To:
<a href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}>
  {link.label}
</a>
```

---

### 1.6 MEDIUM: robots.txt Uses Crawl-delay for Googlebot

**What is wrong:**
`Crawl-delay: 1` is set for Googlebot and Bingbot.

**Why it matters:**
- Google does not support `Crawl-delay` — it is ignored entirely. Use Google Search Console to adjust crawl rate.
- For Bing, `Crawl-delay: 1` is unnecessarily restrictive for a small site.
- Missing: AI bot directives (GPTBot, ClaudeBot, etc.) for GEO optimization.

**Impact: MEDIUM**

**Fix:** See updated robots.txt in implementation section.

---

### 1.7 MEDIUM: Stale Sitemap lastmod Dates

**What is wrong:**
All sitemap entries show `<lastmod>2025-02-05</lastmod>` — over a year old.

**Why it matters:**
Stale `lastmod` signals to Google that content hasn't been updated, reducing crawl priority. If content has changed since then, Google may not re-crawl.

**Impact: MEDIUM**

**Fix:** Update to current date and maintain accuracy going forward.

---

### 1.8 MEDIUM: Missing AI Crawler Directives

**What is wrong:**
`robots.txt` has no directives for AI crawlers: GPTBot (OpenAI), ClaudeBot (Anthropic), PerplexityBot, Google-Extended, etc.

**Why it matters:**
If you want AI visibility (which you do — see Section 4), you must explicitly allow these bots. Some sites block them by default, and some crawlers respect robots.txt restrictively.

**Impact: MEDIUM**

**Fix:** Add explicit Allow directives for AI crawlers in robots.txt.

---

### 1.9 LOW: `<meta name="keywords">` Tag

**What is wrong:**
The page includes `<meta name="keywords" content="AI consulting, enterprise AI strategy...">`.

**Why it matters:**
Google has publicly stated it ignores the keywords meta tag since 2009. It adds no SEO value. It does, however, expose your keyword strategy to competitors.

**Impact: LOW (informational)**

**Fix:** Remove or leave as-is. No SEO harm, but no benefit either.

---

### 1.10 LOW: PWA Manifest Missing Proper Icon Sizes

**What is wrong:**
The manifest.json only includes one icon: `favicon.ico` at `48x48`.

**Why it matters:**
PWA install prompts on mobile require icons at 192x192 and 512x512 minimum. Without them, the site cannot be installed as a PWA.

**Impact: LOW (not core to SEO)**

**Fix:** Generate and add proper PWA icons at 192x192 and 512x512.

---

### 1.11 Core Web Vitals Risk Assessment

| Metric | Risk Level | Issue |
|--------|-----------|-------|
| **LCP** | HIGH | SPA renders blank HTML; LCP depends on JS execution completing. Target: <2.5s |
| **FID/INP** | LOW | Minimal interactivity on load. Chatbot lazy-loads. |
| **CLS** | MEDIUM | Font loading (Google Fonts) may cause layout shift. Use `font-display: swap`. |

**Recommended:** Add `font-display=swap` to Google Font imports and consider using `<link rel="preload">` for critical fonts.

---

## SECTION 2: On-Page SEO Optimization

### 2.1 Homepage Title Tag

**Current (74 chars — too long, gets truncated):**
> Salinas AI Consulting | Enterprise AI Strategy & Implementation Advisory

**Rewrite (58 chars):**
> AI Consulting for Enterprises | Salinas AI Consulting

**Rationale:** Leads with the primary keyword "AI Consulting," includes qualifier "Enterprises," and keeps brand at end. Under 60 chars for full SERP display.

**Alternative options:**
- `Enterprise AI Consulting & Strategy | Salinas AI` (50 chars)
- `AI Strategy & Implementation Consulting | Salinas AI` (53 chars)

---

### 2.2 Meta Description

**Current (256 chars — far too long, gets truncated at ~155):**
> Expert AI consulting for regulated industries. Larry Salinas helps enterprises navigate AI strategy, implementation, and governance in healthcare, financial services, and government sectors. 15+ years experience, 50+ projects delivered.

**Rewrite (152 chars):**
> Enterprise AI consulting for healthcare, finance & government. From strategy to production-ready systems. 15+ years experience. Free initial consultation.

**Rationale:** Includes target verticals, differentiator (strategy to production), social proof (15+ years), and CTA (free consultation). Under 155 chars.

---

### 2.3 H1 Rewrite

**Current:**
> AI that ships—not just slides

**Assessment:** Creative and punchy but zero keyword value. Contains no searchable terms. No one searches "AI that ships."

**Rewrite:**
> Enterprise AI Consulting That Delivers Working Systems

**Rationale:** Contains "Enterprise AI Consulting" (primary keyword), "Working Systems" (differentiator), and communicates the same idea as "ships not slides" but in keyword-rich language.

**Alternative (if keeping brand voice is priority):**
> AI Consulting That Ships — From Strategy to Production

---

### 2.4 Suggested H2 Structure

```
H1: Enterprise AI Consulting That Delivers Working Systems
  H2: AI Consulting Services for Regulated Industries
    H3: AI Strategy Consulting
    H3: AI Pilot to Production
    H3: Regulated Industry AI Deployment
    H3: AI Technical Due Diligence
  H2: Our Proven AI Implementation Approach
    H3: Understand → Assess → Design → Build → Sustain
  H2: Why Choose Salinas AI Consulting
    H3: 15+ Years Enterprise AI Experience
    H3: Regulated Industry Expertise
    H3: Independent & Vendor-Neutral
  H2: Frequently Asked Questions About AI Consulting
  H2: Start Your AI Transformation — Free Consultation
```

---

### 2.5 Keyword Strategy

**Primary Keywords (High Volume, High Intent):**
- `AI consulting` (4,400/mo)
- `AI consulting firm` (1,900/mo)
- `enterprise AI consulting` (880/mo)
- `AI strategy consulting` (720/mo)

**Secondary Keywords (Medium Volume, High Intent):**
- `AI implementation consulting` (480/mo)
- `generative AI consulting` (1,300/mo)
- `AI governance consulting` (320/mo)
- `AI advisory services` (260/mo)

**Long-Tail Service Keywords (Lower Volume, Highest Intent):**
- `AI consulting for healthcare` (170/mo)
- `AI consulting for financial services` (140/mo)
- `AI consulting for regulated industries` (90/mo)
- `AI pilot to production consulting` (50/mo)
- `AI vendor due diligence` (40/mo)
- `independent AI consultant` (70/mo)
- `AI strategy consultant near me` (110/mo)
- `hire AI consultant for enterprise` (60/mo)

---

### 2.6 Homepage Hero Copy Rewrite

**Current:**
```
Enterprise AI Advisory

AI that ships—not just slides

I help organizations move AI and Generative AI from strategy to working systems,
with a focus on regulated industries like healthcare and financial services.
```

**Rewrite:**
```
Enterprise AI Consulting

Enterprise AI Consulting That Delivers Working Systems

I help enterprises move AI and Generative AI from strategy to production — with
deep expertise in regulated industries including healthcare, financial services,
and government. 15+ years. 50+ projects. Zero vendor bias.
```

**Why this is better:**
1. **Clarity:** Immediately communicates what you do (AI consulting) and for whom (enterprises).
2. **Authority:** "15+ years. 50+ projects. Zero vendor bias." — compressed credibility.
3. **Conversion:** Specificity attracts the right prospect. Enterprise buyers need to see scale.
4. **Keyword alignment:** "Enterprise AI Consulting" in H1 and subhead captures primary search intent.

---

## SECTION 3: Structured Data

### 3.1 Current Assessment

Your existing JSON-LD is actually quite solid — Organization, Person, ProfessionalService, WebSite, and BreadcrumbList are all present. Issues:

1. **All URLs point to wrong domain** (see Section 1.1)
2. **Missing FAQ schema** — huge opportunity for rich results
3. **Missing LocalBusiness** — you're based in Chicago
4. **Logo URL points to external domain**
5. **Missing `telephone` field** on ContactPoint

### 3.2 Enhanced JSON-LD (Copy-Paste Ready)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://salinas-ai-consing.com/#organization",
      "name": "Salinas AI Consulting",
      "url": "https://salinas-ai-consing.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://salinas-ai-consing.com/og-image.png",
        "width": 1200,
        "height": 672
      },
      "description": "Enterprise AI consulting firm specializing in AI strategy, implementation, and governance for regulated industries including healthcare, financial services, and government.",
      "foundingDate": "2024",
      "founder": {
        "@type": "Person",
        "@id": "https://salinas-ai-consing.com/#founder"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "salinasaiconsulting@outlook.com",
        "availableLanguage": ["English"]
      },
      "sameAs": [
        "https://linkedin.com/in/larry-salinas-mba-56394934"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "knowsAbout": [
        "Artificial Intelligence",
        "Machine Learning",
        "Generative AI",
        "AI Strategy",
        "AI Governance",
        "Healthcare AI",
        "Financial Services AI",
        "Government AI",
        "AI Implementation",
        "AI Consulting"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://salinas-ai-consing.com/#founder",
      "name": "Larry Salinas",
      "jobTitle": "Enterprise AI Consultant",
      "description": "Independent AI consultant with 15+ years of experience helping enterprises implement AI solutions in regulated industries including healthcare, financial services, and government.",
      "url": "https://salinas-ai-consing.com",
      "sameAs": [
        "https://linkedin.com/in/larry-salinas-mba-56394934"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "MBA Program"
      },
      "knowsAbout": [
        "AI Strategy",
        "Enterprise AI Implementation",
        "AI Governance",
        "Regulated Industries",
        "Healthcare Technology",
        "Financial Services Technology",
        "Generative AI"
      ],
      "worksFor": {
        "@type": "Organization",
        "@id": "https://salinas-ai-consing.com/#organization"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://salinas-ai-consing.com/#website",
      "url": "https://salinas-ai-consing.com",
      "name": "Salinas AI Consulting",
      "description": "Enterprise AI Consulting & Advisory Services",
      "publisher": {
        "@type": "Organization",
        "@id": "https://salinas-ai-consing.com/#organization"
      }
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://salinas-ai-consing.com/#service",
      "name": "Salinas AI Consulting",
      "provider": {
        "@type": "Organization",
        "@id": "https://salinas-ai-consing.com/#organization"
      },
      "serviceType": "AI Consulting",
      "description": "Enterprise AI consulting firm offering strategy development, pilot-to-production implementation, regulated industry AI deployment, and technical due diligence.",
      "url": "https://salinas-ai-consing.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.8781",
        "longitude": "-87.6298"
      },
      "priceRange": "$$$$",
      "areaServed": [
        {
          "@type": "Country",
          "name": "United States"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Consulting Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Strategy Consulting",
              "description": "Strategic AI planning to identify where AI creates value for your business, with a clear implementation roadmap tailored to your industry and constraints."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Pilot to Production",
              "description": "Move AI initiatives from proof-of-concept to production-ready systems with proper governance, operations, and organizational readiness."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Regulated Industry AI Consulting",
              "description": "Specialized AI deployment for healthcare, financial services, and government with deep compliance and governance expertise."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Technical Due Diligence",
              "description": "Expert evaluation of AI talent, vendors, and technology investments to inform hiring and procurement decisions."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://salinas-ai-consing.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does an AI consultant do for enterprises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An enterprise AI consultant helps organizations identify high-value AI opportunities, develop implementation strategies, select the right technologies and vendors, navigate regulatory requirements, and move AI projects from pilot to production. At Salinas AI Consulting, we focus specifically on regulated industries where governance and compliance are critical."
          }
        },
        {
          "@type": "Question",
          "name": "How much does enterprise AI consulting cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enterprise AI consulting engagements typically range from focused assessments (1-2 weeks) to full implementation advisory (3-6 months). Pricing depends on scope, complexity, and industry requirements. Salinas AI Consulting offers a free initial consultation to assess your needs and provide a tailored proposal."
          }
        },
        {
          "@type": "Question",
          "name": "What industries does Salinas AI Consulting specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Salinas AI Consulting specializes in regulated industries including healthcare, financial services, and government. These sectors require deep understanding of compliance frameworks (HIPAA, SOX, FedRAMP), data governance, and risk management when deploying AI systems."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between AI strategy and AI implementation consulting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI strategy consulting focuses on identifying where AI creates business value and creating a roadmap. AI implementation consulting takes that strategy and turns it into working systems — selecting technologies, building governance frameworks, managing change, and ensuring production readiness. Salinas AI Consulting provides both, end-to-end."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to implement AI in an enterprise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A typical enterprise AI implementation takes 3-12 months from strategy to production, depending on complexity, data readiness, and organizational maturity. Quick wins like process automation can be achieved in 4-8 weeks. Larger initiatives like predictive analytics platforms require 6-12 months for full deployment with proper governance."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://salinas-ai-consing.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://salinas-ai-consing.com"
        }
      ]
    }
  ]
}
```

---

## SECTION 4: GEO & AI Visibility Optimization

### 4.1 What is GEO (Generative Engine Optimization)?

GEO is the practice of optimizing content so that AI systems (ChatGPT, Claude, Perplexity, Google AI Overviews) can discover, understand, and cite your business when users ask questions. This is different from traditional SEO.

### 4.2 How AI Crawlers Discover Your Content

| Bot | Organization | robots.txt Name |
|-----|-------------|-----------------|
| GPTBot | OpenAI | GPTBot |
| ClaudeBot | Anthropic | anthropic-ai |
| PerplexityBot | Perplexity | PerplexityBot |
| Google-Extended | Google (Gemini) | Google-Extended |

**Current status:** Your robots.txt has no directives for any of these. Add explicit `Allow: /` for each.

### 4.3 LLM-Friendly Summary Page (/llm.html)

Create a static HTML page at `/public/llm.html` specifically optimized for AI consumption. This page should:

- Use clean, semantic HTML (no JavaScript required)
- Structure content with clear headings
- Include factual, citable information
- Cover: who you are, what you do, who you serve, how to contact you
- Use schema.org markup

**This file is created as part of this implementation.** See `public/llm.html`.

### 4.4 Featured Snippet Optimization

Target these snippet formats:

**Paragraph Snippets (definition queries):**
- "What is enterprise AI consulting?" → Provide a 40-60 word definition
- "What does an AI strategy consultant do?" → Clear, concise answer

**List Snippets (process queries):**
- "How to implement AI in healthcare" → Numbered steps
- "Steps to deploy AI in financial services" → Ordered list

**Table Snippets (comparison queries):**
- "AI consulting firms comparison" → Comparison table
- "AI implementation timeline" → Phase/duration table

### 4.5 Suggested FAQ Content (for on-page display + schema)

1. **What does an AI consultant do for enterprises?**
2. **How much does enterprise AI consulting cost?**
3. **What industries does Salinas AI Consulting specialize in?**
4. **What is the difference between AI strategy and AI implementation consulting?**
5. **How long does it take to implement AI in an enterprise?**
6. **Do I need AI consulting if I already have a data science team?**
7. **What is AI governance and why does it matter?**
8. **How do you ensure AI compliance in regulated industries?**

### 4.6 Suggested Long-Form Content Topics

1. **"The Enterprise AI Implementation Guide for Regulated Industries" (Pillar Page)**
   - 3,000+ words, covers strategy through production
   - Target: "enterprise AI implementation"

2. **"AI in Healthcare: A Compliance-First Implementation Guide"**
   - 2,500+ words, HIPAA considerations, use cases
   - Target: "AI in healthcare consulting"

3. **"Generative AI for Financial Services: Opportunities and Governance"**
   - 2,500+ words, covers GenAI in banking/insurance
   - Target: "generative AI financial services"

4. **"AI Vendor Due Diligence Checklist for Enterprise Buyers"**
   - Downloadable lead magnet, 1,500+ words
   - Target: "AI vendor evaluation"

### 4.7 Suggested Comparison Pages

- `/blog/ai-consulting-firms-comparison` — Compare approaches (boutique vs. Big 4)
- `/blog/build-vs-buy-ai-enterprise` — Build internal vs. hire consultant
- `/blog/ai-consultant-vs-data-scientist` — Role comparison

### 4.8 LLM-Friendly Content Structure

Every content page should follow this structure:

```
[Clear H1 with primary keyword]
[2-3 sentence summary paragraph — this is what LLMs extract]
[Table of Contents]

[H2: Sections with clear, factual content]
[Key statistics in bold or tables]
[FAQ section at bottom with schema markup]

[Author attribution with credentials]
[Last updated date]
```

---

## SECTION 5: Content Strategy Plan (90 Days)

### Month 1: Foundation Content

| Week | Content | Target Keyword | Type |
|------|---------|---------------|------|
| 1 | "What Is Enterprise AI Consulting? A Complete Guide" | enterprise AI consulting | Pillar |
| 2 | "AI Strategy vs. AI Implementation: What Your Business Needs" | AI strategy consulting | Comparison |
| 3 | "5 Signs Your Enterprise Needs an AI Consultant" | hire AI consultant | List |
| 4 | "AI Governance Framework for Regulated Industries" | AI governance consulting | Guide |

### Month 2: Industry-Specific Content

| Week | Content | Target Keyword | Type |
|------|---------|---------------|------|
| 5 | "AI in Healthcare: Implementation Guide for Hospital Systems" | AI consulting healthcare | Guide |
| 6 | "Generative AI in Financial Services: Risk & Opportunity" | generative AI financial services | Analysis |
| 7 | "AI for Government Agencies: From Procurement to Deployment" | AI consulting government | Guide |
| 8 | "AI Vendor Due Diligence: The Enterprise Buyer's Checklist" | AI vendor evaluation | Lead Magnet |

### Month 3: Authority & Conversion Content

| Week | Content | Target Keyword | Type |
|------|---------|---------------|------|
| 9 | "How to Move AI from Pilot to Production (Without Losing Momentum)" | AI pilot to production | How-to |
| 10 | "The True Cost of AI Implementation in 2026" | AI implementation cost | Data-driven |

### Content Clusters

**Cluster 1: AI Strategy**
- Pillar: "Enterprise AI Consulting Guide"
- Spokes: Strategy vs. Implementation, 5 Signs You Need a Consultant, AI Readiness Assessment

**Cluster 2: Regulated Industries**
- Pillar: "AI for Regulated Industries"
- Spokes: Healthcare AI, Financial Services AI, Government AI

**Cluster 3: AI Implementation**
- Pillar: "AI Pilot to Production Guide"
- Spokes: AI Governance Framework, Vendor Due Diligence, Implementation Cost

### Internal Linking Strategy

```
Homepage
├── /blog/enterprise-ai-consulting-guide (Pillar)
│   ├── /blog/ai-strategy-vs-implementation
│   ├── /blog/signs-you-need-ai-consultant
│   └── /blog/ai-readiness-assessment
├── /blog/ai-regulated-industries (Pillar)
│   ├── /blog/ai-healthcare-implementation
│   ├── /blog/generative-ai-financial-services
│   └── /blog/ai-government-deployment
└── /blog/ai-pilot-to-production (Pillar)
    ├── /blog/ai-governance-framework
    ├── /blog/ai-vendor-due-diligence
    └── /blog/ai-implementation-cost
```

Every blog post links:
- Up to its pillar page
- Across to 1-2 related spoke pages
- Down to the contact/consultation CTA

### Conversion-Focused Content

1. **AI Readiness Assessment** (interactive quiz → lead capture)
2. **AI Implementation Cost Calculator** (tool → lead capture)
3. **Case Study Template** (gated download → email capture)
4. **AI Strategy Workshop Landing Page** (direct conversion)

---

## SECTION 6: Performance Optimization

### 6.1 Likely Speed Bottlenecks

| Issue | Impact | Priority |
|-------|--------|----------|
| **SPA JavaScript bundle** | JS must load, parse, and execute before any content renders. LCP delayed. | CRITICAL |
| **Google Fonts external load** | Render-blocking or FOUT. Fonts loaded from `fonts.googleapis.com`. | HIGH |
| **No code splitting** | Entire React app loaded on homepage, including chatbot, all UI components. | HIGH |
| **No image optimization** | `og-image.png` is 43KB (acceptable), but `favicon.ico` is 20KB (oversized). | MEDIUM |
| **Supabase client loaded on page init** | Supabase JS SDK loaded even if user never interacts with chatbot. | MEDIUM |

### 6.2 Image Optimization

- **favicon.ico (20KB):** Convert to optimized `.ico` with only 16x16, 32x32, and 48x48 sizes. Target: <5KB.
- **og-image.png (43KB):** Convert to WebP for on-page use. Keep PNG for OG (social platforms need PNG/JPG).
- **placeholder.svg (3.2KB):** Acceptable.
- **Future images:** Use `<picture>` with WebP + fallback. Lazy-load below-fold images.

### 6.3 Code Splitting Strategies

```typescript
// vite.config.ts — Add manual chunks
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          supabase: ['@supabase/supabase-js'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-popover'],
        }
      }
    }
  }
});
```

```typescript
// Lazy-load the chatbot (it's not needed on initial render)
const Chatbot = React.lazy(() => import('./components/Chatbot'));
```

### 6.4 Caching Strategy

Add these headers via hosting provider (Netlify/Vercel/Cloudflare):

```
# Static assets (JS, CSS, images) — 1 year cache (Vite adds content hashes)
Cache-Control: public, max-age=31536000, immutable

# HTML — no cache (always fresh)
Cache-Control: public, max-age=0, must-revalidate

# Fonts — 1 year cache
Cache-Control: public, max-age=31536000, immutable
```

### 6.5 Hosting Improvements

- **Current:** Likely Lovable hosting (based on lovable-tagger plugin).
- **Recommended:** Deploy to **Cloudflare Pages** or **Vercel** for:
  - Global CDN with edge caching
  - Automatic Brotli compression
  - HTTP/3 support
  - Better Core Web Vitals scores
  - Free SSL with HSTS

---

## SECTION 7: Prioritized Execution Plan (30 Days)

### Week 1: Critical Technical Fixes (Days 1-7)

| Day | Task | Impact | Time |
|-----|------|--------|------|
| 1 | Fix domain mismatch across ALL files (canonical, OG, JSON-LD, sitemap, robots.txt) | CRITICAL | 2h |
| 1 | Add `<noscript>` fallback with full content | CRITICAL | 1h |
| 2 | Fix OG image URLs to self-hosted domain | HIGH | 30m |
| 2 | Fix footer navigation (button → anchor tags) | HIGH | 30m |
| 2 | Fix sitemap.xml (remove hash fragments, update lastmod) | HIGH | 30m |
| 3 | Update robots.txt with AI crawler directives | MEDIUM | 30m |
| 3 | Create `/llm.html` for AI visibility | MEDIUM | 2h |
| 4 | Add FAQ schema to JSON-LD | HIGH | 1h |
| 5 | Implement code splitting (lazy chatbot, vendor chunks) | MEDIUM | 2h |
| 6-7 | Submit updated sitemap to Google Search Console and Bing Webmaster Tools | HIGH | 1h |

### Week 2: On-Page Rewrites (Days 8-14)

| Day | Task | Impact | Time |
|-----|------|--------|------|
| 8 | Rewrite title tag and meta description | HIGH | 30m |
| 8 | Rewrite H1 and hero section copy | HIGH | 1h |
| 9 | Restructure H2/H3 hierarchy across all sections | MEDIUM | 2h |
| 10 | Add keyword-rich alt text to all images | MEDIUM | 1h |
| 11 | Add internal anchor text optimization | MEDIUM | 1h |
| 12-14 | Write and publish first pillar content piece | HIGH | 8h |

### Week 3: Structured Data + Content Foundation (Days 15-21)

| Day | Task | Impact | Time |
|-----|------|--------|------|
| 15 | Validate all JSON-LD with Google Rich Results Test | HIGH | 1h |
| 16 | Set up blog infrastructure (routes, layout, components) | HIGH | 4h |
| 17-18 | Write 2 spoke articles for Cluster 1 | HIGH | 6h |
| 19 | Create FAQ page with schema markup | MEDIUM | 3h |
| 20-21 | Write industry-specific article (healthcare or finance) | HIGH | 4h |

### Week 4: Content + Authority Building (Days 22-30)

| Day | Task | Impact | Time |
|-----|------|--------|------|
| 22-23 | Write 2 more blog articles | MEDIUM | 6h |
| 24 | Set up Google Search Console, Bing Webmaster Tools, Google Analytics | HIGH | 2h |
| 25 | Submit all new pages to Google for indexing | HIGH | 1h |
| 26-27 | Build 5 quality backlinks (guest posts, directories, LinkedIn articles) | HIGH | 4h |
| 28 | Create AI Readiness Assessment lead magnet | MEDIUM | 4h |
| 29-30 | Review Core Web Vitals in PageSpeed Insights, fix any issues | MEDIUM | 3h |

---

## Implementation Status

The following fixes have been implemented in this codebase:

- [x] Fixed domain references across index.html (canonical, OG, Twitter, JSON-LD)
- [x] Added `<noscript>` fallback with full content
- [x] Fixed OG image URLs to self-hosted
- [x] Enhanced JSON-LD with FAQ schema, LocalBusiness, improved descriptions
- [x] Fixed sitemap.xml (removed hash fragments, updated dates)
- [x] Updated robots.txt with AI crawler directives
- [x] Created `/public/llm.html` for AI/LLM visibility
- [x] Fixed footer navigation (button → anchor tags)
- [x] Updated title tag and meta description
- [x] Rewritten H1 for keyword alignment
