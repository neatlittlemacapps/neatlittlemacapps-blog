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

✅ **Do:**
- Use clear, action-oriented labels ("Save Changes", not "OK")
- Place primary action on the right in dialog boxes
- Ensure adequate touch target size (minimum 44x44px)

❌ **Don't:**
- Use too many primary buttons on one page
- Make buttons too small to tap on mobile
- Rely on color alone to convey meaning
