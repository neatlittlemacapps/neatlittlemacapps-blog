---
layout: page
title: Progress
category: components
status: In progress
storybook: https://infinitaslearning.github.io/module-quipu/index.html?path=/story/components-linearprogress--playground
---

# Progress

Indicates completion progress for tasks or goals.

## Types

{% include tabs.html tabs="Linear,Circular" %}

<div class="tab-content" data-tab="Linear">

### Linear

Displays progress toward completion using a horizontal bar.

[View in Storybook](https://infinitaslearning.github.io/module-quipu/index.html?path=/story/components-linearprogress--playground)

</div>

<div class="tab-content" data-tab="Circular">

### Circular

Displays progress toward completion using a circular indicator.

[View in Storybook](https://infinitaslearning.github.io/module-quipu/index.html?path=/story/components-circularprogress--playground)

</div>

## Anatomy

| Element | Description |
| --- | --- |
| Track | The background line or ring representing total progress. |
| Progress indicator | The filled portion showing completed progress. |
| Label (optional) | Text describing what the progress represents. |
| Value (optional) | Numeric or percentage value indicating completion. |
| Container / wrapper | Defines layout, size, and positioning. |

## Usage

• Use progress indicators to show completion of user-driven tasks or goals.
• Choose the appropriate type based on available space and context:
  - Linear progress for flows, steps, or ongoing tasks.
  - Circular progress for summaries, dashboards, or compact areas.
• Always make it clear what the progress represents through labels or context.
• Use progress only when completion can be measured accurately.

## Behaviour / States

| State | Description |
| --- | --- |
| Determinate | Progress updates from 0% to 100% based on user actions. |
| Updated | Visual indicator changes as progress value increases/decreases. |
| Completed | Progress reaches 100% and reflects task completion. |

## Best Practices

• Use progress indicators only for measurable completion, not loading states.
• Prefer linear progress for step-based or sequential tasks.
• Prefer circular progress for compact or high-level summaries.
• Keep progress visuals clear, calm, and easy to interpret.

## Do / Don't

{% include do.html content="
• Clearly label what the progress represents (e.g. 'Profile completion').
• Use linear progress for flows like onboarding or multi-step tasks.
• Use circular progress for summaries, cards, or dashboards.
" %}

{% include dont.html content="
• Use progress indicators for system loading (use Spinner instead).
• Show progress without clear meaning or context.
• Display progress that cannot be reliably measured.
" %}
