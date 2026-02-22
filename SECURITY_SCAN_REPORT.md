# Security Scan Report

**Project:** ai-strategy-partner (Salinas AI Consulting)
**Scan Date:** 2026-02-22
**Branch:** claude/security-scan-logging-iyZNA
**Scanned By:** Automated security scan (Claude Code)

---

## Executive Summary

| Severity | Count |
|----------|-------|
| Critical | 0 |
| High     | 15 (14 npm + 1 git) |
| Moderate | 5 |
| Low      | 3 |
| Info     | 4 |
| **Total** | **27** |

---

## ISSUE-001 — CRITICAL: `.env` File Committed to Git History

**Severity:** HIGH
**Category:** Secrets Exposure
**Status:** UNRESOLVED

**Details:**
The `.env` file containing Supabase credentials was committed to the git repository in commit `d71b1da4adc545821acd84087c7f77cef373cabc` (dated 2026-02-01). The file exposed:
- `VITE_SUPABASE_PROJECT_ID` — Supabase project ID
- `VITE_SUPABASE_PUBLISHABLE_KEY` — Supabase anon/publishable JWT key
- `VITE_SUPABASE_URL` — Supabase project URL

Additionally, `.env` is **not listed in `.gitignore`** — only the `*.local` pattern is present, meaning a future commit could re-expose secrets.

**Affected File:** `.env` (commit `d71b1da`)
**Affected Gitignore:** `.gitignore` (missing `.env` entry)

**Remediation:**
1. Add `.env` to `.gitignore` immediately.
2. Rotate the Supabase anon key via the Supabase dashboard (even though the anon key is designed to be public, the project ID exposure is a concern).
3. If any service-role keys were ever stored in `.env`, rotate them urgently.
4. Use `git filter-repo` or BFG Repo Cleaner to purge `.env` from git history if needed.

---

## ISSUE-002 — HIGH: React Router XSS via Open Redirects

**Severity:** HIGH
**Category:** Dependency Vulnerability
**CVE/Advisory:** GHSA-2w69-qvjg-hvjx
**CVSS:** 8.0 (AV:N/AC:H/PR:N/UI:R/S:C/C:H/I:H/A:N)
**Status:** UNRESOLVED

**Details:**
`@remix-run/router` ≤ 1.23.1 (used transitively via `react-router-dom`) is vulnerable to XSS via open redirects. An attacker can craft a URL that causes the router to redirect to a `javascript:` URL, enabling arbitrary JavaScript execution in the user's browser.

**Affected Package:** `@remix-run/router` (via `react-router-dom` ^6.30.1)
**Fix Available:** Yes — upgrade `react-router-dom` to the patched version.

**Remediation:**
```
npm update react-router-dom
```

---

## ISSUE-003 — HIGH: React Router Unexpected External Redirect

**Severity:** HIGH
**Category:** Dependency Vulnerability
**CVE/Advisory:** GHSA-9jcx-v3wj-wh4m
**Status:** UNRESOLVED

**Details:**
`react-router` has a vulnerability allowing unexpected external redirects through untrusted paths, which can be used for phishing or session hijacking.

**Affected Package:** `react-router` (transitive dependency)
**Fix Available:** Yes — upgrade `react-router-dom`.

**Remediation:**
```
npm update react-router-dom
```

---

## ISSUE-004 — HIGH: glob CLI Command Injection

**Severity:** HIGH
**Category:** Dependency Vulnerability
**CVE/Advisory:** GHSA-5j98-mcp5-4vw2
**Status:** UNRESOLVED

**Details:**
The `glob` package CLI is vulnerable to command injection via the `-c/--cmd` option when `shell: true` is used. Relevant only in CLI/build contexts.

**Affected Package:** `glob` (transitive dev dependency via `eslint`)
**Fix Available:** Yes (requires major ESLint version bump to v10).

**Remediation:**
Upgrade ESLint to v10+ (breaking change): `npm install eslint@latest --save-dev`

---

## ISSUE-005 — HIGH: minimatch ReDoS via Repeated Wildcards

**Severity:** HIGH
**Category:** Dependency Vulnerability
**CVE/Advisory:** GHSA-3ppc-4f35-3m26
**Status:** UNRESOLVED

**Details:**
`minimatch` is vulnerable to ReDoS (Regular Expression Denial of Service) through repeated wildcards with non-matching literals. Affects build tooling only (dev dependency chain via ESLint/typescript-eslint).

