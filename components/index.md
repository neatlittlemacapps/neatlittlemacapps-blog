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

<div class="category-section">
  <h2 class="category-title">Form Controls</h2>
  <p class="category-description">Components that let users enter information and make choices.</p>
  <div class="nav-card-grid">
    {% include card.html 
      url="/components/button/" 
      title="Button" 
      description="Triggers an action or event when pressed."
      image="/assets/images/components/button.svg" %}
    {% include card.html 
      url="/components/checkbox/" 
      title="Checkbox" 
      description="Allows users to select multiple options."
      image="/assets/images/components/checkbox.svg" %}
    {% include card.html 
      url="/components/radio/" 
      title="Radio" 
      description="Lets users select one option from a set."
      image="/assets/images/components/radio.svg" %}
  </div>
</div>

<div class="category-section">
  <h2 class="category-title">Feedback & Status</h2>
  <p class="category-description">Components that communicate system state and user feedback.</p>
  <div class="nav-card-grid">
    {% include card.html 
      url="/components/badge/" 
      title="Badge" 
      description="Displays a numeric count or status indicator."
      image="/assets/images/components/badge.svg" %}
    {% include card.html 
      url="/components/progress/" 
      title="Progress" 
      description="Indicates completion progress for tasks."
      image="/assets/images/components/progress.svg" %}
    {% include card.html 
      url="/components/tooltip/" 
      title="Tooltip" 
      description="Brief contextual information on hover."
      image="/assets/images/components/tooltip.svg" %}
  </div>
</div>

<div class="category-section">
  <h2 class="category-title">Content & Media</h2>
  <p class="category-description">Components for displaying content and user information.</p>
  <div class="nav-card-grid">
    {% include card.html 
      url="/components/avatar/" 
      title="Avatar" 
      description="Represents a user for identification."
      image="/assets/images/components/avatar.svg" %}
    {% include card.html 
      url="/components/card/" 
      title="Card" 
      description="Surface for grouping related content."
      image="/assets/images/components/card.svg" %}
  </div>
</div>
    <a href="#" class="component-link">Modals</a>
    <a href="#" class="component-link">Panels</a>
    <a href="#" class="component-link">Containers</a>
  </div>
</div>

<div class="category-section">
  <h2 class="category-title">Feedback & Status</h2>
  <p class="category-description">Communicate system state and user feedback.</p>
  <div class="component-link-grid">
    <a href="#" class="component-link">Alerts</a>
    <a href="#" class="component-link">Badges</a>
    <a href="#" class="component-link">Tooltips</a>
    <a href="#" class="component-link">Progress</a>
    <a href="#" class="component-link">Spinners</a>
  </div>
</div>

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
