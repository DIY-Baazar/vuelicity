---
title: PubSelect
description: Documentation for the PubSelect component.
---

<script setup>
    import Default from './PubSelect/Default.vue';
    import Size from './PubSelect/Size.vue';
    import Disabled from './PubSelect/Disabled.vue';
    import Underlined from './PubSelect/Underlined.vue';
    import HelperText from './PubSelect/HelperText.vue';
    import Validation from './PubSelect/Validation.vue';
    import StylingSelect from './PubSelect/StylingSelect.vue';
</script>

# PubSelect

This is a select component. It is used to display a select field to select an option from a list of options.

## Default Usage

<demo-container>
    <Default />
</demo-container>

<<< @/components/PubSelect/Default.vue

## Sizes

### Prop - `size` Usage

The `size` prop is used to set the size of the select field. It can be one of the following values: `'sm'`, `'md'`, `'lg'`, `'xl'`.

<demo-container flex-type='col' class='items-start'>
    <Size />
</demo-container>

<<< @/components/PubSelect/Size.vue

## Disabled

### Prop - `disabled` Usage

The `disabled` prop is used to disable the select field. It can be a boolean value.

<demo-container>
    <Disabled />
</demo-container>

<<< @/components/PubSelect/Disabled.vue

## Underlined

### Prop - `underlined` Usage

The `underlined` prop is used to display the select field with an underline. It can be a boolean value.

<demo-container>
    <Underlined />
</demo-container>

<<< @/components/PubSelect/Underlined.vue

## Helper text

### Slot - `helperText` Usage

The `helperText` slot is used to display helper text below the select field. It can be a string value.

<demo-container flex-type='col' class='items-start'>
    <HelperText/>
</demo-container>

<<< @/components/PubSelect/HelperText.vue

## Validation

### Prop - `validationStatus` and Slot - `validationMessage` Usage

The `validationStatus` prop is used to set the visual validation state of the select field. It can be one of the following values: `error`, `success`.

The `validationMessage` slot is used to display a custom validation message. It can be a string value.

<demo-container flex-type='col' class='items-start'>
    <Validation />
</demo-container>

<<< @/components/PubSelect/Validation.vue

## Styling select

### Prop - `class`, `wrapperClass`, `labelClass` Usage

The `class`, `wrapperClass`, and `labelClass` props are used to add additional classes to the wrapper element, outer wrapper, and label element, respectively.

<demo-container>
    <StylingSelect/>
</demo-container>

<<< @/components/PubSelect/StylingSelect.vue

## Reference

### Properties

| Name | Type | Default | Description | Options |
| ---- | ---- | ------- | ----------- | ------- |
| class | String | '' | Additional classes for the wrapper element. | |
| wrapperClass | String | '' | Additional classes for the outer wrapper. | |
| options | Array | [] | Options for the select field. Each option has `name` and `value`. | |
| disabled | Boolean | false | Disables the select field. | |
| label | String | '' | Label displayed above the select field. | |
| labelClass | String | '' | Additional classes for the label element. | |
| placeholder | String | 'Please select one' | Placeholder shown as the first option. | |
| size | String | 'md' | Size of the select field. | 'sm', 'md', 'lg', 'xl' |
| validationStatus | String | undefined | Visual validation state of the select field. | 'Error', 'Success' |
| underline | Boolean | false | Whether the select field is underlined. | |

### Slots

| Name | Description |
| ---- | ----------- |
| validationMessage | Slot for custom validation message. |
| helper | Slot for helper text displayed below the select field. |