**Affected Packages:** `@eslint/config-array`, `@eslint/eslintrc`, `@typescript-eslint/*`
**Fix Available:** Yes (requires ESLint v10 major upgrade).

**Remediation:**
Upgrade ESLint to v10+: `npm install eslint@latest --save-dev`

---

## ISSUE-006 — MODERATE: ajv ReDoS via `$data` Option

**Severity:** MODERATE
**Category:** Dependency Vulnerability
**CVE/Advisory:** GHSA-2g4f-4pwh-qvx6
**Status:** UNRESOLVED

**Details:**
`ajv` < 6.14.0 is vulnerable to ReDoS when using the `$data` option.

**Affected Package:** `ajv` (transitive dependency)
**Fix Available:** Yes.

---

## ISSUE-007 — MODERATE: esbuild Dev Server CORS Issue

**Severity:** MODERATE
**Category:** Dependency Vulnerability
**CVE/Advisory:** GHSA-67mh-4wv8-2f99
**Status:** UNRESOLVED (dev-only risk)

**Details:**
`esbuild` (via Vite) allows any website to send requests to the development server and read responses. This only affects local development environments — **not production**.

**Affected Package:** `esbuild` (transitive via `vite`)
**Fix Available:** Yes — upgrade Vite.

**Remediation:**
```
npm update vite
```

---

## ISSUE-008 — MODERATE: js-yaml Prototype Pollution

**Severity:** MODERATE
**Category:** Dependency Vulnerability
**CVE/Advisory:** GHSA-mh29-5h37-fv8m
**Status:** UNRESOLVED

**Details:**
`js-yaml` has a prototype pollution vulnerability in the merge (`<<`) feature. Affects build tooling (dev dependency chain).

**Affected Package:** `js-yaml` (transitive dev dependency)
**Fix Available:** Yes.

---

## ISSUE-009 — MODERATE: lodash Prototype Pollution

**Severity:** MODERATE
**Category:** Dependency Vulnerability
**CVE/Advisory:** GHSA-xxjr-mmjv-4gpg
**Status:** UNRESOLVED

**Details:**
`lodash` has prototype pollution vulnerabilities in `_.unset` and `_.omit`. Affects build tooling (dev dependency chain).

**Affected Package:** `lodash` (transitive dev dependency)
**Fix Available:** Yes.

---

## ISSUE-010 — MODERATE: Vite `server.fs` Settings Not Applied to HTML

**Severity:** MODERATE
**Category:** Dependency Vulnerability
**CVE/Advisory:** GHSA-jqfw-vq24-v9c3, GHSA-g4jq-h2w9-997c, GHSA-93m4-6634-74q7
**Status:** UNRESOLVED (dev-only risk)

**Details:**
Multiple Vite vulnerabilities related to `server.fs` settings not being applied to HTML files and path traversal bypass via backslash on Windows. Affects dev server only.

**Affected Package:** `vite`
**Fix Available:** Yes.

**Remediation:**
```
npm update vite
```

---

## ISSUE-011 — LOW: CORS Wildcard in Edge Functions

**Severity:** LOW
**Category:** Configuration
**Status:** UNRESOLVED

**Details:**
Both Supabase edge functions set `Access-Control-Allow-Origin: *` (wildcard). This allows any origin to make cross-origin requests to these functions. For public-facing chat and inquiry endpoints this is acceptable, but it means any website can send requests on behalf of their users.

**Affected Files:**
- `supabase/functions/chat/index.ts:4`
- `supabase/functions/send-inquiry/index.ts:4`

**Remediation:**
If the frontend is served from a known domain (e.g., `salinasaiconsulting.com`), restrict CORS to that origin:
```typescript
"Access-Control-Allow-Origin": "https://salinasaiconsulting.com"
```

---

## ISSUE-012 — LOW: JWT Verification Disabled on Edge Functions

**Severity:** LOW
**Category:** Configuration
**Status:** INFORMATIONAL (intentional)

**Details:**
Both Supabase edge functions have `verify_jwt = false` in `supabase/config.toml`. This is intentional for publicly accessible chat and inquiry endpoints but means any request (authenticated or not) is accepted. The functions themselves implement rate limiting and input validation as compensating controls.

**Affected File:** `supabase/config.toml`

**Remediation:**
Ensure server-side rate limiting and input validation remain robust (currently implemented). Document this as an intentional architectural decision.

---

## ISSUE-013 — LOW: ESLint Errors (3 errors, 7 warnings)

