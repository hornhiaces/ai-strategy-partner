# 90-Day SEO Growth Roadmap
## Salinas AI Consulting — salinas-ai-consulting.com
### Prepared: February 27, 2026

---

## Executive Summary

This is a week-by-week execution plan to take Salinas AI Consulting from an early-stage site with limited authority to a recognized inbound lead machine for AI consulting services. Every recommendation is tailored to Larry Salinas's positioning as a **hands-on AI consultant who builds real AI apps and teaches clients how to build** — not a generic advisor.

**Current State:**
- React SPA on Lovable hosting (limited SSR)
- 7 indexable pages (homepage + 6 service pages + 1 LLM page)
- Zero blog content, zero backlinks of note
- No YouTube or GitHub SEO integration
- Domain age: ~1 year, low Domain Authority

**90-Day Target:**
- 30+ indexed pages (service pages + blog content)
- 500–1,500 organic sessions/month by Day 90
- 3–5 high-quality backlinks per month
- First page rankings for 5–10 long-tail keywords
- Consistent inbound consultation requests from organic search

**Realistic Expectations:** With a brand-new domain and zero backlinks, you will NOT rank for head terms like "AI consulting" (4,400/mo) in 90 days. The strategy focuses on long-tail, low-competition keywords where you can win fast, while building the topical authority foundation that compounds over months 4–12.

---

## Phase 1: Technical SEO Foundation (Weeks 1–2)

### Week 1 — Critical Technical Fixes

| Task | Priority | Tools | Expected Impact | Quick Win? |
|------|----------|-------|-----------------|------------|
| **Fix SPA rendering for SEO** — Add prerendering via `vite-plugin-prerender` or migrate critical pages to static HTML. Your React SPA delivers an empty `<div id="root">` to crawlers. The `<noscript>` fallback helps but is not equivalent to real server-rendered content. | HIGH | Vite, `vite-plugin-prerender`, or Prerender.io | Enables proper indexing of all pages. Without this, everything else is built on sand. | No — foundational |
| **Set up Google Search Console (GSC)** — Verify domain ownership, submit sitemap, request indexing for all 7 pages. | HIGH | Google Search Console (free) | Accelerates indexing from weeks to days. Gives you real crawl data. | Yes |
| **Set up Bing Webmaster Tools** — Import from GSC. Bing powers DuckDuckGo + ChatGPT search. | MEDIUM | Bing Webmaster Tools (free) | Broader search engine coverage. Bing is underrated for B2B. | Yes |
| **Set up Google Analytics 4 (GA4)** — Track organic sessions, conversions (consultation form submits, email clicks, LinkedIn clicks). Set up goals for each CTA. | HIGH | GA4 (free) | Baseline measurement. You can't improve what you don't measure. | Yes |
| **Install Microsoft Clarity** — Free heatmaps and session recordings. See exactly how visitors interact with your site. | LOW | Microsoft Clarity (free) | Understand user behavior without paying for Hotjar. | Yes |
| **Audit and fix Core Web Vitals** — Run Lighthouse on every page. Priorities: (1) lazy-load the chatbot, (2) add `font-display: swap` to Google Fonts, (3) implement code splitting for vendor chunks. | HIGH | Lighthouse, PageSpeed Insights (free) | CWV is a ranking signal. SPA sites are penalized on LCP by default. | No |
| **Fix internal linking** — Your header navigation only uses anchor scrolls (`#services`, `#approach`). These are invisible to crawlers. Add a proper `<nav>` with `<a href>` links to all 6 service pages in both header and footer. | HIGH | Manual code edit | Distributes link equity to service pages. Currently they're orphaned from main nav. | Yes |

### Week 2 — On-Page SEO Optimization

| Task | Priority | Tools | Expected Impact | Quick Win? |
|------|----------|-------|-----------------|------------|
| **Optimize homepage title & meta description** — Current title: "AI Strategy & Product Coaching \| Salinas AI Consulting" (58 chars, good). But the meta description doesn't mention prompt engineering, vibe coding, or app building — your differentiators. Rewrite to: *"Hands-on AI consulting: strategy, prompt engineering, vibe coding & AI app development. I build real AI products and teach you how. Free consultation."* (155 chars) | HIGH | Manual | Better CTR from SERPs. Differentiates from every other "AI consulting" result. | Yes |
| **Rewrite each service page H1 for keyword targeting** — Each service page H1 should lead with the target keyword, not brand copy. Example: `/hands-on-ai-product-coaching` H1 should be "AI Product Coaching: Build Real AI Apps with Expert Guidance" not a generic tagline. | HIGH | Manual | H1 is the strongest on-page signal. Align every page to its target keyword. | Yes |
| **Add FAQ sections to every service page** — Each page should have 3–5 FAQs with `FAQPage` schema markup. Target "People Also Ask" boxes. | HIGH | Manual + Schema.org | FAQ rich results can 2–3x your SERP real estate. Each FAQ is a ranking opportunity. | Yes |
| **Optimize image alt text** — Every image should have descriptive, keyword-relevant alt text. Not "image1.png" but "Larry Salinas demonstrating AI prompt engineering workflow." | MEDIUM | Manual | Accessibility + image search traffic. Minor but cumulative. | Yes |
| **Add author attribution to every page** — "By Larry Salinas, AI Consultant & Builder" with a link to your LinkedIn. EEAT signal. | MEDIUM | Manual | Google rewards content with clear author attribution. | Yes |
| **Create a dedicated About/Bio page** — Currently your bio is inline on the homepage `#about` section. Create `/about` with full credentials, experience, approach, and photo. This becomes your EEAT anchor page. | HIGH | New page component | Anchor page for all author citations. Critical for EEAT. | No |

