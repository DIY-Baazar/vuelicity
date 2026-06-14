---
title: PubTextarea
description: Documentation for the PubTextarea component.
---

<script setup>
    import Default from './PubTextarea/Default.vue';
    import Size from './PubTextarea/Size.vue';
    import Disabled from './PubTextarea/Disabled.vue';
    import Readonly from './PubTextarea/Readonly.vue';
    import Validation from './PubTextarea/Validation.vue';
</script>

# PubTextarea

This is a textarea component. It is used to display a textarea element for comment, message, wysiwyg editor, and more.

## Default Usage

<demo-container>
    <Default />
</demo-container>

<<< @/form/PubTextarea/Default.vue

## Sizes

### Prop - `size` Usage

The `size` prop is used to set the size of the textarea. It can be one of the following values: `'sm'`, `'md'`, `'lg'`, `'xl'`.

<demo-container flex-type='col' class='items-start'>
    <Size />
</demo-container>

<<< @/form/PubTextarea/Size.vue

## Disabled

### Prop - `disabled` Usage

The `disabled` prop is used to disable the textarea. It can be a boolean value.

<demo-container>
    <Disabled />
</demo-container>

<<< @/form/PubTextarea/Disabled.vue

## Readonly

### Prop - `readonly` Usage

The `readonly` prop is used to make the textarea readonly. It can be a boolean value.

<demo-container>
    <Readonly />
</demo-container>

<<< @/form/PubTextarea/Readonly.vue

## Validation

### Prop - `validationStatus` and Slot - `validationMessage` Usage

The `validationStatus` prop is used to set the visual validation state of the textarea. It can be one of the following values: `error`, `success`.

The `validationMessage` slot is used to display a custom validation message. It can be a string value.

<demo-container flex-type='col' class='items-start'>
    <Validation />
</demo-container>

<<< @/form/PubTextarea/Validation.vue

## Reference

### Properties

| Name         | Type    | Default | Description                                                | Options                |
| ------------ | ------- | ------- | ---------------------------------------------------------- | ---------------------- |
| autocomplete | String  | 'off'   | The HTML autocomplete attribute for the textarea element.  |                        |
| class        | String  | ''      | Additional classes for the wrapper element.                |                        |
| disabled     | Boolean | false   | Disables the textarea when true.                           |                        |
| inputClass   | String  | ''      | Additional classes for the textarea element.               |                        |
| label        | String  | ''      | The text label displayed above the textarea.               |                        |
| labelClass   | String  | ''      | Additional classes for the label element.                  |                        |
| placeholder  | String  | ''      | The placeholder text displayed when the textarea is empty. |                        |
| readonly     | Boolean | false   | Makes the textarea readonly when true.                     |                        |
| required     | Boolean | false   | Marks the textarea as required.                            |                        |
| size         | String  | 'md'    | The size of the textarea.                                  | 'sm', 'md', 'lg', 'xl' |

### Slots

| Name              | Description                                        |
| ----------------- | -------------------------------------------------- |
| validationMessage | Slot for custom validation message.                |
| helper            | Slot for helper text displayed below the textarea. |