**Severity:** LOW
**Category:** Code Quality
**Status:** UNRESOLVED

**Details:**
Running `npm run lint` produces 3 errors and 7 warnings:

**Errors:**
- `src/components/ui/command.tsx:24` — `@typescript-eslint/no-empty-object-type`: Empty interface equivalent to supertype
- `src/components/ui/textarea.tsx:5` — `@typescript-eslint/no-empty-object-type`: Empty interface equivalent to supertype
- `tailwind.config.ts:113` — `@typescript-eslint/no-require-imports`: `require()` style import forbidden

**Warnings (react-refresh/only-export-components):**
- `src/components/ui/badge.tsx:29`
- `src/components/ui/button.tsx:47`
- `src/components/ui/form.tsx:129`
- `src/components/ui/navigation-menu.tsx:111`
- `src/components/ui/sidebar.tsx:636`
- `src/components/ui/sonner.tsx:27`
- `src/components/ui/toggle.tsx:37`

These are in auto-generated shadcn/ui component files. Not security issues, but indicate the linter is not passing cleanly.

---

## ISSUE-014 — INFO: dangerouslySetInnerHTML in chart.tsx

**Severity:** INFO
**Category:** Code Review
**Status:** RESOLVED (safe usage)

**Details:**
`src/components/ui/chart.tsx:70` uses `dangerouslySetInnerHTML` to inject CSS custom properties (CSS variable declarations) into a `<style>` tag. The injected content is:
1. Constructed from configuration objects (not user input)
2. CSS property names and color values — not executable JavaScript
3. Scoped to chart IDs generated internally

This usage is safe and does not represent an XSS risk.

---

## ISSUE-015 — INFO: No Content-Security-Policy Header

**Severity:** INFO
**Category:** Security Headers
**Status:** PARTIAL

**Details:**
The `index.html` includes some security meta tags (`X-Content-Type-Options`, `X-Frame-Options`, referrer policy) but does **not** include a `Content-Security-Policy` (CSP) header. Meta-tag CSP support is also limited; CSP is best enforced via HTTP response headers from the hosting server.

`vite.config.ts` does not configure any CSP headers for the dev server.

**Remediation:**
Configure CSP headers at the hosting/CDN layer (e.g., Netlify `_headers`, Vercel `vercel.json`, or Supabase hosting config).

---

## ISSUE-016 — INFO: In-Memory Rate Limiting Resets on Function Restart

**Severity:** INFO
**Category:** Architecture
**Status:** INFORMATIONAL

**Details:**
Server-side rate limiting in both edge functions uses `Map` objects that reset on each function cold start. Under high load or adversarial conditions, an attacker could bypass rate limits by triggering function restarts. For production hardening, consider Redis or Supabase's built-in rate limiting.

---

## Dependency Audit Summary

```
npm audit results:
  Critical: 0
  High:     14
  Moderate:  5
  Low:       0
  Total:    19

To fix non-breaking issues: npm audit fix
To fix all issues (breaking changes): npm audit fix --force
```

### High Severity Vulnerabilities by Package

| Package | Advisory | Notes |
|---------|----------|-------|
| `@remix-run/router` | GHSA-2w69-qvjg-hvjx | XSS via open redirects — runtime risk |
| `react-router` | GHSA-9jcx-v3wj-wh4m | Unexpected external redirect — runtime risk |
| `glob` | GHSA-5j98-mcp5-4vw2 | Command injection — dev only |
| `minimatch` | GHSA-3ppc-4f35-3m26 | ReDoS — dev only |
| `@eslint/config-array` | via minimatch | dev only |
| `@eslint/eslintrc` | via minimatch | dev only |
| `@typescript-eslint/*` | via minimatch | dev only |

---

## Recommended Remediation Priority

1. **Immediate:** Add `.env` to `.gitignore` (ISSUE-001)
2. **Immediate:** Review Supabase anon key exposure and rotate if any service-role key was ever in `.env` (ISSUE-001)
3. **High:** Upgrade `react-router-dom` to fix XSS/redirect vulnerabilities (ISSUE-002, ISSUE-003)
4. **Medium:** Run `npm audit fix` to address auto-fixable dependency vulnerabilities
5. **Medium:** Consider restricting CORS origins in edge functions (ISSUE-011)
6. **Low:** Configure CSP headers at the hosting layer (ISSUE-015)
7. **Low:** Plan ESLint major version upgrade (ESLint v10) to resolve build tool vulnerabilities (ISSUE-004, ISSUE-005)
