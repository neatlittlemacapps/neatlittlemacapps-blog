---
layout: page
title: Checkbox
description: In progress Allows users to select one or more options from a set.
status: in-progress
section: components
storybook_url: https://infinitaslearning.github.io/module-quipu/index.html?path=/story/components-checkbox--playground
---

# Checkbox

  In progress    
Allows users to select one or more options from a set.

[View in Storybook](https://infinitaslearning.github.io/module-quipu/index.html?path=/story/components-checkbox--playground)

### Description 

Checkboxes enable users to select one or more options and make simple decisions.
They provide flexibility in selection, unlike radio buttons that allow only a
single choice. This is particularly useful in scenarios where users need to agree
to terms, select multiple items, or choose from a list of options.

### Anatomy 

The anatomy of a checkbox, including its box, label, title, and helper text, is
important as it ensures clarity and accessibility for users, making interactions
straightforward and intuitive. A typical checkbox consists of:

| Checkbox | The visual square indicator where the check mark appears to signify a selected option. |
| --- | --- |
| Label | Text associated with the checkbox option that describes its function. |
| Helper text | Additional guidance text that offers context or instructions. |
| Title (if grouped) | A prominent text element that provides a contextual name for the checkbox group. |

### Behaviour / states

The behaviour of checkboxes determines their interactive functionality and
transition states, ensuring an intuitive and consistent user experience.

Interactive States:

| State | Description |
| --- | --- |
| Default | The unchecked state represents no selection. |
| Checked | Indicates selection by the user. |
| Indeterminate | Shows partial selection, useful for parent checkboxes. |
| Hover | Changes appearance when a mouse hovers over. |
| Active | Visual changes show the checkbox is clicked or pressed. |
| Focus | Highlights the checkbox for keyboard navigation. |
| Disabled | Greyed out and non-interactive. |

### Best practices

Focus on ensuring the functionality is intuitive and accessible for users.

{% include do.html content="
• Group checkboxes together when they are related.
• Default promotional or legal checkboxes to unchecked.
• Use clear, concise labels that describe what's being selected.
" %}

{% include dont.html content="
• Avoid using checkboxes for single choice selections (use radio buttons).
• Don't preselect promotional or legal checkboxes.
• Don't leave checkboxes without labels.
" %}