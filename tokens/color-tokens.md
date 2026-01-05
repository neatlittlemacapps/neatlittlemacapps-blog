---
layout: page
title: Color Tokens
parent: Tokens
nav_order: 1
---

# Color Tokens

Color tokens define all color values used throughout the design system.

## Token Structure

```json
{
  "color": {
    "brand": {
      "primary": "#0066CC",
      "primary-hover": "#0052A3",
      "primary-active": "#003D7A"
    },
    "semantic": {
      "success": "#28A745",
      "warning": "#FFA500",
      "error": "#DC3545",
      "info": "#17A2B8"
    },
    "neutral": {
      "100": "#F8F9FA",
      "300": "#DEE2E6",
      "500": "#6C757D",
      "700": "#495057",
      "900": "#212529"
    }
  }
}
```

## CSS Implementation

```css
:root {
  /* Brand colors */
  --color-brand-primary: #0066CC;
  --color-brand-primary-hover: #0052A3;
  --color-brand-primary-active: #003D7A;
  
  /* Semantic colors */
  --color-semantic-success: #28A745;
  --color-semantic-warning: #FFA500;
  --color-semantic-error: #DC3545;
  --color-semantic-info: #17A2B8;
  
  /* Neutral colors */
  --color-neutral-100: #F8F9FA;
  --color-neutral-300: #DEE2E6;
  --color-neutral-500: #6C757D;
  --color-neutral-700: #495057;
  --color-neutral-900: #212529;
}
```

## Usage

```css
.button-primary {
  background-color: var(--color-brand-primary);
}

.button-primary:hover {
  background-color: var(--color-brand-primary-hover);
}

.alert-success {
  background-color: var(--color-semantic-success);
}
```

## SCSS Variables

```scss
$color-brand-primary: #0066CC;
$color-brand-primary-hover: #0052A3;
$color-semantic-success: #28A745;
$color-neutral-900: #212529;
```

## JavaScript/TypeScript

```typescript
export const colors = {
  brand: {
    primary: '#0066CC',
    primaryHover: '#0052A3',
    primaryActive: '#003D7A'
  },
  semantic: {
    success: '#28A745',
    warning: '#FFA500',
    error: '#DC3545',
    info: '#17A2B8'
  }
};
```