---

## Phase 2: Keyword Cluster Strategy & Content Foundation (Weeks 3–6)

### Keyword Cluster Map — Tailored to Your Positioning

Your positioning has **five natural content pillars**. Each pillar targets a keyword cluster with one pillar page and 3–4 supporting spoke articles.

---

#### Cluster 1: AI Strategy Consulting
**Pillar Keyword:** `AI strategy consulting` (720/mo)

| Content Piece | Target Keyword | Volume | Difficulty | Type |
|---------------|---------------|--------|------------|------|
| **Pillar: "The Complete Guide to AI Strategy Consulting in 2026"** | ai strategy consulting | 720/mo | Medium | Long-form guide (3,000+ words) |
| "AI Strategy vs. AI Implementation: What Your Business Actually Needs" | ai strategy vs implementation | 170/mo | Low | Comparison |
| "How to Create an AI Roadmap for Your Business (Step-by-Step)" | ai roadmap for business | 210/mo | Low | How-to |
| "5 Signs Your Company Needs an AI Strategy Consultant" | hire ai strategy consultant | 90/mo | Low | List |
| "AI Strategy for Small Business: A Practical Guide" | ai strategy small business | 320/mo | Low | Guide |

---

#### Cluster 2: Prompt Engineering
**Pillar Keyword:** `prompt engineering consulting` (260/mo)

| Content Piece | Target Keyword | Volume | Difficulty | Type |
|---------------|---------------|--------|------------|------|
| **Pillar: "Prompt Engineering for Business: Beyond ChatGPT Tricks"** | prompt engineering for business | 480/mo | Low | Long-form guide |
| "Prompt Engineering Best Practices for Enterprise Teams" | prompt engineering best practices | 1,600/mo | Medium | Best practices |
| "How to Hire a Prompt Engineering Consultant (What to Look For)" | prompt engineering consultant | 260/mo | Low | Buyer's guide |
| "Prompt Engineering vs. Fine-Tuning: When to Use Which" | prompt engineering vs fine tuning | 390/mo | Low | Comparison |
| "Custom GPT Development: How to Build GPTs That Actually Work" | custom gpt development | 210/mo | Low | Tutorial |

---

#### Cluster 3: Vibe Coding & AI App Development
**Pillar Keyword:** `vibe coding` (emerging — low competition, high trend)

| Content Piece | Target Keyword | Volume | Difficulty | Type |
|---------------|---------------|--------|------------|------|
| **Pillar: "Vibe Coding: How to Build Apps with AI (Complete Guide)"** | vibe coding | 1,200+/mo (trending) | Low | Definitive guide |
| "Vibe Coding with Lovable: Build a Full-Stack App Without Writing Code" | vibe coding lovable | 90/mo | Very Low | Tutorial |
| "Vibe Coding vs. Traditional Development: What Founders Need to Know" | vibe coding vs traditional | 50/mo | Very Low | Comparison |
| "Best Vibe Coding Tools in 2026: Lovable, Cursor, Bolt, Replit" | vibe coding tools | 320/mo | Low | Roundup |
| "How I Built [Real App] in 48 Hours Using Vibe Coding" | (brand search + social shares) | — | Very Low | Case study |

> **This is your biggest SEO opportunity.** "Vibe coding" is a fast-rising search term with almost no established content authority. You can own this topic if you move now.

---

#### Cluster 4: AI Product Coaching & Building
**Pillar Keyword:** `ai product coaching` (50/mo — niche but high-intent)

| Content Piece | Target Keyword | Volume | Difficulty | Type |
|---------------|---------------|--------|------------|------|
| **Pillar: "AI Product Coaching: From Idea to Launched App"** | ai product coaching | 50/mo | Very Low | Long-form guide |
| "How to Build an AI SaaS Product (Without a Technical Co-Founder)" | build ai saas product | 170/mo | Low | How-to |
| "Lovable App Development: Complete Tutorial for Non-Technical Founders" | lovable app development | 140/mo | Very Low | Tutorial |
| "AI MVP Development: Ship Your First AI Product in 30 Days" | ai mvp development | 110/mo | Low | Guide |
| "AI App Ideas for Small Businesses in 2026" | ai app ideas small business | 260/mo | Low | List |

---

#### Cluster 5: AI Consulting for Industries
**Pillar Keyword:** `ai consulting for small business` (390/mo)

| Content Piece | Target Keyword | Volume | Difficulty | Type |
|---------------|---------------|--------|------------|------|
| **Pillar: "AI Consulting for Small Business: What You Actually Need"** | ai consulting small business | 390/mo | Medium | Long-form guide |
| "AI Consulting for Startups: Build vs. Buy vs. Coach" | ai consulting startups | 170/mo | Low | Comparison |
| "How Much Does an AI Consultant Cost in 2026?" | ai consultant cost | 480/mo | Medium | Data-driven |
| "AI Consulting for Healthcare: Implementation Guide" | ai consulting healthcare | 170/mo | Low | Guide |
| "Generative AI Consulting: What Services to Expect" | generative ai consulting | 1,300/mo | Medium | Guide |

---

### Week 3 — Content Infrastructure

