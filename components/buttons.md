---
layout: default
title: Buttons
parent: Components
nav_order: 1
---

# Buttons

Buttons trigger actions and allow users to interact with the interface.

## Button Types

### Primary Button
Used for the main action on a page or in a section.

```html
<button class="btn btn-primary">Primary Action</button>
```

**Usage:**
- One primary button per section
- Use for key actions like "Save", "Submit", "Continue"
- High contrast, draws user attention

### Secondary Button
Used for secondary actions that are less important than primary actions.

```html
<button class="btn btn-secondary">Secondary Action</button>
```

**Usage:**
- Multiple secondary buttons allowed
- Use for "Cancel", "Back", alternative actions
- Lower visual weight than primary

### Tertiary Button
Used for less prominent actions, often appearing as text links.

```html
<button class="btn btn-tertiary">Tertiary Action</button>
```

**Usage:**
- Minimal visual weight
- Use for "Learn more", "View details"
- Appears like a link but functions as a button

## Sizes

Buttons come in three sizes:

- **Large** - `btn-lg` - Hero sections, prominent CTAs
- **Default** - Standard button size
- **Small** - `btn-sm` - Compact interfaces, tables

## States

All buttons should have clear states:

- **Default** - Resting state
- **Hover** - Mouse over
- **Active** - Pressed/clicked
- **Focus** - Keyboard focus (visible outline)
- **Disabled** - Not interactive

## Accessibility

- Use `<button>` element for buttons, not `<div>` or `<span>`
- Provide descriptive text or `aria-label`
- Ensure sufficient color contrast
- Make focus state clearly visible
- Use `disabled` attribute, not just CSS

## Best Practices

<div class="callout-grid" markdown="1">

{% capture do_content %}
Use clear, action-oriented labels:
- "Save Changes" instead of "OK"
- "Delete Account" instead of "Confirm"
- "Download Report" instead of "Get"

![Example of good button](https://via.placeholder.com/300x100/28a745/ffffff?text=Save+Changes)
{% endcapture %}
{% include do.html content=do_content %}

{% capture dont_content %}
Use vague or unclear labels:
- "OK" or "Submit" without context
- "Click Here"
- Technical jargon users won't understand

![Example of bad button](https://via.placeholder.com/300x100/dc3545/ffffff?text=OK)
{% endcapture %}
{% include dont.html content=dont_content %}

</div>

{% capture do_content %}
Ensure adequate touch target size:
- Minimum 44x44px for mobile
- Add proper spacing between buttons
- Make the entire button clickable
{% endcapture %}
{% include do.html content=do_content %}

{% capture dont_content %}
Make buttons too small to interact with:
- Buttons smaller than 44px on mobile
- Placing buttons too close together
- Using only icon buttons without labels
{% endcapture %}
{% include dont.html content=dont_content %}
