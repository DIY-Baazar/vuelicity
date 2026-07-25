---
title: PubTextarea
description: Documentation for the PubTextarea component.
---

<script lang="ts" setup>
    import DefaultTextarea from './PubTextarea/DefaultTextarea.vue';
    import TextareaSize from './PubTextarea/TextareaSize.vue';
    import DisabledTextarea from './PubTextarea/DisabledTextarea.vue';
    import ReadonlyTextarea from './PubTextarea/ReadonlyTextarea.vue';
    import TextareaValidation from './PubTextarea/TextareaValidation.vue';
    import CommentBox from './PubTextarea/CommentBox.vue';
    import NativeConst from './PubTextarea/NativeConst.vue';
</script>

# PubTextarea

This is a textarea component. It is used to display a textarea element for comment, message, wysiwyg editor, and more.

## Default Usage

<demo-container>
    <DefaultTextarea />
</demo-container>

<<< @/components/PubTextarea/DefaultTextarea.vue

## Sizes

### Prop - `size` Usage

The `size` prop is used to set the size of the textarea. It can be one of the following values: `'sm'`, `'md'`, `'lg'`, `'xl'`.

<demo-container flex-type='col' class='items-start'>
    <TextareaSize />
</demo-container>

<<< @/components/PubTextarea/TextareaSize.vue

## Disabled

### Prop - `disabled` Usage

The `disabled` prop is used to disable the textarea. It can be a boolean value.

<demo-container>
    <DisabledTextarea />
</demo-container>

<<< @/components/PubTextarea/DisabledTextarea.vue

## Readonly

### Prop - `readonly` Usage

The `readonly` prop is used to make the textarea readonly. It can be a boolean value.

<demo-container>
    <ReadonlyTextarea />
</demo-container>

<<< @/components/PubTextarea/ReadonlyTextarea.vue

## Validation

### Prop - `validationStatus` and Slot - `validationMessage` Usage

The `validationStatus` prop is used to set the visual validation state of the textarea. It can be one of the following values: `error`, `success`.

The `validationMessage` slot is used to display a custom validation message. It can be a string value.

<demo-container flex-type='col' class='items-start'>
    <TextareaValidation />
</demo-container>

<<< @/components/PubTextarea/TextareaValidation.vue

## Native Constraints 

The `required`, `minlength`, and `maxlength` attributes are supported natively on the textarea element.

<demo-container>
    <NativeConst />
</demo-container>

<<< @/components/PubTextarea/NativeConst.vue

## Comment box

### Slot - `footer` Usage

The `footer` slot is used to render actions or metadata below the textarea content — commonly used for submit buttons in comment forms.

<demo-container flex-type='col' class='items-start'>
    <CommentBox />
</demo-container>

<<< @/components/PubTextarea/CommentBox.vue

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
| footer            | Slot for footer content.                           |
