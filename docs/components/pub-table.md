---
title: PubTable
description: Documentation for the PubTable component.
---

<script setup>
    import Default from './PubTable/Default.vue';
    import Striped from './PubTable/Striped.vue';
    import StripedColumns from './PubTable/StripedColumns.vue';
    import Hoverable from './PubTable/Hoverable.vue';
</script>

# PubTable

This is a table component. It is used to display a table and supports various table styles, such as default, hoverable, and striped.

## Default Usage

Use `PubTable` with `PubTableHead`, `PubTableBody`, `PubTableRow`, `PubTableHeadCell`, and `PubTableCell` to compose a structured data table.

<demo-container>
    <Default />
</demo-container>

<<< @/components/PubTable/Default.vue

## Striped Rows

### Prop - `striped` Usage

The `striped` prop can be used to add a stripe pattern to the rows of the table.

<demo-container>
    <Striped />
</demo-container>

<<< @/components/PubTable/Striped.vue

## Striped Columns

### Prop - `striped-columns` Usage

The `striped-columns` prop can be used to add a stripe pattern to the columns of the table.

<demo-container>
    <StripedColumns />
</demo-container>

<<< @/components/PubTable/StripedColumns.vue

## Hover state

### Prop - `hoverable` Usage

The `hoverable` prop can be used to add a hover state to the rows of the table.

<demo-container>
    <Hoverable />
</demo-container>

<<< @/components/PubTable/Hoverable.vue

## Reference

### PubTable

#### Properties

| Name           | Type    | Default   | Description                                     | Options                                                                         |
| -------------- | ------- | --------- | ----------------------------------------------- | ------------------------------------------------------------------------------- |
| class          | String  | `''`      | Additional CSS classes to apply.                |                                                                                 |
| wrapperClass   | String  | `''`      | Additional CSS classes to apply to the wrapper. |                                                                                 |
| theme          | String  | `default` | The color theme of the table.                   | `default`, `blue`, `red`, `green`, `yellow`, `magenta`, `cyan`, `light`, `dark` |
| striped        | Boolean | `false`   | Add a stripe pattern to the rows.               |                                                                                 |
| stripedColumns | Boolean | `false`   | Add a stripe pattern to the columns.            |                                                                                 |
| hoverable      | Boolean | `false`   | Add a hover state to the rows.                  |                                                                                 |

#### Slots

| Name    | Description                                                 |
| ------- | ----------------------------------------------------------- |
| default | Table content — `PubTableHead` and `PubTableBody` elements. |

### PubTableBody

#### Slots

| Name    | Description                         |
| ------- | ----------------------------------- |
| default | One or more `PubTableRow` elements. |

### PubTableCell

#### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | Default slot for content. |

### PubTableHead

#### Slots

| Name    | Description                              |
| ------- | ---------------------------------------- |
| default | One or more `PubTableHeadCell` elements. |

### PubTableHeadCell

#### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | Default slot for content. |

### PubTableRow

#### Slots

| Name    | Description                          |
| ------- | ------------------------------------ |
| default | One or more `PubTableCell` elements. |
