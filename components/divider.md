---
layout: page
title: Divider
category: components
status: In progress
storybook: https://infinitaslearning.github.io/module-quipu/index.html?path=/story/components-divider--playground
---

# Divider

Separates content into clear, scannable sections.

## Anatomy

| Element | Description |
| --- | --- |
| Line / rule | The visual separator that divides content. |
| Orientation | Defines whether divider is horizontal or vertical. |
| Inset option | Controls horizontal/vertical offset from container edge. |
| Container / wrapper | Positions the divider within layouts or components. |
| Label (optional) | Optional text used to describe or group content sections. |

## Usage

• Use dividers to separate related sections of content.
• Apply dividers in lists, menus, forms, cards, and layouts.
• Use inset dividers to align with content such as list items or text blocks.
• Use labeled dividers when a section needs explicit grouping or context.
• Use vertical dividers to separate content in horizontal layouts.

## Behaviour / States

| State | Description |
| --- | --- |
| Default | Divider is visible and separates content. |
| Non-interactive | Dividers do not respond to hover, focus, or clicks. |

## Best Practices

• Use dividers sparingly to avoid over-segmentation.
• Use inset options to maintain visual alignment with surrounding content.
• Ensure dividers support, rather than replace, layout hierarchy.

## Do / Don't

{% include do.html content="
• Use inset dividers to align with list content or nested layouts.
• Use dividers to clarify separation between content groups.
" %}

{% include dont.html content="
• Use dividers as decorative elements.
• Overuse dividers where spacing alone is sufficient.
• Use full-width dividers when inset alignment is expected.
" %}
