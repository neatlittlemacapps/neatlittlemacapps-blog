---
layout: page
title: Spinner
category: components
status: In progress
storybook: https://infinitaslearning.github.io/module-quipu/index.html?path=/story/components-spinner--playground
---

# Spinner

Circular loading indicator for ongoing processes.

## Anatomy

| Element | Description |
| --- | --- |
| Spinner icon | Circular animated indicator. |
| Size | Inherits from parent component. |
| Color/style | Matches component context. |
| Animation | Continuous rotation loop. |

## Usage

• Use spinners inside components during loading (buttons, containers).
• Avoid showing spinner for actions completing in <300ms.
• Size spinner to match parent component scale.
• Keep spinner minimal and non-disruptive.

## Behaviour / States

| State | Description |
| --- | --- |
| Default | Spinner animates continuously. |
| Completed | Spinner removed when action finishes. |

## Best Practices

• Match size to parent component.
• Use for actions >300ms.
• Keep animation smooth and continuous.
