---
mapWithTag: false
icon: briefcase
fields:
  - name: title
    type: Input
    id: cs_title
    path: ""
  - name: meta_title
    type: Input
    id: cs_meta_title
    path: ""
  - name: description
    type: Input
    id: cs_description
    path: ""
  - name: date
    type: Date
    id: cs_date
    path: ""
    options:
      dateFormat: YYYY-MM-DD
  - name: image
    type: Input
    id: cs_image
    path: ""
  - name: categories
    type: Multi
    id: cs_categories
    path: ""
    options:
      - Design Systems
      - DesignOps
      - UX Research
      - AI
      - Service Design
  - name: author
    type: Select
    id: cs_author
    path: ""
    options:
      - Frank De Graeve
  - name: tags
    type: Multi
    id: cs_tags
    path: ""
  - name: draft
    type: Boolean
    id: cs_draft
    path: ""
---
