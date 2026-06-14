---
title: PubCheckbox
description: Documentation for the PubCheckbox component.
---

<script setup>
    import Default from './PubCheckbox/Default.vue';
    import Disabled from './PubCheckbox/Disabled.vue';
    import CheckboxLink from './PubCheckbox/CheckboxLink.vue';
    import Bordered from './PubCheckbox/Bordered.vue';
    import BorderedDesc from './PubCheckbox/BorderedDesc.vue';
    import BorderedIcon from './PubCheckbox/BorderedIcon.vue';
    import CheckboxGroup from './PubCheckbox/CheckboxGroup.vue';
    import HelperText from './PubCheckbox/HelperText.vue';
    // import Validation from './PubCheckbox/Validation.vue';
</script>

# PubCheckbox

This is a checkbox component. It is used to display a checkbox field to select an option from a list of options.

## Default Usage

<demo-container flex-type='col' class='items-start'>
    <Default />
</demo-container>

<<< @/form/PubCheckbox/Default.vue

## Disabled

### Prop - `disabled` Usage

The `disabled` prop is used to disable the checkbox field. It can be a boolean value.

<demo-container flex-type='col' class='items-start'>
    <Disabled />
</demo-container>

<<< @/form/PubCheckbox/Disabled.vue

## Checkbox link

<demo-container>
    <CheckboxLink />
</demo-container>

<<< @/form/PubCheckbox/CheckboxLink.vue

## Bordered

### Prop - `bordered` Usage

The `bordered` prop is used to add a border to the checkbox field. It can be a boolean value.

<demo-container flex-type='col' class='items-start'>
    <Bordered />
</demo-container>

<<< @/form/PubCheckbox/Bordered.vue

## Bordered with description

<demo-container flex-type='col' class='items-start'>
    <BorderedDesc />
</demo-container>

<<< @/form/PubCheckbox/BorderedDesc.vue

<!-- ## Bordered with icon

<demo-container flex-type='col' class='items-start'>
    <BorderedIcon />
</demo-container>

<<< @/form/PubCheckbox/BorderedIcon.vue -->

## Checkbox group

<demo-container flex-type='col' class='items-start'>
    <CheckboxGroup />
</demo-container>

## Helper Text

### Slot - `helper` Usage

The `helper` slot is used to display helper text below the checkbox field.

<demo-container>
    <HelperText />
</demo-container>

<<< @/form/PubCheckbox/HelperText.vue

## Reference

### Properties

| Name         | Type                            | Default   | Description                                        | Options |
| ------------ | ------------------------------- | --------- | -------------------------------------------------- | ------- |
| disabled     | Boolean                         | false     | Disables the checkbox field.                       |         |
| label        | String                          | ''        | Text label displayed beside the checkbox.          |         |
| labelClass   | String                          | ''        | Additional classes for the label element.          |         |
| class        | String                          | ''        | Additional classes for the checkbox input element. |         |
| wrapperClass | String                          | ''        | Additional classes for the outer wrapper.          |         |
| name         | String                          | undefined | HTML name attribute for the checkbox input.        |         |
| value        | String, Number, Boolean, Object | undefined | HTML value attribute for the checkbox input.       |         |

### Slots

| Name    | Description                                         |
| ------- | --------------------------------------------------- |
| default | Custom label content displayed beside the checkbox. |
| helper  | Slot for helper text displayed below the checkbox.  |
