---
layout: page
title: Buttons
parent: Components
nav_order: 1
---

{% include hero.html 
   title="Buttons" 
   status="stable"
   description="Triggers an action or event when pressed."
   updated="January 2026" %}

{% capture tab_buttons %}
{% include tab-button.html id="types" title="Types & Usage" active=" active" %}
{% include tab-button.html id="specifications" title="Specifications" %}
{% include tab-button.html id="code" title="Code" %}
{% include tab-button.html id="accessibility" title="Accessibility" %}
{% endcapture %}

{% capture tab_content %}
{% capture types_content %}
## Button Types

### Primary Button
Used for the main action on a page or in a section.

**Usage:**
- One primary button per section
- Use for key actions like "Save", "Submit", "Continue"
- High contrast, draws user attention

### Secondary Button
Used for secondary actions that are less important than primary actions.

**Usage:**
- Multiple secondary buttons allowed
- Use for "Cancel", "Back", alternative actions
- Lower visual weight than primary

### Tertiary Button
Used for less prominent actions, often appearing as text links.

**Usage:**
- Minimal visual weight
- Use for "Learn more", "View details"
- Appears like a link but functions as a button

## When to Use Each Type

<div class="callout-grid" markdown="1">

{% capture do_content %}
**Use primary buttons for:**
- Main call-to-action
- Form submissions
- Confirming important actions
- "Continue" or "Next" in flows
{% endcapture %}
{% include do.html content=do_content %}

{% capture dont_content %}
**Don't use primary buttons for:**
- Destructive actions (use warning style)
- Multiple competing actions
- Navigation that doesn't complete an action
- Less important secondary tasks
{% endcapture %}
{% include dont.html content=dont_content %}

</div>
{% endcapture %}
{% include tab-panel.html id="types" content=types_content active=" active" %}

{% capture specifications_content %}
## Sizes

Buttons come in three sizes:

| Size | Height | Padding | Font Size | Use Case |
|------|--------|---------|-----------|----------|
| Large | 48px | 16px 32px | 18px | Hero sections, prominent CTAs |
| Default | 40px | 12px 24px | 16px | Standard forms and actions |
| Small | 32px | 8px 16px | 14px | Compact interfaces, tables |

## States

All buttons should have clear visual states:

| State | Description | Visual Change |
|-------|-------------|---------------|
| Default | Resting state | Base colors |
| Hover | Mouse over | Slightly darker |
| Active | Pressed/clicked | Darker still |
| Focus | Keyboard focus | Visible outline |
| Disabled | Not interactive | Reduced opacity, no cursor |

## Spacing

- **Horizontal spacing:** Minimum 8px between adjacent buttons
- **Vertical spacing:** Minimum 16px between stacked buttons
- **Touch targets:** Minimum 44x44px on mobile devices
- **Text padding:** Minimum 16px horizontal padding inside button
{% endcapture %}
{% include tab-panel.html id="specifications" content=specifications_content %}

{% capture code_content %}
## HTML Examples

### Primary Button
```html
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-primary btn-lg">Large Primary</button>
<button class="btn btn-primary btn-sm">Small Primary</button>
```

### Secondary Button
```html
<button class="btn btn-secondary">Secondary Action</button>
```

### Tertiary Button
```html
<button class="btn btn-tertiary">Tertiary Action</button>
```

### Disabled State
```html
<button class="btn btn-primary" disabled>Disabled Button</button>
```

## CSS Classes

```css
/* Base button */
.btn {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* Primary variant */
.btn-primary {
  background-color: #0066CC;
  color: white;
}

.btn-primary:hover {
  background-color: #0052A3;
}

/* Size modifiers */
.btn-lg {
  padding: 16px 32px;
  font-size: 18px;
}

.btn-sm {
  padding: 8px 16px;
  font-size: 14px;
}
```
{% endcapture %}
{% include tab-panel.html id="code" content=code_content %}

{% capture accessibility_content %}
## Accessibility Requirements

### Semantic HTML

{% capture do_content %}
Use the proper `<button>` element:

```html
<button class="btn btn-primary">
  Save Changes
</button>
```

This provides:
- Keyboard accessibility by default
- Proper focus management
- Screen reader support
- Native form submission
{% endcapture %}
{% include do.html content=do_content %}

{% capture dont_content %}
Don't use `<div>` or `<span>` as buttons:

```html
<!-- ❌ Wrong -->
<div class="btn" onclick="save()">
  Save Changes
</div>
```

This requires:
- Manual keyboard support
- Custom ARIA attributes
- Focus management code
- Poor screen reader experience
{% endcapture %}
{% include dont.html content=dont_content %}

### Labels and Descriptions

<div class="callout-grid" markdown="1">

{% capture do_content %}
**Use descriptive labels:**

```html
<button>Download PDF Report</button>
<button>Delete Account</button>
<button>Send Message</button>
```

Clear, action-oriented text that explains what will happen.
{% endcapture %}
{% include do.html content=do_content %}

{% capture dont_content %}
**Avoid vague labels:**

```html
<button>Click Here</button>
<button>Submit</button>
<button>OK</button>
```

Generic text that doesn't provide context or explain the action.
{% endcapture %}
{% include dont.html content=dont_content %}

</div>

### Color Contrast

- **WCAG AA:** Minimum 4.5:1 contrast ratio for text
- **WCAG AAA:** Minimum 7:1 contrast ratio
- Don't rely on color alone to convey state or meaning
- Ensure disabled buttons are still distinguishable

### Keyboard Navigation

- Buttons must be focusable with Tab key
- Activated with Enter or Space key
- Focus indicator must be clearly visible
- Disabled buttons should not receive focus

### Screen Readers

```html
<!-- Icon-only button needs aria-label -->
<button aria-label="Close dialog">
  <svg>...</svg>
</button>

<!-- Button with dynamic state -->
<button aria-pressed="true">
  Toggle Setting
</button>

<!-- Button that opens something -->
<button aria-expanded="false" aria-controls="menu">
  Open Menu
</button>
```

## Testing Checklist

- [ ] Can navigate to button with Tab key
- [ ] Can activate with Enter and Space keys
- [ ] Focus indicator is clearly visible
- [ ] Label describes the action clearly
- [ ] Color contrast meets minimum ratios
- [ ] Touch target is at least 44x44px
- [ ] Screen reader announces button and label
- [ ] Disabled state is properly communicated
{% endcapture %}
{% include tab-panel.html id="accessibility" content=accessibility_content %}
{% endcapture %}

{% include tabs.html tabs=tab_buttons content=tab_content %}
