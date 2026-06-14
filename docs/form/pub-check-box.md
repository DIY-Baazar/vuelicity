---
title: PubCheckBox
description: Documentation for the PubCheckBox component.
---

<script setup>
    import Default from './PubCheckBox/Default.vue';
    import Disabled from './PubCheckBox/Disabled.vue';
    import CheckboxLink from './PubCheckBox/CheckboxLink.vue';
    import Bordered from './PubCheckBox/Bordered.vue';
    import BorderedDesc from './PubCheckBox/BorderedDesc.vue';
    import BorderedIcon from './PubCheckBox/BorderedIcon.vue';
    import CheckboxGroup from './PubCheckBox/CheckboxGroup.vue';
    import HelperText from './PubCheckBox/HelperText.vue';
    // import Validation from './PubCheckBox/Validation.vue';
</script>

# PubCheckBox

This is a checkbox component. It is used to display a checkbox field to select an option from a list of options.

## Default Usage

<demo-container flex-type='col' class='items-start'>
    <Default />
</demo-container>

<<< @/form/PubCheckBox/Default.vue

## Disabled

### Prop - `disabled` Usage

The `disabled` prop is used to disable the checkbox field. It can be a boolean value.

<demo-container flex-type='col' class='items-start'>
    <Disabled />
</demo-container>

<<< @/form/PubCheckBox/Disabled.vue

## Checkbox link

<demo-container>
    <CheckboxLink />
</demo-container>

<<< @/form/PubCheckBox/CheckboxLink.vue

## Bordered

### Prop - `bordered` Usage

The `bordered` prop is used to add a border to the checkbox field. It can be a boolean value.

<demo-container flex-type='col' class='items-start'>
    <Bordered />
</demo-container>

<<< @/form/PubCheckBox/Bordered.vue

## Bordered with description

<demo-container flex-type='col' class='items-start'>
    <BorderedDesc />
</demo-container>

<<< @/form/PubCheckBox/BorderedDesc.vue

<!-- ## Bordered with icon

<demo-container flex-type='col' class='items-start'>
    <BorderedIcon />
</demo-container>

<<< @/form/PubCheckBox/BorderedIcon.vue -->

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

<<< @/form/PubCheckBox/HelperText.vue

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
