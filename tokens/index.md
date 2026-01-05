---
layout: page
title: Tokens
nav_order: 5
has_children: true
permalink: /tokens/
---

# Design Tokens

Design tokens are the design decisions (colors, spacing, typography) expressed as data. They provide a single source of truth for design values across platforms.

## What are Design Tokens?

Design tokens are platform-agnostic variables that store design decisions:

```json
{
  "color": {
    "brand": {
      "primary": "#0066CC",
      "secondary": "#6C757D"
    }
  },
  "spacing": {
    "small": "8px",
    "medium": "16px",
    "large": "24px"
  }
}
```

## Benefits

- **Consistency** - Single source of truth across platforms
- **Maintainability** - Update in one place, change everywhere
- **Scalability** - Easy to add new themes or brands
- **Cross-platform** - Use same tokens for web, iOS, Android

## Token Categories

- **Colors** - Brand colors, semantic colors, neutral palette
- **Spacing** - Margins, padding, gaps
- **Typography** - Font sizes, weights, line heights
- **Borders** - Border radius, width
- **Shadows** - Elevation levels
- **Motion** - Animation durations, easings

## Implementation

Tokens can be consumed in various formats:
- CSS custom properties
- SCSS variables
- JavaScript/TypeScript
- iOS Swift
- Android XML

See individual token pages for detailed specifications and implementation examples.
