---
layout: page
title: Popover
category: components
status: In progress
storybook: https://infinitaslearning.github.io/module-quipu/index.html?path=/story/components-popover--playground
---

# Popover

Shows contextual content anchored to another element.

## Anatomy

| Element | Description |
| --- | --- |
| Container / surface | Holds the popover content. |
| Anchor / trigger | Element the popover is positioned relative to. |
| Content area | Main content (text, actions, or controls). |
| Arrow (optional) | Visual indicator pointing to trigger element. |
| Inset option | Removes internal padding for edge-to-edge content. |
| Dismiss mechanism | Handles closing (click outside or close action). |

## Usage

• Use popovers to show contextual information or actions related to a specific element.
• Keep content focused and concise.
• Use the inset option when popover content needs edge-to-edge alignment (lists, menus, custom layouts).
• Use popovers when content should remain visible until dismissed.
• Avoid placing critical or multi-step workflows inside a popover.

## Behaviour / States

| State | Description |
| --- | --- |
| Default | Popover is hidden until triggered. |
| Open | Popover is visible and anchored to its trigger. |
| Focus | Focus moves into the popover when opened, if interactive. |
| Active | Interactive elements inside popover are being used. |
| Dismissed | Popover is closed by user action or context change. |
| Disabled | Trigger may be disabled; popover cannot be opened. |

## Best Practices

• Keep popover content short and task-focused.
• Use the inset option only when content requires full-width alignment.
• Ensure popovers do not obscure important surrounding content.

## Do / Don't

{% include do.html content="
• Use inset popovers for edge-to-edge content like lists.
• Anchor popovers clearly to the related element.
• Close popovers when actions are completed or context changes.
" %}

{% include dont.html content="
• Use inset popovers for simple text or padded content.
• Overload popovers with dense or complex layouts.
• Use popovers as replacement for full pages or dialogs.
" %}
