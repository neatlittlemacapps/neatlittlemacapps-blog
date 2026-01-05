---
layout: page
title: Avatar
category: components
status: In progress
storybook: https://infinitaslearning.github.io/module-quipu/index.html?path=/story/components-avatar--playground
---

# Avatar

Represents a user for identification and profile access.

## Anatomy

| Element | Description |
| --- | --- |
| Container / wrapper | Defines the avatar shape and size. |
| Image (optional) | Displays the user's profile image when available. |
| Initials / fallback | Text fallback shown when no image is available. |
| Icon (optional) | Generic representation when image/initials not provided. |
| Shape variant | Circular or rounded square, depending on context. |
| Badge (optional) | Optional indicator for status or notifications. |

## Usage

• Use avatars to represent users and provide quick access to profile-related views.
• Place avatars in navigation to represent the current user.
• Use avatars as student identifiers in dashboards, task lists, and overviews.
• Use avatar groups to represent classes, teams, or participants.
• Choose the appropriate shape based on context:
  - Circular for in-platform user representation.
  - Rounded square primarily for navigation.

## Behaviour / States

| State | Description |
| --- | --- |
| Default | Avatar displayed as image, initials, or icon. |
| Hover | Optional tooltip may appear (user's full name). |
| Focus | Applies when avatar is interactive and receives keyboard focus. |
| Active | Applies when avatar triggers a profile-related action. |
| Loading | Fallback content shown while image loads. |
| Disabled | Applies only when avatar is used as disabled interactive element. |

## Best Practices

• Use avatars primarily for user representation, not content indicators.
• Ensure avatars remain recognizable at all supported sizes.
• Use tooltips or labels when identity may not be immediately clear.

## Do / Don't

{% include do.html content="
• Use avatars to represent users and link to profile-related actions.
• Use circular avatars for in-platform contexts and rounded square in navigation.
• Provide meaningful fallbacks when profile images are unavailable.
" %}

{% include dont.html content="
• Use avatars as generic content indicators.
• Use avatars at sizes where identity becomes unclear.
• Overload avatars with multiple meanings or decorations.
" %}
