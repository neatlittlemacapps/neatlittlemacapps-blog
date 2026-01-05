---
layout: page
title: Using Tabs
parent: Guidelines
nav_order: 11
---

# Using Tabs

Tabs allow you to organize content into multiple sections on a single page. Users can switch between sections without leaving the page.

## Basic Usage

Here's the structure for creating tabs:

```liquid
{% raw %}{% capture tab_buttons %}
{% include tab-button.html id="tab1" title="First Tab" active=" active" %}
{% include tab-button.html id="tab2" title="Second Tab" %}
{% include tab-button.html id="tab3" title="Third Tab" %}
{% endcapture %}

{% capture tab_content %}
{% capture tab1_content %}
Content for first tab...
{% endcapture %}
{% include tab-panel.html id="tab1" content=tab1_content active=" active" %}

{% capture tab2_content %}
Content for second tab...
{% endcapture %}
{% include tab-panel.html id="tab2" content=tab2_content %}

{% capture tab3_content %}
Content for third tab...
{% endcapture %}
{% include tab-panel.html id="tab3" content=tab3_content %}
{% endcapture %}

{% include tabs.html tabs=tab_buttons content=tab_content %}{% endraw %}
```

## Live Example

{% capture tab_buttons %}
{% include tab-button.html id="overview" title="Overview" active=" active" %}
{% include tab-button.html id="guidelines" title="Guidelines" %}
{% include tab-button.html id="examples" title="Examples" %}
{% endcapture %}

{% capture tab_content %}
{% capture overview_content %}
## Overview

Tabs are a navigation pattern that allow users to switch between related sections of content without leaving the page.

**When to use tabs:**
- When you have 2-6 related sections of content
- When users don't need to see all sections at once
- When sections are at the same level of hierarchy

**When NOT to use tabs:**
- For sequential processes (use a stepper instead)
- For filtering or sorting (use filter controls)
- If users need to compare content across sections
{% endcapture %}
{% include tab-panel.html id="overview" content=overview_content active=" active" %}

{% capture guidelines_content %}
## Tab Guidelines

### Content Organization

- Keep tab labels short and descriptive (1-2 words)
- Use consistent capitalization
- Limit to 6 tabs maximum for usability
- Order tabs by importance or logical flow

### Accessibility

- Tabs are keyboard navigable (Tab key to focus, Arrow keys to switch)
- Active tab is visually distinct
- Focus indicators are clearly visible
- Use semantic HTML and ARIA attributes

### Responsive Behavior

- Tab navigation scrolls horizontally on mobile if needed
- Active tab remains visible when switching
- Touch targets are adequately sized (minimum 44px height)
{% endcapture %}
{% include tab-panel.html id="guidelines" content=guidelines_content %}

{% capture examples_content %}
## Code Example

Here's a complete example:

```liquid
{% raw %}{% capture buttons %}
{% include tab-button.html id="html" title="HTML" active=" active" %}
{% include tab-button.html id="css" title="CSS" %}
{% include tab-button.html id="js" title="JavaScript" %}
{% endcapture %}

{% capture content %}
{% capture html_content %}
```html
<button class="btn btn-primary">Click me</button>
```
{% endcapture %}
{% include tab-panel.html id="html" content=html_content active=" active" %}

{% capture css_content %}
```css
.btn-primary {
  background: #0066CC;
  color: white;
}
```
{% endcapture %}
{% include tab-panel.html id="css" content=css_content %}

{% capture js_content %}
```javascript
document.querySelector('.btn').addEventListener('click', () => {
  console.log('Button clicked!');
});
```
{% endcapture %}
{% include tab-panel.html id="js" content=js_content %}
{% endcapture %}

{% include tabs.html tabs=buttons content=content %}{% endraw %}
```

**Note:** Add `active=" active"` (with a space) to the first button and panel to make them active by default.
{% endcapture %}
{% include tab-panel.html id="examples" content=examples_content %}
{% endcapture %}

{% include tabs.html tabs=tab_buttons content=tab_content %}

## Features

- ✅ **Keyboard accessible** - Navigate with Tab and Arrow keys
- ✅ **URL hash support** - Share direct links to specific tabs
- ✅ **Smooth animations** - Fade in effect when switching
- ✅ **Mobile responsive** - Horizontal scroll on small screens
- ✅ **Multiple per page** - Use multiple tab groups on one page
- ✅ **Markdown support** - Full Markdown formatting in tab content

## Tips

- Make sure tab IDs are unique within the page
- The first tab button and panel should have `active=" active"` (note the space before "active")
- Tabs work with all other components (callouts, images, code blocks, etc.)
- URL changes when switching tabs, so users can bookmark or share specific tabs
