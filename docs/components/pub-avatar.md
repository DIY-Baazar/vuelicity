---
title: PubAvatar
description: Documentation for the PubAvatar component.
---

<script setup>
    import DefaultAvatar from './PubAvatar/DefaultAvatar.vue';
    import BorderedAvatar from './PubAvatar/BorderedAvatar.vue';
    import PlaceholderIcon from './PubAvatar/PlaceholderIcon.vue';
    import PlaceholderInitials from './PubAvatar/PlaceholderInitials.vue';
    import AltPlaceholder from './PubAvatar/AltPlaceholder.vue';
    import DotStatus from './PubAvatar/DotStatus.vue';
    import DotStatusPos from './PubAvatar/DotStatusPos.vue';
    import SizeAvatar from './PubAvatar/SizeAvatar.vue';
    import StackedAvatar from './PubAvatar/StackedAvatar.vue';
    import AltText from './PubAvatar/AltText.vue';
</script>

# PubAvatar

This is an avatar component that can be used to display a user's profile picture. It provides various options for customizing the avatar, such as adding a border, shadow, and rounded corners.

## Default avatar

<demo-container flex-type='col'>
    <DefaultAvatar />
</demo-container>

<<< @/components/PubAvatar/DefaultAvatar.vue

## Bordered avatar

### Prop - `bordered` Usage

The `bordered` prop can be used to add a border to the avatar.

<demo-container flex-type='col'>
    <BorderedAvatar />
</demo-container>

<<< @/components/PubAvatar/BorderedAvatar.vue

## Placeholder icon

<demo-container flex-type='col'>
    <PlaceholderIcon />
</demo-container>

<<< @/components/PubAvatar/PlaceholderIcon.vue

## Placeholder initials

### Prop - `initials` Usage

The `initials` prop can be used to display the initials of the user.

<demo-container flex-type='col'>
    <PlaceholderInitials />
</demo-container>

<<< @/components/PubAvatar/PlaceholderInitials.vue

## Alternate placeholder icon

### Slot - `placeholder` Usage

The `placeholder` slot can be used to display a custom placeholder icon.

<demo-container flex-type='col'>
    <AltPlaceholder />
</demo-container>

<<< @/components/PubAvatar/AltPlaceholder.vue

## Dot indicator

### Prop - `status` Usage

<demo-container flex-type='col'>
    <DotStatus />
</demo-container>

<<< @/components/PubAvatar/DotStatus.vue

## Dot indicator position

### Prop - `statusPosition` Usage

The `statusPosition` prop can be used to adjust the position of the dot indicator.

<demo-container flex-type='col'>
    <DotStatusPos />
</demo-container>

<<< @/components/PubAvatar/DotStatusPos.vue

## Sizes

### Prop - `size` Usage

The `size` prop can be used to adjust the size of the avatar.

<demo-container flex-type='col'>
    <SizeAvatar />
</demo-container>

<<< @/components/PubAvatar/SizeAvatar.vue

## Stacked avatars

### Prop - `stacked` Usage

The `stacked` prop can be used to stack multiple avatars together.

<demo-container flex-type='col'>
    <StackedAvatar />
</demo-container>

<<< @/components/PubAvatar/StackedAvatar.vue

## Alternative text

### Prop - `alt` Usage

The `alt` prop can be used to provide alternative text for the avatar.

<demo-container flex-type='col'>
    <AltText />
</demo-container>

<<< @/components/PubAvatar/AltText.vue

## Reference

### PubAvatar

#### Properties

| Name           | Type    | Default          | Description                                    | Options                                                        |
| :------------- | :------ | :--------------- | :--------------------------------------------- | :------------------------------------------------------------- |
| src            | String  | `''`             | The source URL for the avatar image.           |                                                                |
| alt            | String  | `''`             | Alternative text for the avatar image.         |                                                                |
| size           | String  | `'md'`           | The size of the avatar.                        | `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'`                         |
| bordered       | Boolean | `false`          | Whether to add a border to the avatar.         |                                                                |
| rounded        | Boolean | `false`          | Whether to add rounded corners to the avatar.  |                                                                |
| initials       | String  | `''`             | Initials to display as a placeholder.          |                                                                |
| status         | String  | `''`             | The status indicator theme or state.           | `'online'`, `'offline'`, `'busy'`, `'away'`                    |
| statusPosition | String  | `'bottom-right'` | The position of the status indicator.          | `'top-right'`, `'top-left'`, `'bottom-right'`, `'bottom-left'` |
| stacked        | Boolean | `false`          | Whether the avatar is part of a stacked group. |                                                                |
| class          | String  | `''`             | Additional CSS classes to apply.               |                                                                |

#### Slots

| Name        | Description                                      |
| ----------- | ------------------------------------------------ |
| placeholder | Custom content to display as a placeholder icon. |

### PubAvatarStack

#### Slots

| Name    | Description                      |
| ------- | -------------------------------- |
| default | Slot for `PubAvatar` components. |

### PubAvatarStackCounter

#### Properties

| Name  | Type   | Default | Description                              | Options |
| :---- | :----- | :------ | :--------------------------------------- | :------ |
| total | Number | `0`     | The total number of items.               |         |
| href  | String | `''`    | The href attribute for the counter link. |         |