| Task | Priority | Tools | Expected Impact | Quick Win? |
|------|----------|-------|-----------------|------------|
| **Build blog infrastructure** — Add `/blog` route with an index page listing all posts. Use a simple MDX or markdown-based system. Each post gets its own URL path (e.g., `/blog/vibe-coding-guide`). | HIGH | React Router, MDX or simple components | Required foundation for all content. Without real URLs, content strategy is impossible. | No |
| **Create blog post template** — Standardize: SEO head, breadcrumbs, author box (photo + bio + LinkedIn), table of contents, related posts, CTA section, FAQ section with schema. | HIGH | React components | Consistency + built-in EEAT signals on every piece of content. | No |
| **Set up keyword tracking** — Track rankings for your top 30 target keywords. | MEDIUM | Ubersuggest (free tier), or SEMrush/Ahrefs ($99–$129/mo) | Know what's working. Track progress weekly. | Yes |
| **Create an editorial calendar** — Map out all 20+ content pieces across Weeks 4–12. Assign publish dates. | HIGH | Google Sheets or Notion (free) | Prevents content gaps. Keeps you accountable. | Yes |

### Week 4 — First Pillar Content (Vibe Coding)

| Task | Priority | Tools | Expected Impact | Quick Win? |
|------|----------|-------|-----------------|------------|
| **Write & publish: "Vibe Coding: How to Build Apps with AI (Complete Guide)"** — 3,000+ words. Cover: what vibe coding is, tools (Lovable, Cursor, Bolt, Replit), step-by-step workflow, real examples you've built, who it's for, limitations. Include screenshots of actual apps you've built. | HIGH | Your expertise + Lovable screenshots | First-mover advantage on a trending keyword. This single piece could drive 500+ visits/month within 60 days. | Yes — biggest quick win |
| **Write & publish: "Vibe Coding with Lovable: Build a Full-Stack App"** — 2,000+ words tutorial. Step-by-step walkthrough of building a real app. Link to the pillar. | HIGH | Your expertise | Supports the pillar. Captures long-tail "lovable tutorial" traffic. | Yes |
| **Submit both to Google Search Console** — Request indexing immediately after publish. | HIGH | GSC (free) | Cuts indexing time from weeks to days. | Yes |

### Week 5 — Prompt Engineering Content

| Task | Priority | Tools | Expected Impact | Quick Win? |
|------|----------|-------|-----------------|------------|
| **Write & publish: "Prompt Engineering for Business: Beyond ChatGPT Tricks"** — Pillar page. 3,000+ words. Cover: what business prompt engineering looks like, enterprise use cases, frameworks, your methodology, ROI examples. | HIGH | Your expertise | Captures growing "prompt engineering for business" intent. | No — medium-term |
| **Write & publish: "Custom GPT Development: How to Build GPTs That Actually Work"** — 2,000+ words. Practical tutorial with real examples. | MEDIUM | Your expertise | Captures high-intent builders looking for GPT guidance. | Yes |
| **Repurpose content to LinkedIn** — Take key sections from each blog post and publish as LinkedIn articles. Link back to the full post. | MEDIUM | LinkedIn (free) | Backlinks from LinkedIn (nofollow but high authority domain), referral traffic, personal brand. | Yes |

### Week 6 — AI Strategy + Small Business Content

| Task | Priority | Tools | Expected Impact | Quick Win? |
|------|----------|-------|-----------------|------------|
| **Write & publish: "AI Consulting for Small Business: What You Actually Need"** — Pillar page. 2,500+ words. Position yourself vs. McKinsey/Deloitte: you're the consultant who builds with clients, not delivers 200-page reports. | HIGH | Your expertise | Directly targets your ideal client with buying intent. | No — medium-term |
| **Write & publish: "AI Strategy for Small Business: A Practical Guide"** — 2,000+ words. Spoke article linking to the pillar. | MEDIUM | Your expertise | Long-tail capture. Builds cluster depth. | No |
| **Implement internal linking across all published content** — Every blog post must link to: (1) its pillar page, (2) 1–2 related spoke articles, (3) the relevant service page, (4) the consultation CTA. | HIGH | Manual | Internal links are the #1 lever you control. This distributes authority from new content to money pages. | Yes |

---

## Phase 3: Authority Building & EEAT (Weeks 7–9)

### Week 7 — Backlink Foundation

| Task | Priority | Tools | Expected Impact | Quick Win? |
|------|----------|-------|-----------------|------------|
| **Create 3 GitHub repositories showcasing your work** — Examples: (1) "prompt-engineering-templates" — a curated collection of business prompt templates, (2) "vibe-coding-examples" — sample apps built with Lovable/Cursor, (3) "ai-strategy-frameworks" — decision frameworks and assessment tools. Each repo gets a README that links back to your site. | HIGH | GitHub (free) | GitHub repos rank in Google. READMEs with backlinks pass authority. Demonstrates EEAT "Experience." | Yes |
| **Optimize your LinkedIn profile for SEO** — Headline: "AI Consultant \| Prompt Engineering \| Vibe Coding \| I Build AI Apps & Teach You How." About section: keyword-rich, links to your site. Featured section: links to your best blog posts. | HIGH | LinkedIn (free) | LinkedIn profiles rank on page 1 for personal name searches. Controls your brand SERP. | Yes |
| **Publish your first LinkedIn article** — Repurpose your vibe coding pillar into a LinkedIn article (1,500 words). Include "Read the full guide at [your site URL]." | HIGH | LinkedIn (free) | LinkedIn articles get indexed by Google. High-DA backlink + referral traffic. | Yes |
| **Submit to AI consulting directories** — Clutch.co, G2, AI Expert Network, Toptal (if applicable), Expert360, UpCity. | MEDIUM | Directory sites (free–paid) | Directory listings are easy, relevant backlinks. Some directories rank for "AI consultant" themselves. | Yes |

### Week 8 — EEAT Amplification

