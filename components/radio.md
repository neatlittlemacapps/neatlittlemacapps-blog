---
layout: page
title: Radio
description: In progress Allows users to select a single option from a group.
status: in-progress
section: components
storybook_url: https://infinitaslearning.github.io/module-quipu/index.html?path=/story/components-radio--playground
---

# Radio

  In progress    
Allows users to select a single option from a group.

A Radio Button presents a set of options where only one can be active at a time.
They support comparison by showing all choices at once, helping users commit to
a single, definitive selection.

[View in Storybook](https://infinitaslearning.github.io/module-quipu/index.html?path=/story/components-radio--playground)

### Anatomy 

This section outlines the key parts of the component and how they fit together
to support clear and consistent usage.

| Element | Description |
| --- | --- |
| Group label / title | Defines the purpose of the selection set. |
| Radio button | The circular control used to indicate a selectable option. |
| Option label | Text describing each option. |
| Helper text (optional) | Provides additional guidance. |
| Layout container | Arranges the options vertically or horizontally. |

### Behaviour / states

The Radio Group supports the following interaction states:

| Default | Option is unselected. |
| --- | --- |
| Selected | Option is chosen by the user. Only one option can be selected at a time. |
| Hover | Option highlights to indicate it is interactive. |
| Active | Option provides feedback when pressed or clicked. |
| Focus | Option is highlighted for keyboard navigation. |
| Disabled | Option or the entire group is greyed out. |

### Do / Don't

{% include do.html content="
• Provide a clear and descriptive group label.
• Use concise, meaningful option labels.
• Include helper text when additional guidance is needed.
• Arrange options logically with consistent spacing.
• Ensure all options are accessible via keyboard and screen readers.
" %}

{% include dont.html content="
• Leave the group label or option labels ambiguous.
• Overload users with too many options in a single group.
• Rely solely on color to convey selection or state.
• Mix unrelated actions within the same group.
• Disable options without providing context.
" %}