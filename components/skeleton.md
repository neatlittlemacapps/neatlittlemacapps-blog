---
layout: page
title: Skeleton
category: components
status: In progress
storybook: https://infinitaslearning.github.io/module-quipu/index.html?path=/story/components-skeleton--playground
---

# Skeleton

Placeholder content during loading states.

## Anatomy

| Element | Description |
| --- | --- |
| Container/wrapper | Defines skeleton layout. |
| Shape/Block | Matches final content shape. |
| Animation | Shimmer or pulse effect. |
| Color/style | Subtle, non-distracting appearance. |

## Usage

• Use skeletons as loading placeholders that maintain layout.
• Match skeleton shape to final content dimensions.
• Avoid showing skeleton for loads completing in <300ms.
• Ensure skeleton doesn't obscure critical UI.

## Behaviour / States

| State | Description |
| --- | --- |
| Default | Skeleton displays placeholder. |
| Animated | Shimmer/pulse animation active. |
| Completed | Skeleton removed when content loads. |

## Best Practices

• Match final content dimensions.
• Use subtle shimmer animation.
• Maintain consistent spacing.