| Task | Priority | Tools | Expected Impact | Quick Win? |
|------|----------|-------|-----------------|------------|
| **Create a YouTube channel** — Channel name: "Salinas AI Consulting" or "Larry Salinas AI." Upload your first 3 videos (see content ideas below). | HIGH | YouTube (free), screen recorder (Loom free, OBS free) | YouTube videos rank in Google. Video thumbnails in SERPs increase CTR. YouTube is the #2 search engine. | No — long-term compound |
| **YouTube Video Ideas (first 3):** | | | | |
| (1) "What is Vibe Coding? Build an App in 20 Minutes" — screen recording of you building something in Lovable. | HIGH | Screen recorder + Lovable | Captures trending search term with video content. | Yes |
| (2) "Prompt Engineering Tips That Actually Work for Business" — 10-minute walkthrough of your frameworks. | MEDIUM | Screen recorder | Supports your prompt engineering content cluster. | No |
| (3) "How I Built [App Name] with AI in 48 Hours" — portfolio showcase / case study. | MEDIUM | Screen recorder | Social proof + demonstrates real expertise. | No |
| **Embed YouTube videos in corresponding blog posts** — The vibe coding video goes in the vibe coding blog post. Increases time on page (engagement signal) and creates a content flywheel. | HIGH | Manual embed | Increases dwell time. Google tracks engagement metrics. Blog sends traffic to YouTube; YouTube sends traffic to blog. | Yes |
| **Write & publish 2 guest posts** — Target: AI/tech blogs, small business blogs, startup blogs. Pitch topics where you have unique expertise (vibe coding, prompt engineering for business). Include author bio with link to your site. | HIGH | HARO (free), manual outreach | Do-follow backlinks from relevant sites. The #1 off-page ranking factor. | No — effort-intensive |
| **Create a "Resources" or "Tools" page** — List your favorite AI tools with short reviews. Link to your relevant blog posts. This type of page attracts natural backlinks. | MEDIUM | New page component | Link bait + internal linking hub + genuinely useful for your audience. | No |

### Week 9 — Content Velocity + More Backlinks

| Task | Priority | Tools | Expected Impact | Quick Win? |
|------|----------|-------|-----------------|------------|
| **Publish 3 more blog posts** — Focus on Clusters 2, 4, and 5 spoke articles. Suggested: (1) "How Much Does an AI Consultant Cost in 2026?", (2) "AI MVP Development: Ship Your First AI Product in 30 Days", (3) "Prompt Engineering vs. Fine-Tuning: When to Use Which" | HIGH | Your expertise | Content velocity signals freshness and topical depth to Google. | No |
| **Launch a free lead magnet** — "AI Readiness Assessment for Small Business" (PDF or interactive quiz). Gate it behind email capture. Promote on every blog post. | MEDIUM | Google Forms (free), Typeform ($25/mo), or build in Lovable | Email list building. Captured leads are warmer than cold outreach. Lead magnet pages attract backlinks. | No |
| **Answer 10 questions on Quora/Reddit related to your clusters** — Search for questions about AI consulting, prompt engineering, vibe coding, building AI apps. Give genuinely helpful 200+ word answers. Include a natural link to your relevant blog post where it adds value. | MEDIUM | Quora, Reddit (free) | Referral traffic + brand awareness + some SEO value from high-DA domains. | Yes |
| **Request indexing for all new pages in GSC** — Every time you publish, submit the URL. Don't wait for Google to discover it. | HIGH | GSC (free) | Faster indexing = faster ranking. | Yes |

---

## Phase 4: Conversion Optimization & Scaling (Weeks 10–12)

### Week 10 — Conversion Optimization for Consulting Leads

| Task | Priority | Tools | Expected Impact | Quick Win? |
|------|----------|-------|-----------------|------------|
| **Add a sticky CTA bar on all blog posts** — "Need help implementing this? Book a free AI consultation" with a button to your contact section. | HIGH | CSS + React component | Every blog reader is a potential lead. Make the path to conversion obvious. | Yes |
| **Create a dedicated "Work With Me" or "Hire Me" page** — Clearly outline: (1) who you work with, (2) what engagements look like, (3) pricing range or "starts at," (4) the process, (5) a calendar booking widget or simple contact form. | HIGH | New page component, Calendly (free tier) | High-intent visitors need a clear conversion path. Your current CTA is "email me" — that's friction. | Yes |
| **Add social proof elements** — Client testimonials (even 2–3), project outcomes, "as seen in" logos if applicable. Place above the fold on service pages. | HIGH | Manual | Trust signals directly increase conversion rate. Even a single testimonial helps. | Yes |
| **Add exit-intent popup on blog posts** — Offer lead magnet when reader is about to leave. | LOW | Custom JS or library | Captures 2–5% of abandoning visitors. Low effort, incremental gains. | Yes |
| **Optimize consultation CTA copy on every page** — Replace generic "Contact Us" with specific CTAs: "Get Your AI Strategy Session (Free)", "Book a Vibe Coding Workshop", "Schedule a Prompt Engineering Consult." Match CTA to page topic. | MEDIUM | Manual | Specific CTAs convert 2–3x better than generic ones. | Yes |

### Week 11 — Personal Brand SEO Integration

| Task | Priority | Tools | Expected Impact | Quick Win? |
|------|----------|-------|-----------------|------------|
| **Publish 2 more LinkedIn articles** — Repurpose blog content with unique intros. Each article links back to the full blog post. | HIGH | LinkedIn (free) | Backlinks, referral traffic, authority signals. LinkedIn articles often rank in top 10 for long-tail queries. | Yes |
| **Upload 2 more YouTube videos** — (4) "Lovable Tutorial: Build a SaaS App from Scratch", (5) "My AI Consulting Process (What to Expect)." | MEDIUM | YouTube + screen recorder | YouTube SEO compounding. More videos = more chances to rank in universal search. | No |
| **Cross-link all platforms** — Your website links to LinkedIn, YouTube, GitHub. Your LinkedIn links to website and YouTube. Your YouTube descriptions link to website and LinkedIn. Your GitHub READMEs link to website. | HIGH | Manual | Creates an interconnected brand web. Reinforces entity signals for Google's Knowledge Graph. | Yes |
| **Claim your Google Business Profile** — Even as a remote consultant, you can set up a service-area business in Chicago. Add photos, services, posts, and a link to your website. | HIGH | Google Business Profile (free) | Local pack visibility for "AI consultant Chicago" + "AI consultant near me" type queries. Free traffic. | Yes |
| **Publish 2 more blog posts** — Suggested: (1) "Best Vibe Coding Tools in 2026", (2) "How to Build an AI SaaS Product Without a Technical Co-Founder" | MEDIUM | Your expertise | Continuing content velocity. Deepening cluster authority. | No |

