---
layout: page
title: Badge
category: components
status: In progress
storybook: https://infinitaslearning.github.io/module-quipu/index.html?path=/story/components-badge--playground
---

# Badge

Displays a numeric count or status indicator.

## Anatomy

| Element | Description |
| --- | --- |
| Container/wrapper | Defines badge position and size. |
| Counter (optional) | Displays numeric value (1, 10, 99+). |
| Dot indicator (optional) | Shows presence/status without count. |
| Color/style | Semantic color indicating meaning. |
| Anchor/parent | Element the badge is attached to. |

## Usage

• Use badges to surface dynamic, time-sensitive information.
• Attach badges to icons, tabs, tags, or cards.
• Use counter badges for counts (notifications, messages).
• Use dot badges for simple presence indicators.
• Position badges consistently relative to anchor elements.

## Behaviour / States

| State | Description |
| --- | --- |
| Default | Badge displays current count or dot. |
| Updated | Count changes from 1→10→99+ as values increase. |
| Non-interactive | Badges do not respond to hover or click. |

## Best Practices

• Use 99+ for counts exceeding two digits.
• Match badge size to parent component scale.
• Keep badge content minimal and scannable.
• Use semantic colors consistently (error, info, success).
