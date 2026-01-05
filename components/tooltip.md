---
layout: page
title: Tooltip
category: components
status: In progress
storybook: https://infinitaslearning.github.io/module-quipu/index.html?path=/story/components-tooltip--playground
---

# Tooltip

Brief contextual information on hover or focus.

## Anatomy

| Element | Description |
| --- | --- |
| Container/bubble | Holds tooltip content. |
| Text/content | 1-2 lines of clarifying text. |
| Arrow/pointer (optional) | Points to trigger element. |
| Trigger element | Element that shows tooltip. |
| Animation/transition | Smooth appear/disappear. |

## Usage

• Use tooltips to clarify functionality or provide context.
• Keep content to 1-2 lines maximum.
• Trigger on hover and focus (keyboard accessible).
• Avoid interactive elements inside tooltips.

## Behaviour / States

| State | Description |
| --- | --- |
| Default | Tooltip hidden until triggered. |
| Hover | Appears when mouse enters trigger. |
| Focus | Appears when trigger receives keyboard focus. |
| Dismissed | Hides when trigger loses hover/focus. |

## Best Practices

• Keep text concise (1-2 lines).
• Trigger on hover AND focus.
• Don't obscure important content.
