---
layout: default
title: Layout Components
parent: Guidelines
nav_order: 12
---

{% include hero.html 
   title="Layout Components" 
   status="stable"
   description="Reusable layout patterns for organizing and presenting design system content."
   updated="January 2026" %}

## Available Components

This page demonstrates all the layout components you can use to structure your documentation pages.

{% include divider.html %}

## 1. Hero Section

Use at the top of pages to display title, status, description, and metadata.

**Usage:**
```liquid
{% raw %}{% include hero.html 
   title="Page Title" 
   status="stable"
   description="Page description text."
   updated="January 2026" %}{% endraw %}
```

**Parameters:**
- `title` (required) - Page title
- `status` (optional) - Status badge: stable, new, in-progress, beta, deprecated, experimental
- `description` (optional) - Brief description
- `updated` (optional) - Last updated date

{% include divider.html %}

## 2. Status Badges

Indicate component maturity or availability status.

{% include status-badge.html status="stable" %}
{% include status-badge.html status="new" %}
{% include status-badge.html status="in-progress" %}
{% include status-badge.html status="beta" %}
{% include status-badge.html status="deprecated" %}
{% include status-badge.html status="experimental" %}

**Usage:**
```liquid
{% raw %}{% include status-badge.html status="stable" %}
{% include status-badge.html status="new" label="New Feature" %}{% endraw %}
```

{% include divider.html %}

## 3. Card Grid

Display navigation cards in a responsive grid layout.

{% capture cards_content %}
{% include card.html 
   title="Foundations" 
   description="Core design elements like colors, typography, and spacing."
   url="/foundations/" %}
{% include card.html 
   title="Components" 
   description="Reusable UI components and patterns."
   url="/components/" %}
{% include card.html 
   title="Guidelines" 
   description="Best practices and usage guidelines."
   url="/guidelines/" %}
{% include card.html 
   title="Tokens" 
   description="Design tokens for developers."
   url="/tokens/" %}
{% endcapture %}
{% include card-grid.html content=cards_content %}

**Usage:**
```liquid
{% raw %}{% capture cards_content %}
{% include card.html 
   title="Card Title" 
   description="Card description text."
   url="/path/" %}
{% include card.html 
   title="Another Card" 
   description="More description."
   url="/path2/" %}
{% endcapture %}
{% include card-grid.html content=cards_content %}{% endraw %}
```

{% include divider.html %}

## 4. Category Sections

Organize content into labeled categories with descriptions.

{% capture category_content %}
These are example components in this category. You can use text, lists, or any other content here.

- Component A
- Component B
- Component C
{% endcapture %}
{% include category-section.html 
   title="Input & Controls" 
   description="Components that let users enter information and make choices."
   content=category_content %}

**Usage:**
```liquid
{% raw %}{% capture category_content %}
Your content here...
{% endcapture %}
{% include category-section.html 
   title="Category Name" 
   description="Category description."
   content=category_content %}{% endraw %}
```

{% include divider.html %}

## 5. Component Link Grid

Display multiple component links in a compact, pill-style grid.

{% capture links_content %}
{% include component-link.html title="Button" url="#" %}
{% include component-link.html title="Checkbox" url="#" %}
{% include component-link.html title="Radio" url="#" %}
{% include component-link.html title="Select" url="#" %}
{% include component-link.html title="TextField" url="#" %}
{% include component-link.html title="TextArea" url="#" %}
{% include component-link.html title="Switch" url="#" %}
{% include component-link.html title="Slider" url="#" %}
{% endcapture %}
{% include component-link-grid.html content=links_content %}

**Usage:**
```liquid
{% raw %}{% capture links_content %}
{% include component-link.html title="Component Name" url="/path/" %}
{% include component-link.html title="Another Component" url="/path2/" %}
{% endcapture %}
{% include component-link-grid.html content=links_content %}{% endraw %}
```

{% include divider.html %}

## 6. Spec Tables

Enhanced tables with striped rows and hover effects.

| Size | Height | Padding | Font Size | Use Case |
|------|--------|---------|-----------|----------|
| Small | 32px | 8px 16px | 14px | Compact interfaces, tables |
| Medium | 40px | 12px 24px | 16px | Standard forms and actions |
| Large | 48px | 16px 32px | 18px | Hero sections, prominent CTAs |

**Usage:**
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

Tables automatically get styling with striped rows and hover effects.

{% include divider.html %}

## 7. Two-Column Layout

Display content side-by-side with automatic mobile stacking.

{% capture left_content %}
### Left Column

This could be text, images, or any content. The columns will stack vertically on mobile devices.

- Feature one
- Feature two  
- Feature three
{% endcapture %}

{% capture right_content %}
### Right Column

![Placeholder](https://via.placeholder.com/400x300/0066CC/ffffff?text=Example+Image)

Images automatically scale and get rounded corners with shadows.
{% endcapture %}

{% include two-column.html left=left_content right=right_content %}

**Usage:**
```liquid
{% raw %}{% capture left_content %}
Left side content...
{% endcapture %}

{% capture right_content %}
Right side content...
{% endcapture %}

{% include two-column.html left=left_content right=right_content %}{% endraw %}
```

{% include divider.html %}

## 8. Visual Dividers

Separate content sections with styled horizontal rules.

```liquid
{% raw %}{% include divider.html %}{% endraw %}
```

Or use markdown:
```markdown
---
```

Both create styled section dividers.

{% include divider.html %}

## Combining Components

All components work together seamlessly. Here's an example combining multiple patterns:

{% capture example_section %}
{% capture links %}
{% include component-link.html title="Alert" url="#" %}
{% include component-link.html title="Badge" url="#" %}
{% include component-link.html title="Tooltip" url="#" %}
{% include component-link.html title="Progress" url="#" %}
{% endcapture %}
{% include component-link-grid.html content=links %}
{% endcapture %}

{% include category-section.html 
   title="Feedback & Status" 
   description="Communicate system state and user feedback."
   content=example_section %}

## Best Practices

- Use **Hero sections** at the top of important pages
- Add **Status badges** to show component maturity
- Organize related items with **Category sections**
- Use **Card grids** for high-level navigation
- Use **Component link grids** for compact listings
- Add **Dividers** between major sections
- Use **Two-column layouts** for visual + text content
- Tables work great for specifications and comparisons
