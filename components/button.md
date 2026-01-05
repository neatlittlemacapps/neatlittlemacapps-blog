---
layout: page
title: Button
description: In progress Triggers an action or event when pressed.
status: in-progress
section: components
storybook_url: https://infinitaslearning.github.io/module-quipu/index.html?path=/story/components-button--playground
---

# Button

  In progress    
Triggers an action or event when pressed.

A Button triggers an action, such as submitting a form, opening a dialog, or
navigating.

[View in Storybook](https://infinitaslearning.github.io/module-quipu/index.html?path=/story/components-button--playground)

### Variants

Buttons come in 6 different variants, each suited for specific actions or emphasis levels.

{% include tabs.html tabs="Primary,Secondary,Tertiary,Text,Outlined,Ghost" %}

<div class="tab-content" data-tab="Primary">

**Primary Button**: The most prominent button, used for primary actions.

</div>

<div class="tab-content" data-tab="Secondary">

**Secondary Button**: Used for secondary actions that support the primary action.

</div>

<div class="tab-content" data-tab="Tertiary">

**Tertiary Button**: Used for less prominent actions.

</div>

<div class="tab-content" data-tab="Text">

**Text Button**: Minimal emphasis, used for low-priority actions.

</div>

<div class="tab-content" data-tab="Outlined">

**Outlined Button**: Medium emphasis with border, no fill.

</div>

<div class="tab-content" data-tab="Ghost">

**Ghost Button**: Subtle appearance for low-emphasis contexts.

</div>

### Sizes

Buttons are available in three sizes to fit different contexts and available
space. To see all possible configurations, visit the example section.

| Size | Description |
| --- | --- |
| Small | Compact button for tight spaces, such as toolbars or inline actions. |
| Medium | Standard button size for most layouts. |
| Large | Large button for areas with more space or where higher tap targets are needed. |

### Destructive

Destructive buttons indicate actions that remove or permanently change data. Use
them carefully to highlight high-impact operations.

### Loading

Loading buttons show that an action is in progress. They help set user
expectations and prevent repeated clicks.

### Disabled

Disabled buttons cannot be interacted with and indicate unavailable actions.
They help communicate the current state and prevent user errors. Avoid leaving
users guessing, don't disable without explanation if the reason isn't obvious from context.

### Anatomy

This section outlines the key parts of the component and how they fit together
to support clear and consistent usage.

| Element | Description |
| --- | --- |
| Button container | Clickable area containing text or icon. |
| Label / icon | Describes the action. |
| Container / wrapper | Holds the button with spacing and layout consistency. |

### Usage

• Use for actions that trigger a process or change the interface.
• Keep labels action-oriented and concise.

### Behaviour / States

| State | Description |
| --- | --- |
| Default | Button is ready for interaction. |
| Hover | Highlights on pointer hover. |
| Focus | Outlined for keyboard navigation. |
| Active | Shows temporary state while clicked. |
| Disabled | Button cannot be interacted with. |

### Best Practices

• Use clear, action-oriented labels.
• Limit the number of buttons per view.

### Do / Don't

{% include do.html content="
• Use verbs ('Save', 'Create', 'Delete').
• Keep labels concise and action-oriented.
• Use primary buttons for the main action on a page.
" %}

{% include dont.html content="
• Use buttons for non-action items (use links instead).
• Leave labels ambiguous or unclear.
• Overuse primary buttons - only one per section.
" %}

### Accessibility note

• Must be keyboard-accessible and screen reader-friendly.