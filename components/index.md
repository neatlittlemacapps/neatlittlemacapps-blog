---
layout: page
title: Components
nav_order: 4
has_children: true
permalink: /components/
---

{% include hero.html 
   title="Components" 
   status="in-progress"
   description="Reusable UI components that make up the Infinitas Learning user interface."
   updated="January 2026" %}

## Component Library

Our component library provides consistent, accessible building blocks for creating user interfaces.

{% include divider.html %}

{% capture input_controls %}
{% include component-link.html title="Buttons" url="{{ site.baseurl }}/components/buttons/" %}
{% include component-link.html title="Forms" url="#" %}
{% include component-link.html title="Checkboxes" url="#" %}
{% include component-link.html title="Radio Buttons" url="#" %}
{% include component-link.html title="Text Fields" url="#" %}
{% include component-link.html title="Selects" url="#" %}
{% endcapture %}
{% include category-section.html 
   title="Input & Controls" 
   description="Components that let users enter information and make choices."
   content=input_controls %}

{% capture navigation %}
{% include component-link.html title="Navigation Bar" url="#" %}
{% include component-link.html title="Breadcrumbs" url="#" %}
{% include component-link.html title="Tabs" url="#" %}
{% include component-link.html title="Pagination" url="#" %}
{% include component-link.html title="Links" url="#" %}
{% endcapture %}
{% include category-section.html 
   title="Navigation & Interaction" 
   description="Elements that help users move around and engage with the interface."
   content=navigation %}

{% capture surfaces %}
{% include component-link.html title="Cards" url="#" %}
{% include component-link.html title="Modals" url="#" %}
{% include component-link.html title="Panels" url="#" %}
{% include component-link.html title="Containers" url="#" %}
{% endcapture %}
{% include category-section.html 
   title="Surfaces & Containers" 
   description="Layout foundations that define structure and containment."
   content=surfaces %}

{% capture feedback %}
{% include component-link.html title="Alerts" url="#" %}
{% include component-link.html title="Badges" url="#" %}
{% include component-link.html title="Tooltips" url="#" %}
{% include component-link.html title="Progress" url="#" %}
{% include component-link.html title="Spinners" url="#" %}
{% endcapture %}
{% include category-section.html 
   title="Feedback & Status" 
   description="Communicate system state and user feedback."
   content=feedback %}

{% include divider.html %}

## Using Components

Each component page includes:
- Visual examples and variants
- Usage guidelines and best practices
- Code snippets for implementation
- Accessibility considerations
- Do's and don'ts

## Contribution

Found a bug or want to suggest an improvement? Open an issue on our GitHub repository.
