---
layout: default
title: Home
nav_order: 1
description: "Infinitas Learning Design System documentation - foundations, guidelines, components, and design tokens."
permalink: /
---

{% include hero.html 
   title="Infinitas Learning Design System" 
   description="Comprehensive guidelines, components, and resources for building consistent user experiences across Infinitas Learning products."
   updated="January 2026" %}

## Getting Started

{% capture cards %}
{% include card.html 
   title="Foundations" 
   description="Colors, typography, spacing, and core design principles."
   url="{{ site.baseurl }}/foundations/" %}
{% include card.html 
   title="Guidelines" 
   description="Best practices and usage guidelines for design and development."
   url="{{ site.baseurl }}/guidelines/" %}
{% include card.html 
   title="Components" 
   description="Reusable UI components and interaction patterns."
   url="{{ site.baseurl }}/components/" %}
{% include card.html 
   title="Tokens" 
   description="Design tokens for consistent implementation across platforms."
   url="{{ site.baseurl }}/tokens/" %}
{% endcapture %}
{% include card-grid.html content=cards %}

{% include divider.html %}

## Quick Links

- View our [GitHub repository](https://github.com/neatlittlemacapps/neatlittlemacapps-blog)
- Report issues or suggest improvements
- Learn about our [layout components]({{ site.baseurl }}/guidelines/layout-components/)

---

*Design system maintained by the Infinitas Learning design team*