### Week 12 — Measurement, Refinement & Scaling Plan

| Task | Priority | Tools | Expected Impact | Quick Win? |
|------|----------|-------|-----------------|------------|
| **Conduct full SEO audit of progress** — Compare: (1) total indexed pages, (2) keyword rankings, (3) organic traffic, (4) backlinks acquired, (5) conversion rate (consultation requests from organic). | HIGH | GSC, GA4, Ahrefs/SEMrush | Know exactly where you stand. Data-driven decisions for months 4–6. | Yes |
| **Identify winning content and double down** — Which blog posts get the most traffic? Create more content in those clusters. Which keywords are on page 2? Optimize those pages (update content, add internal links, build backlinks). | HIGH | GSC (free) | Page 2 to page 1 is the highest-ROI optimization you can make. | Yes |
| **Update all published content** — Refresh any stats, add new sections, update dates. Signal freshness to Google. | MEDIUM | Manual | Content freshness is a ranking factor. Updated content often gets a ranking boost. | Yes |
| **Plan months 4–6** — Based on what worked, plan the next quarter: more content clusters, more backlinks, potential SSR migration, podcast guesting, speaking opportunities. | MEDIUM | Google Sheets / Notion | Compound the momentum you've built. | No |
| **Publish a "90-Day Results" blog post** — Document your own SEO journey. Share real traffic numbers, what worked, what didn't. This is exceptional EEAT content. | LOW | Your data + writing | Meta-content that attracts other consultants, SEO practitioners, and AI professionals. Natural backlink magnet. | Yes |

---

## Schema Markup Recommendations

### Currently Implemented (in your codebase)
- Organization schema
- Person schema (Larry Salinas)
- ProfessionalService schema
- WebSite schema
- BreadcrumbList schema
- FAQPage schema (homepage)

### Add These

| Schema Type | Where | Why |
|-------------|-------|-----|
| **FAQPage** | Every service page + every blog post | Each FAQ section should have matching schema. Triggers FAQ rich results. |
| **Article / BlogPosting** | Every blog post | Required for articles to appear in Google Discover and Top Stories. Include `author`, `datePublished`, `dateModified`, `image`. |
| **HowTo** | Tutorial blog posts (vibe coding, prompt engineering) | Triggers step-by-step rich results in SERPs. |
| **VideoObject** | Blog posts with embedded YouTube videos | Triggers video thumbnails in SERPs. Include `name`, `description`, `thumbnailUrl`, `uploadDate`, `contentUrl`. |
| **Course** (optional) | If you offer coaching programs | Triggers course rich results with pricing. |
| **Review / AggregateRating** | Service pages (once you have testimonials) | Star ratings in SERPs dramatically increase CTR. |
| **LocalBusiness** | About page | Reinforces Chicago location for local searches. |
| **SameAs** | Organization schema | Add YouTube channel URL and GitHub profile URL once created. |

