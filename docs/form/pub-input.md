---
title: PubInput
description: Documentation for PubInput.
---

<script setup>
    import Default from './PubInput/Default.vue';
    import Size from './PubInput/Size.vue';
    import Disabled from './PubInput/Disabled.vue';
    import Required from './PubInput/Required.vue';
    import HelperText from './PubInput/HelperText.vue';
    import InputGroup from './PubInput/InputGroup.vue';
    import SearchInput from './PubInput/SearchInput.vue';
    import Validation from './PubInput/Validation.vue';
    import DropdownInput from './PubInput/DropdownInput.vue';
    import StylingInput from './PubInput/StylingInput.vue';
</script>

# PubInput

This is a input component. It is used to display an input field and supports various input types, such as text, password, email, number, and more.

## Default Usage

<demo-container>
    <Default />
</demo-container>

<<< @/form/PubInput/Default.vue

## Sizes

### Prop - `size` Usage

The `size` prop is used to set the size of the input field. It can be one of the following values: `sm`, `md`, `lg` or `xl`. The default value is `md`.

<demo-container flex-type='col' class='items-start'>
    <Size />
</demo-container>

<<< @/form/PubInput/Size.vue

## Disabled

### Prop - `disabled` Usage

The `disabled` prop is used to disable the input field. It can be a boolean value.

<demo-container>
    <Disabled />
</demo-container>

## Required

### Prop - `required` Usage

The `required` prop is used to make the input field required. It can be a boolean value.

<demo-container>
    <Required />
</demo-container>

<<< @/form/PubInput/Required.vue

## Validation

### Prop - `validationStatus` Usage

The `validationStatus` prop is used to set the visual validation state of the input. It can be one of the following values: `error`, `success`.

<demo-container flex-type='col' class='items-start'>
    <Validation />
</demo-container>

<<< @/form/PubInput/Validation.vue

## Input group

### Slot - `prepend` and `append` Usage

The `prepend` and `append` slots are used to display additional content before and after the input field.

<demo-container flex-type='col' class='items-start'>
    <InputGroup/>
</demo-container>

<<< @/form/PubInput/InputGroup.vue

## Helper text

### Slot - `helperText` Usage

The `helperText` slot is used to display helper text below the input field. It can be a string value.

<demo-container flex-type='col' class='items-start'>
    <HelperText/>
</demo-container>

<<< @/form/PubInput/HelperText.vue

## Styling input

<demo-container>
    <StylingInput/>
</demo-container>

<<< @/form/PubInput/StylingInput.vue

## Search input

<demo-container flex-type='col' class='items-start'>
    <SearchInput/>
</demo-container>

<<< @/form/PubInput/SearchInput.vue

## Dropdown input

<demo-container>
    <DropdownInput/>
</demo-container>

<<< @/form/PubInput/DropdownInput.vue

## Reference

### Properties

| Name             | Type    | Default   | Description                                       | Options                                                                                                                                                                                                                                                     |
| ---------------- | ------- | --------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autocomplete     | String  | `'off'`   | Controls the autocomplete attribute of the input. | `'on'`, `'off'`, `'email'`, `'tel'`, `'name'`, `'username'`, `'current-password'`, `'country'`, `'postal-code'`, `'language'`, `'bday'`                                                                                                                     |
| class            | String  | `''`      | Additional classes for the wrapper element.       |                                                                                                                                                                                                                                                             |
| disabled         | Boolean | false     | Disables the input field when true.               |                                                                                                                                                                                                                                                             |
| inputClass       | String  | `''`      | Additional classes for the input element.         |                                                                                                                                                                                                                                                             |
| label            | String  | `''`      | Text label displayed above the input.             |                                                                                                                                                                                                                                                             |
| labelClass       | String  | `''`      | Additional classes for the label element.         |                                                                                                                                                                                                                                                             |
| required         | Boolean | false     | Marks the input as required.                      |                                                                                                                                                                                                                                                             |
| size             | String  | `'md'`    | Controls the size of the input.                   | `'sm'`, `'md'`, `'lg'`, `'xl'`                                                                                                                                                                                                                              |
| type             | String  | `'text'`  | HTML input type attribute.                        | `'button'`, `'checkbox'`, `'color'`, `'date'`, `'datetime-local'`, `'email'`, `'file'`, `'hidden'`, `'image'`, `'month'`, `'number'`, `'password'`, `'radio'`, `'range'`, `'reset'`, `'search'`, `'submit'`, `'tel'`, `'text'`, `'time'`, `'url'`, `'week'` |
| validationStatus | String  | undefined | Visual validation state of the input.             | `'Error'`, `'Success'`                                                                                                                                                                                                                                      |
| wrapperClass     | String  | `''`      | Additional classes for the outer wrapper.         |                                                                                                                                                                                                                                                             |
| prependClass     | String  | `''`      | Additional classes for the prepend container element. |                                                                                                                                                                                                                                                             |
| appendClass      | String  | `''`      | Additional classes for the append container element. |                                                                                                                                                                                                                                                             |

### Slots

| Name              | Description                                     |
| ----------------- | ----------------------------------------------- |
| prepend           | Content placed before the input element.        |
| append            | Content placed after the input element.         |
| validationMessage | Slot for custom validation message.             |
| helper            | Slot for helper text displayed below the input. |
