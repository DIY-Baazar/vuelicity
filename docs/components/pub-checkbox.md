---
title: PubCheckbox
description: Documentation for the PubCheckbox component.
---

<script lang="ts" setup>
    import DefaultCheckbox from './PubCheckbox/DefaultCheckbox.vue';
    import DisabledCheckbox from './PubCheckbox/DisabledCheckbox.vue';
    import CheckboxLink from './PubCheckbox/CheckboxLink.vue';
    import BorderedCheckbox from './PubCheckbox/BorderedCheckbox.vue';
    import BorderedDesc from './PubCheckbox/BorderedDesc.vue';
    import BorderedIcon from './PubCheckbox/BorderedIcon.vue';
    import CheckboxGroup from './PubCheckbox/CheckboxGroup.vue';
    import HelperText from './PubCheckbox/HelperText.vue';
    // import Validation from './PubCheckbox/Validation.vue';
    import StylingCheckbox from './PubCheckbox/StylingCheckbox.vue';
</script>

# PubCheckbox

This is a checkbox component. It is used to display a checkbox field to select an option from a list of options.

## Default Usage

<demo-container flex-type='col' class='items-start'>
    <DefaultCheckbox />
</demo-container>

<<< @/components/PubCheckbox/DefaultCheckbox.vue

## Disabled

### Prop - `disabled` Usage

The `disabled` prop is used to disable the checkbox field. It can be a boolean value.

<demo-container flex-type='col' class='items-start'>
    <DisabledCheckbox />
</demo-container>

<<< @/components/PubCheckbox/DisabledCheckbox.vue

## Checkbox link

<demo-container>
    <CheckboxLink />
</demo-container>

<<< @/components/PubCheckbox/CheckboxLink.vue

## Bordered

### Prop - `bordered` Usage

The `bordered` prop is used to add a border to the checkbox field. It can be a boolean value.

<demo-container flex-type='col' class='items-start'>
    <BorderedCheckbox />
</demo-container>

<<< @/components/PubCheckbox/BorderedCheckbox.vue

## Bordered with description

<demo-container flex-type='col' class='items-start'>
    <BorderedDesc />
</demo-container>

<<< @/components/PubCheckbox/BorderedDesc.vue

<!-- ## Bordered with icon

<demo-container flex-type='col' class='items-start'>
    <BorderedIcon />
</demo-container>

<<< @/components/PubCheckbox/BorderedIcon.vue -->

## Checkbox group

<demo-container flex-type='col' class='items-start'>
    <CheckboxGroup />
</demo-container>

<<< @/components/PubCheckbox/CheckboxGroup.vue

## Helper Text

### Slot - `helper` Usage

The `helper` slot is used to display helper text below the checkbox field.

<demo-container>
    <HelperText />
</demo-container>

<<< @/components/PubCheckbox/HelperText.vue

## Styling Checkbox

### Prop - `class`, `wrapperClass`, `labelClass` Usage

The `class`, `wrapperClass`, and `labelClass` props are used to add additional classes to the checkbox field, outer wrapper, and label element, respectively.

<demo-container flex-type='col' class='items-start'>
    <StylingCheckbox />
</demo-container>

<<< @/components/PubCheckbox/StylingCheckbox.vue

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
