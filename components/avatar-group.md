---
layout: page
title: Avatar Group
category: components
status: In progress
storybook: https://infinitaslearning.github.io/module-quipu/index.html?path=/story/components-avatargroup--playground
---

# Avatar Group

Shows multiple users together to represent a group.

## Anatomy

| Element | Description |
| --- | --- |
| Group container | Holds and aligns multiple avatars as a single unit. |
| Avatar items | Individual avatars representing users within the group. |
| Overflow indicator | Optional indicator showing additional users (e.g. "+3"). |
| Tooltip (optional) | Provides additional context (user names) on hover. |

## Usage

• Use avatar groups to represent multiple users collectively.
• Apply avatar groups in dashboards, lists, cards, or collaborative views.
• Use overflow indicators when the full list cannot be shown.
• Keep avatar groups visually aligned with surrounding content.

## Behaviour / States

| State | Description |
| --- | --- |
| Default | Avatar group displays a set of user avatars. |
| Hover | Optional tooltip may appear for individual avatars. |
| Focus | Applies when avatars or overflow indicator are interactive. |
| Active | Applies when avatar/overflow indicator triggers action. |
| Disabled | Applies only when group/avatars used in disabled context. |

## Best Practices

• Use avatar groups to summarize participation, not replace detailed lists.
• Limit the number of visible avatars to maintain clarity.
• Use overflow indicators to communicate additional members clearly.

## Do / Don't

{% include do.html content="
• Use avatar groups for classes, teams, or shared ownership contexts.
• Provide clear indication when more users are included than shown.
• Ensure avatars remain recognizable at supported sizes.
" %}

{% include dont.html content="
• Use avatar groups when individual user identity is critical.
• Overcrowd the group with too many visible avatars.
• Rely on avatar groups alone to convey critical user information.
" %}
