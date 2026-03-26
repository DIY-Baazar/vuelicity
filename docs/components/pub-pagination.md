---
title: PubPagination
description: Documentation for PubPagination.
---

<script setup>
import Default from './PubPagination/Default.vue';
import WithIcons from './PubPagination/WithIcons.vue';
import CustomLen from './PubPagination/CustomLen.vue';
import PrevNext from './PubPagination/PrevNext.vue';
import PrevNextIcon from './PubPagination/PrevNextIcon.vue';
import FirstLast from './PubPagination/FirstLast.vue';
import Table from './PubPagination/Table.vue';
import CustomLabel from './PubPagination/CustomLabel.vue';
</script>

# PubPagination

This is a pagination component which can be used to paginate through a list of items.

## Default Usage

<demo-container flex-type='col'>
    <Default/>
</demo-container>

<<< @/components/PubPagination/Default.vue

## Pagination with icons

<demo-container flex-type='col'>
    <WithIcons/>
</demo-container>

<<< @/components/PubPagination/WithIcons.vue

## Custom length pagination

<demo-container flex-type='col'>
    <CustomLen/>
</demo-container>

<<< @/components/PubPagination/CustomLen.vue

## Previous and Next

<demo-container flex-type='col'>
    <PrevNext/>
</demo-container>

<<< @/components/PubPagination/PrevNext.vue

## Previous and Next with icons

<demo-container flex-type='col'>
    <PrevNextIcon/>
</demo-container>

<<< @/components/PubPagination/PrevNextIcon.vue

## First and Last

<demo-container flex-type='col'>
    <FirstLast/>
</demo-container>

<<< @/components/PubPagination/FirstLast.vue

## Table data pagination

<demo-container flex-type='col'>
    <Table/>
</demo-container>

<<< @/components/PubPagination/Table.vue

## Pagination with custom labels

<demo-container flex-type='col'>
    <CustomLabel/>
</demo-container>

<<< @/components/PubPagination/CustomLabel.vue

<!--
## Table pagination with icons

## Pagination with dropdown

## Pagination with input

## Input field and button

## Select input and buttons

## Single pagination
-->

## Reference

### Properties

| Name          | Type    | Default        | Description                                                 | Options                                   |
| :------------ | :------ | :------------- | :---------------------------------------------------------- | :---------------------------------------- |
| modelValue    | Number  | `1`            | The current page number.                                    |                                           |
| totalPages    | Number  | `undefined`    | The total number of pages.                                  |                                           |
| pageSize      | Number  | `10`           | The number of items per page.                               |                                           |
| totalItems    | Number  | `10`           | The total number of items.                                  |                                           |
| size          | String  | `'sm'`         | The size of the pagination buttons.                         | `'sm'`, `'md'`, `'lg'`                    |
| sliceSize     | Number  | `2`            | The number of page buttons to show around the current page. |                                           |
| prevLabel     | String  | `'Previous'`   | The label for the previous button.                          |                                           |
| nextLabel     | String  | `'Next'`       | The label for the next button.                              |                                           |
| firstLabel    | String  | `'First'`      | The label for the first button.                             |                                           |
| lastLabel     | String  | `'Last'`       | The label for the last button.                              |                                           |
| showIcons     | Boolean | `false`        | Whether to show icons for navigation buttons.               |                            |
| showFirstLast | Boolean | `false`        | Whether to show first and last page buttons.                |                            |
| hidePrev      | Boolean | `false`        | Whether to hide the previous button.                        |                            |
| hideNext      | Boolean | `false`        | Whether to hide the next button.                            |                            |
| hideLabels    | Boolean | `false`        | Whether to hide the labels for navigation buttons.          |                            |
| layout        | String  | `'pagination'` | The layout style of the pagination.                         | `'pagination'`, `'navigation'`, `'table'` |

### Slots

| Name         | Description                                          |
| ------------ | ---------------------------------------------------- |
| start        | Slot for content at the beginning of the pagination. |
| first-button | Slot for the first page button.                      |
| first-icon   | Slot for the icon of the first page button.          |
| prev-button  | Slot for the previous page button.                   |
| prev-icon    | Slot for the icon of the previous page button.       |
| page-button  | Slot for individual page number buttons.             |
| next-button  | Slot for the next page button.                       |
| next-icon    | Slot for the icon of the next page button.           |
| last-button  | Slot for the last page button.                       |
| last-icon    | Slot for the icon of the last page button.           |
| end          | Slot for content at the end of the pagination.       |

### Events

| Name               | Description                            |
| ------------------ | -------------------------------------- |
| update:model-value | Emitted when the current page changes. |
| page-changed       | Emitted when the current page changes. |