### Schema Implementation Example — Blog Post

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Vibe Coding: How to Build Apps with AI (Complete Guide)",
  "description": "Learn vibe coding — the AI-first approach to building apps using tools like Lovable, Cursor, and Bolt. Step-by-step guide from a hands-on AI consultant.",
  "author": {
    "@type": "Person",
    "name": "Larry Salinas",
    "url": "https://salinas-ai-consulting.com/about",
    "jobTitle": "AI Consultant & Builder",
    "sameAs": [
      "https://linkedin.com/in/larry-salinas-mba-56394934"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://salinas-ai-consulting.com/#organization"
  },
  "datePublished": "2026-03-15",
  "dateModified": "2026-03-15",
  "image": "https://salinas-ai-consulting.com/blog/vibe-coding-guide/hero.png",
  "mainEntityOfPage": "https://salinas-ai-consulting.com/blog/vibe-coding-guide",
  "keywords": ["vibe coding", "AI app development", "Lovable", "build apps with AI"]
}
```

---

## Internal Linking Strategy

### Link Architecture

```
Homepage (authority hub)
├── /ai-consulting ←→ /enterprise-ai-strategy ←→ /ai-automation
│   (cross-link all service pages to each other via "Related Services")
├── /ai-integration ←→ /ai-advisory ←→ /hands-on-ai-product-coaching
│
├── /blog (index — links to all posts)
│   ├── CLUSTER 1: AI Strategy
│   │   ├── /blog/ai-strategy-consulting-guide (PILLAR)
│   │   │   ├── /blog/ai-strategy-vs-implementation → links up to pillar
│   │   │   ├── /blog/ai-roadmap-for-business → links up to pillar
│   │   │   ├── /blog/signs-you-need-ai-consultant → links up to pillar
│   │   │   └── /blog/ai-strategy-small-business → links up to pillar
│   │   └── All spoke articles link to: /enterprise-ai-strategy (service page)
│   │
│   ├── CLUSTER 2: Prompt Engineering
│   │   ├── /blog/prompt-engineering-for-business (PILLAR)
│   │   │   ├── /blog/prompt-engineering-best-practices → links up
│   │   │   ├── /blog/hire-prompt-engineering-consultant → links up
│   │   │   ├── /blog/prompt-engineering-vs-fine-tuning → links up
│   │   │   └── /blog/custom-gpt-development → links up
│   │   └── All spoke articles link to: /ai-consulting (service page)
│   │
│   ├── CLUSTER 3: Vibe Coding ★ (Priority Cluster)
│   │   ├── /blog/vibe-coding-guide (PILLAR)
│   │   │   ├── /blog/vibe-coding-lovable-tutorial → links up
│   │   │   ├── /blog/vibe-coding-vs-traditional → links up
│   │   │   ├── /blog/best-vibe-coding-tools → links up
│   │   │   └── /blog/vibe-coding-case-study → links up
│   │   └── All spoke articles link to: /hands-on-ai-product-coaching (service page)
│   │
│   ├── CLUSTER 4: AI Product Building
│   │   ├── /blog/ai-product-coaching-guide (PILLAR)
│   │   │   ├── /blog/build-ai-saas-product → links up
│   │   │   ├── /blog/lovable-app-development → links up
│   │   │   ├── /blog/ai-mvp-development → links up
│   │   │   └── /blog/ai-app-ideas-small-business → links up
│   │   └── All spoke articles link to: /hands-on-ai-product-coaching (service page)
│   │
│   └── CLUSTER 5: AI Consulting (Industry)
│       ├── /blog/ai-consulting-small-business (PILLAR)
│       │   ├── /blog/ai-consulting-startups → links up
│       │   ├── /blog/ai-consultant-cost → links up
│       │   ├── /blog/ai-consulting-healthcare → links up
│       │   └── /blog/generative-ai-consulting → links up
│       └── All spoke articles link to: /ai-consulting (service page)
│
├── /about (EEAT anchor — linked from every blog author box)
├── /work-with-me (conversion page — linked from every CTA)
└── /resources (tools page — links to relevant blog posts)
```

### Internal Linking Rules

1. **Every blog post links to:** its pillar page, 1–2 sibling spoke articles, the matching service page, and the consultation CTA
2. **Every pillar page links to:** all its spoke articles, the matching service page, and 1–2 pillar pages from other clusters
3. **Every service page links to:** its corresponding pillar blog post and 2–3 relevant spoke articles
4. **Homepage links to:** all service pages, all pillar blog posts, and the About page
5. **Author box on every page links to:** /about page
6. **Anchor text must be descriptive** — never "click here" or "read more." Use keyword-rich text like "learn more about vibe coding with Lovable" or "our AI strategy consulting process"

---

## Service Page Recommendations

### Existing Pages (Keep & Optimize)
| Page | URL | Optimization Needed |
|------|-----|---------------------|
| AI Consulting Services | `/ai-consulting` | Add FAQ section, add client outcomes, add "as seen in" |
| Enterprise AI Strategy | `/enterprise-ai-strategy` | Add case study snippets, add ROI examples |
| AI Automation | `/ai-automation` | Add before/after examples, add process diagrams |
| AI Integration | `/ai-integration` | Add tech stack compatibility list, add integration examples |
| AI Advisory & Due Diligence | `/ai-advisory` | Add assessment framework preview, add sample deliverables |
| Hands-On AI Product Coaching | `/hands-on-ai-product-coaching` | Add portfolio of apps built, add testimonials, add pricing tiers |

### New Pages to Create

| Page | URL | Target Keyword | Priority |
|------|-----|----------------|----------|
| **About Larry Salinas** | `/about` | "larry salinas ai consultant" | HIGH — EEAT anchor |
| **Work With Me** | `/work-with-me` | "hire ai consultant" | HIGH — conversion page |
| **Blog Index** | `/blog` | — | HIGH — content hub |
| **Resources / AI Tools** | `/resources` | "best ai tools for business" | MEDIUM — link bait |
| **Prompt Engineering Services** | `/prompt-engineering` | "prompt engineering consulting" | MEDIUM — dedicated landing page |
| **Vibe Coding Services** | `/vibe-coding` | "vibe coding consultant" | MEDIUM — capture emerging demand |
| **Free AI Readiness Assessment** | `/ai-readiness-assessment` | "ai readiness assessment" | MEDIUM — lead magnet landing page |

---

## LinkedIn & YouTube SEO Integration

### LinkedIn Strategy

| Action | Frequency | SEO Benefit |
|--------|-----------|-------------|
| **Publish LinkedIn articles** (1,500+ words, repurposed from blog) | 2x/month | Indexed by Google, backlinks, referral traffic |
| **Post LinkedIn updates** about new blog content | 3–5x/week | Drives traffic to blog posts, increases social signals |
| **Engage in AI-related LinkedIn groups** | Daily (10 min) | Brand visibility, relationship building for guest posts |
| **Optimize LinkedIn headline and About** for keywords | Once (update quarterly) | LinkedIn profiles rank for name searches |
| **Add "Featured" section links** to your best content | Ongoing | Direct links from high-DA domain |

**LinkedIn Article SEO Trick:** LinkedIn articles get their own indexed URL. Title them with your target keywords. Example: "Vibe Coding for Business: How to Build AI Apps Without Traditional Development." Include a canonical-style note: "This article was originally published at [your site URL]."

### YouTube Strategy

| Action | Frequency | SEO Benefit |
|--------|-----------|-------------|
| **Publish YouTube videos** (5–15 min) | 2x/month minimum | YouTube videos rank in Google universal search |
| **Optimize titles** with target keywords | Every video | "How to Build an App with Vibe Coding \| Lovable Tutorial" |
| **Write 500+ word descriptions** | Every video | YouTube descriptions are searchable. Include your site URL in first 2 lines |
| **Add timestamps/chapters** | Every video | Triggers key moments in Google search results |
| **Create custom thumbnails** with text overlay | Every video | Higher CTR = higher rankings |
| **Embed videos in matching blog posts** | Every video | Increases blog dwell time + video views |
| **Pin comment with link to blog post** | Every video | Referral traffic from YouTube to blog |

### GitHub Strategy

| Action | Frequency | SEO Benefit |
|--------|-----------|-------------|
| **Create repositories with keyword-rich READMEs** | 3–5 repos total | GitHub repos rank in Google. READMEs are indexed. |
| **Include site backlinks in every README** | Every repo | Backlinks from github.com (DA 95+) |
| **Build sample apps that showcase your skills** | Ongoing | Demonstrates EEAT "Experience" — you actually build, not just advise |
| **Star and contribute to AI-related repos** | Weekly | Community visibility, potential collaboration |

**Priority GitHub Repos to Create:**
1. `prompt-engineering-playbook` — Business prompt templates & frameworks
2. `vibe-coding-starter-kits` — Example apps built with Lovable, Cursor, Bolt
3. `ai-strategy-canvas` — Open-source AI strategy assessment tool
4. `lovable-templates` — Ready-to-fork Lovable app templates

---

## EEAT (Experience, Expertise, Authority, Trust) Strategy

### Experience (the "first E")
- **Show your builds.** Embed screenshots, videos, and live links to AI apps you've built. This is your biggest differentiator — most AI consultants show slides, you show working products.
- **Document your process.** Blog posts like "How I Built X" are pure Experience signals.
- **Create case studies.** Even anonymized: "How we helped a healthcare startup ship their AI MVP in 6 weeks."

### Expertise
- **Author attribution on every page** — "By Larry Salinas, AI Consultant & Product Builder"
- **Detailed About page** — Credentials, experience timeline, methodology
- **Technical depth in content** — Don't write surface-level "What is AI?" articles. Write practitioner-level content that demonstrates real knowledge.
- **FAQ sections** — Answering questions only an expert would know how to answer.

### Authority
- **Backlinks from relevant sites** — AI blogs, business blogs, tech publications
- **Guest posts** — 2 per month minimum target
- **LinkedIn thought leadership** — Regular articles that get engagement
- **YouTube presence** — Video content with real demonstrations
- **GitHub presence** — Open-source contributions showing real technical ability
- **Directory listings** — Clutch, G2, industry directories

### Trust
- **Client testimonials** — Even 2–3 makes a difference
- **Clear contact information** — Email, LinkedIn, location
- **Professional design** — Your site already looks good; maintain it
- **Privacy policy + Terms of Service** — Add these pages. Missing legal pages is a trust red flag.
- **SSL certificate** — Already in place (https)
- **Transparent pricing** — At minimum, "Starting at $X" or "Engagements typically range from..."

---

## Conversion Optimization for Consulting Leads

### Current Conversion Path (Weak)
```
Visitor → Read homepage → Scroll to contact → Email link → (hope they email)
```

### Optimized Conversion Path
```
Visitor → Read blog post → CTA: "Get a free AI strategy session" →
  → /work-with-me page → Calendly booking widget → Booked consultation
