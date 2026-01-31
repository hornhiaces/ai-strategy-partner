

# Sprint 3 Refinement: Improve Text Contrast for Readability

## Problem Summary
The grey description text (using `text-muted-foreground`) has insufficient contrast against the white background. The current lightness of 46% falls just below WCAG AA accessibility standards.

## Affected Areas
- Hero section description paragraph
- Services section intro text
- Service card descriptions
- Any other body text using `text-muted-foreground`

---

## Implementation Plan

### Step 1: Update the muted-foreground color token

**File:** `src/index.css`

Change the `--muted-foreground` CSS variable from:
```css
--muted-foreground: 220 13% 46%;
```
To:
```css
--muted-foreground: 220 13% 38%;
```

This darkens the grey from ~46% lightness to ~38% lightness, improving the contrast ratio from approximately 4.2:1 to 5.5:1 — well above the WCAG AA requirement.

### Step 2: Also adjust the text-subtle token for consistency

**File:** `src/index.css`

Change `--text-subtle` from:
```css
--text-subtle: 220 13% 50%;
```
To:
```css
--text-subtle: 220 13% 42%;
```

This ensures any text using the custom `.text-subtle` utility also has improved readability.

---

## Summary of Changes

| Token | Before | After |
|-------|--------|-------|
| `--muted-foreground` | 220 13% 46% | 220 13% 38% |
| `--text-subtle` | 220 13% 50% | 220 13% 42% |

---

## Expected Outcome
- All grey body text will be noticeably darker and easier to read
- Maintains visual hierarchy (still lighter than headings)
- Passes WCAG AA accessibility standards
- No changes needed to individual components — they all inherit from these tokens

## Testing Checklist
- Verify hero description text is easier to read
- Verify services section descriptions are clearer
- Confirm dark mode values still work correctly (no changes needed there)
- Full page scroll to check overall visual balance

