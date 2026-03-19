---
mapWithTag: false
icon: pen-line
fields:
  - name: title
    type: Input
    id: bp_title
    path: ""
  - name: meta_title
    type: Input
    id: bp_meta_title
    path: ""
  - name: description
    type: Input
    id: bp_description
    path: ""
  - name: date
    type: Date
    id: bp_date
    path: ""
    options:
      dateFormat: YYYY-MM-DD
  - name: image
    type: Input
    id: bp_image
    path: ""
  - name: categories
    type: Multi
    id: bp_categories
    path: ""
    options:
      - Archive
      - Career
      - DesignOps
      - AI
      - Design Systems
      - UX Research
  - name: author
    type: Select
    id: bp_author
    path: ""
    options:
      - Frank De Graeve
  - name: tags
    type: Multi
    id: bp_tags
    path: ""
  - name: draft
    type: Boolean
    id: bp_draft
    path: ""
  - name: original_platform
    type: Select
    id: bp_original_platform
    path: ""
    options:
      - Medium
---
