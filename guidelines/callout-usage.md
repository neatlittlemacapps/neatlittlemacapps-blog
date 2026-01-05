---
layout: page
title: Using Do/Don't Callouts
parent: Guidelines
nav_order: 10
---

# Using Do/Don't Callouts

This page demonstrates how to use the Do and Don't callout components in your documentation.

## Basic Usage

### Single Do Callout

To create a Do callout:

```liquid
{% raw %}{% capture do_content %}
Write your content here. You can include:
- Bullet points
- **Bold text**
- Images

![Alt text](image-url.jpg)
{% endcapture %}
{% include do.html content=do_content %}{% endraw %}
```

Example:

{% capture do_content %}
Use semantic HTML elements:
- Use `<button>` for buttons
- Use `<a>` for links
- Use proper heading hierarchy
{% endcapture %}
{% include do.html content=do_content %}

### Single Don't Callout

To create a Don't callout:

```liquid
{% raw %}{% capture dont_content %}
Your content here...
{% endcapture %}
{% include dont.html content=dont_content %}{% endraw %}
```

Example:

{% capture dont_content %}
Avoid non-semantic markup:
- Don't use `<div>` for buttons
- Don't skip heading levels
- Don't rely only on color for meaning
{% endcapture %}
{% include dont.html content=dont_content %}

## Side-by-Side Layout

Use the `callout-grid` class for side-by-side Do/Don't comparisons:

```liquid
{% raw %}<div class="callout-grid" markdown="1">

{% capture do_content %}
Do this...
{% endcapture %}
{% include do.html content=do_content %}

{% capture dont_content %}
Don't do this...
{% endcapture %}
{% include dont.html content=dont_content %}

</div>{% endraw %}
```

Example:

<div class="callout-grid" markdown="1">

{% capture do_content %}
**Write concise button labels**

Use action verbs that clearly describe what will happen:
- "Download PDF"
- "Create Account"
- "Send Message"
{% endcapture %}
{% include do.html content=do_content %}

{% capture dont_content %}
**Avoid vague labels**

Don't use generic text that doesn't explain the action:
- "Click Here"
- "Submit"
- "OK"
{% endcapture %}
{% include dont.html content=dont_content %}

</div>

## With Images

You can include images in callouts:

<div class="callout-grid" markdown="1">

{% capture do_content %}
**Provide sufficient color contrast**

Ensure text is readable against backgrounds.

![Good contrast example](https://via.placeholder.com/300x150/0066CC/ffffff?text=High+Contrast)

WCAG AA requires 4.5:1 ratio for normal text.
{% endcapture %}
{% include do.html content=do_content %}

{% capture dont_content %}
**Avoid low contrast combinations**

Light text on light backgrounds is hard to read.

![Bad contrast example](https://via.placeholder.com/300x150/cccccc/e0e0e0?text=Low+Contrast)

This fails accessibility standards.
{% endcapture %}
{% include dont.html content=dont_content %}

</div>

## Tips

- The `callout-grid` automatically stacks on mobile devices
- Images will automatically scale to fit the callout width
- You can use all standard Markdown formatting inside callouts
- Remember to use `markdown="1"` on the grid div for proper Markdown rendering
