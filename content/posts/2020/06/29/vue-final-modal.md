---
title: Vue final modal
description: Simple to use, highly customizable, mobile-friendly Vue.js 2.0+ modal with SSR support.
tags: ['vue', 'vue-final-modal', 'dialog', 'modal', 'vue-modal', 'vue-dialog']
date: '2020/06/29'
---

## Introduction

Simple to use, highly customizable, mobile-friendly Vue.js 2.0+ modal with SSR support.

`vue-final-modal` has no predefined styles.
There are only three classes inside `vue-final-modal`, including `.vfm__containter`, `.vfm__content`, `.vfm__overlay`. These classes have only the necessary styles and you can still easily override these styles through these props: `class`, `content-class`, `overlay-class`

Here is the simplified template of entire vue-final-modal

```html
<div class="vfm__overlay">
<div class="vfm__container">
  <div class="vfm__content">
    <slot />
  </div>
</div>
```

## Demo

https://hunterliu1003.github.io/vue-final-modal/

## Install

NPM:

```bash
npm install vue-final-modal --save
```

Yarn: 

```bash
yarn add vue-final-modal
```

## How to use

- template:

```html
<button @click="showModal = true">Show modal</button>

<vue-final-modal v-model="showModal">
  <button @click="showModal = false">close modal</button>
</vue-final-modal>
```

- script:

```js
import VueFinalModal from 'vue-final-modal'

export default {
  components: {
    VueFinalModal,
  },
  data: () => ({
    showModal: false
  })
}
```

## Props

| Name | Type | Required | Default | Description |
| :---  | :---  | ---      | ---     | :---         |
| class | [String, Object, Array] | --- | '' | custom class names for Modal container element |
| contentClass | [String, Object, Array] | --- | '' | custom class names for Modal content element |
| lockScroll | Boolean | --- | true | whether scroll of body is disabled while Dialog is displayed |
| hideOverlay | Boolean | --- | false | Hides the display of the overlay. |
| clickToClose | Boolean | --- | true | Clicking outside of the element will not close Modal. |
| preventClick | Boolean | --- | false | The click event will not be blocked by overlay |
| overlayClass | String | --- | '' | Add classes to the overlay element. |
| attach | any | --- | 'body' | Specifies which DOM element that this component should detach to. Set `false` will disabled this feature. String can be any valid querySelector and Object can be any valid Node.  This will attach to the <body> element by default. |

## Slots

| Name         | Description |
| :---          | :--- |
| content-before  | inject an element before `content` slot |
| content  | inject an element has class `vfm__content` by default |
| -  | content of Modal inside slot `content` |
| content-after  | inject an element after `content` slot |

- template structure:

```html
<div class="vfm__container">
  <slot name="content-before" />
  <slot name="content">
    <div class="vfm__content">
      <slot />
    </div>
  </slot>
  <slot name="content-after" />
</div>
```

## CDN

- https://www.jsdelivr.com/package/npm/vue-final-modal

> UMD builds can be used directly in the browser via a `<script>` tag. 

```html
<script src="https://cdn.jsdelivr.net/npm/vue-final-modal@0.3.0/lib/vue-final-modal.umd.min.js"></script>
```

## Codepen example

<client-only>
    <p class="codepen" data-height="404" data-theme-id="dark" data-default-tab="html,result" data-user="hunterliu1003" data-slug-hash="PoZmbPm" style="height: 404px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vue Final Modal">
    <span>See the Pen <a href="https://codepen.io/hunterliu1003/pen/PoZmbPm">
    Vue Final Modal</a> by Hunter (<a href="https://codepen.io/hunterliu1003">@hunterliu1003</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</client-only>