```

### Specific Optimizations

| Element | Current | Optimized | Impact |
|---------|---------|-----------|--------|
| **Primary CTA** | "Get in touch" (vague) | "Book Your Free AI Strategy Session" (specific + free) | 2–3x conversion lift |
| **Conversion page** | None | `/work-with-me` with process, pricing hints, booking widget | Creates a clear funnel endpoint |
| **Blog CTAs** | None | Sticky bar + inline CTA + end-of-post CTA | Captures reader intent at peak interest |
| **Lead magnet** | None | "AI Readiness Assessment" (PDF/quiz) | Email capture for nurture sequence |
| **Booking method** | Email only | Calendly or Cal.com embed | Removes friction. Self-service booking converts 3–5x better. |
| **Social proof** | Stats only (15+ years, 50+ projects) | Stats + testimonials + case study snippets | Testimonials are the #1 trust driver for consulting |
| **Chatbot** | Generic AI assistant | Pre-qualify visitors: "What's your biggest AI challenge?" → route to relevant service page → CTA | Turn the chatbot into a conversion tool, not just a novelty |

---

## Tools Checklist

### Free (Must-Have)

| Tool | Purpose |
|------|---------|
| **Google Search Console** | Indexing, keyword data, crawl issues |
| **Google Analytics 4** | Traffic, conversions, user behavior |
| **Bing Webmaster Tools** | Bing + DuckDuckGo indexing |
| **Google Business Profile** | Local SEO, "near me" searches |
| **Microsoft Clarity** | Heatmaps, session recordings |
| **Google Rich Results Test** | Validate schema markup |
| **PageSpeed Insights** | Core Web Vitals audit |
| **Ubersuggest (free tier)** | Basic keyword research (3 free searches/day) |
| **AnswerThePublic (free tier)** | Question-based keyword discovery |
| **AlsoAsked.com** | "People Also Ask" data |
| **Screaming Frog (free up to 500 URLs)** | Technical SEO crawl |
| **Canva (free tier)** | Blog featured images, YouTube thumbnails |
| **OBS Studio** | Screen recording for YouTube |
| **Loom (free tier)** | Quick screen recording |

### Paid (Recommended)

| Tool | Cost | Purpose | When to Start |
|------|------|---------|---------------|
| **Ahrefs Lite** | $129/mo | Keyword research, backlink analysis, rank tracking, competitor analysis | Month 2 (once you have content to track) |
| **SEMrush Pro** | $129/mo | Alternative to Ahrefs — pick one | Month 2 |
| **Surfer SEO** | $89/mo | Content optimization — tells you exact word count, keywords, headers to include for any target keyword | Month 2 (for content optimization) |
| **Calendly Pro** | $12/mo | Booking widget for consultations | Week 10 |
| **ConvertKit (free up to 1,000)** | Free–$29/mo | Email marketing for lead magnet nurture | Month 2 |
| **Prerender.io** | $9/mo | Pre-rendering for your SPA (if you don't migrate to SSR) | Week 1 |

---

## Realistic Traffic Growth Expectations

### Month 1 (Weeks 1–4)
- **Organic sessions:** 50–150/month
- **Indexed pages:** 10–15
- **Ranking keywords:** 20–40 (mostly positions 20–100)
- **What's happening:** Google is discovering and indexing your content. Technical fixes are being processed. Initial impressions appear in GSC but clicks are minimal.
- **Key milestone:** First impressions in GSC for long-tail keywords.

### Month 2 (Weeks 5–8)
- **Organic sessions:** 200–500/month
- **Indexed pages:** 20–25
- **Ranking keywords:** 50–80
- **What's happening:** Long-tail content starts ranking (positions 5–20). Vibe coding content likely your first traffic winner. LinkedIn and YouTube referral traffic begins.
- **Key milestone:** First page rankings for 2–3 long-tail keywords. First organic consultation request.

### Month 3 (Weeks 9–12)
- **Organic sessions:** 500–1,500/month
- **Indexed pages:** 30+
- **Ranking keywords:** 80–150
- **What's happening:** Content clusters showing topical authority. Internal links distributing authority to service pages. Backlinks starting to compound. Branded searches increasing.
- **Key milestone:** 5–10 keywords on page 1. Consistent weekly organic leads. Brand name appearing in AI-related search suggestions.

### Months 4–6 (Post-Roadmap Trajectory)
- **Organic sessions:** 2,000–5,000/month (if you maintain content velocity)
- **What's happening:** Domain authority building. Older content climbing. YouTube videos ranking in universal search. GitHub repos ranking for tool-related queries.

### Important Caveats
- These projections assume **consistent execution** — publishing 2+ pieces of content per week, building 3–5 backlinks per month.
- **SEO compounds.** Month 3 results depend entirely on Months 1–2 execution.
- **Vibe coding content could be a breakout.** If you're early to this keyword, you could see 1,000+ monthly visits from this cluster alone within 90 days.
- **Don't chase vanity metrics.** 100 visitors who book consultations > 10,000 visitors who bounce. Focus on conversion-focused content.

---

## Quick Wins Summary (Do These First)

These tasks deliver the highest impact for the lowest effort. Execute in order:

| # | Task | Time | Expected Result |
|---|------|------|-----------------|
| 1 | Set up Google Search Console + submit sitemap | 30 min | Accelerated indexing |
| 2 | Set up Google Analytics 4 with conversion goals | 1 hr | Baseline measurement |
| 3 | Claim Google Business Profile | 30 min | Local SEO visibility |
| 4 | Optimize LinkedIn profile with keywords + site links | 30 min | Controls brand SERP |
| 5 | Write & publish vibe coding pillar article | 4–6 hrs | First-mover advantage on trending keyword |
| 6 | Add FAQ sections with schema to all service pages | 3 hrs | Rich results in SERPs |
| 7 | Add proper `<a href>` navigation to all service pages in header | 1 hr | Internal link equity distribution |
| 8 | Create 2 GitHub repos with keyword-rich READMEs | 2 hrs | High-DA backlinks + EEAT |
| 9 | Publish first LinkedIn article (repurposed blog content) | 1 hr | LinkedIn backlink + referral traffic |
| 10 | Add author attribution boxes to all pages | 1 hr | EEAT signal |

---

## Week-by-Week Checklist Summary

| Week | Focus | Content Published | Backlinks |
|------|-------|-------------------|-----------|
| **1** | Technical SEO setup | 0 | 0 |
| **2** | On-page optimization | 0 | 0 |
| **3** | Blog infrastructure + editorial calendar | 0 | 0 |
| **4** | Vibe coding pillar + spoke | 2 articles | 0 |
| **5** | Prompt engineering pillar + spoke | 2 articles + 1 LinkedIn article | 1 (LinkedIn) |
| **6** | AI consulting pillar + spoke + internal linking audit | 2 articles | 0 |
| **7** | GitHub repos + LinkedIn optimization + directories | 0 | 5–8 (GitHub, directories) |
| **8** | YouTube launch + guest posts + 2 blog posts | 2 articles + 3 videos + 1 LinkedIn article | 2–3 (guest posts, YouTube) |
| **9** | Content velocity + lead magnet + community engagement | 3 articles | 2–3 (Quora/Reddit, directories) |
| **10** | Conversion optimization + Work With Me page | 0 (optimization focus) | 0 |
| **11** | Personal brand integration + 2 more posts | 2 articles + 2 videos + 1 LinkedIn article | 2 (LinkedIn, YouTube) |
| **12** | Audit, refine, plan next quarter | 1 article (results post) | 0 |

**Total in 90 days:** ~14 blog posts, 5 YouTube videos, 3 LinkedIn articles, 3–5 GitHub repos, 12–16 backlinks, 30+ indexed pages.

---

*This roadmap was built specifically for Larry Salinas and Salinas AI Consulting's positioning as a hands-on AI consultant who builds and teaches. Every recommendation accounts for the current site architecture (React SPA on Lovable), the early-stage domain authority, and the unique competitive advantage of being a builder-consultant in the AI space.*
