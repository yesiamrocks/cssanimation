# CA-Scroll.js Developer Guide

**`ca-scroll.js`** is a lightweight JavaScript plugin that brings CSS animations to life as elements enter the viewport. It's designed for effortless integration, allowing you to create engaging, dynamic web experiences with simple HTML attributes and powerful customization.

## Key Features

- Simple Setup: Apply animations on scroll with minimal HTML attributes.
- Global & Element Control: Configure default behavior with `window.__CA_SETTINGS` (offset, mobile, live) and override on specific elements (`ca-scroll-offset, - - -  ca-delay, ca-duration`).
- Repeatable Animations: Control if animations re-trigger (`ca-scroll-repeat="true"`).
- Flexible Animation Classes: Use **cssanimation's** `ca__fx-` classes or your custom `@keyframe`s via `data-ca-animation-class`.
- Toggle States: Define `data-ca-toggle-class` for custom initial and reset styles when out of view.
- Dynamic Content Ready: Re-initialize with `window.initCAScroll()` for new DOM elements.
- Debug Mode: `window.__CA_DEBUG = true` provides detailed console logging.

## 📚 Table of Contents

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Global Settings](#global-settings-windowca_settings)
- [Element Data Attributes](#element-data-attributes)
- [CSS Requirements & Custom Animations](#css-requirements--custom-animations)
- [Re-initialization](#re-initialization)
- [Debugging](#debugging)

## Installation

### A. Directly in your HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Your head content -->
  </head>
  <body>
    <!-- Your page content -->

    <!-- Your ca-scroll.js code goes here -->
    <script>
      (function () {
        // ... all the ca-scroll.js code ...
      })();
    </script>
  </body>
</html>
```

### B. External JavaScript File

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Your head content -->
  </head>
  <body>
    <!-- Your page content -->

    <script src="path/to/your/ca-scroll.js"></script>
  </body>
</html>
```

> **Note**: If using `cssanimation.min.css`, include it in the `<head>`:

```html
<link
  href="https://cdn.jsdelivr.net/npm/@hellouxpavel/cssanimation@latest/dist/cssanimation.min.css"
  rel="stylesheet"
/>
```

## Basic Usage

To make an element animate on scroll:

```html
<div ca-scroll class="cssanimation ca__fx-fadeInLeft">Hello, I will fade in from the left!</div>
```

- `ca-scroll`: Enables scroll animation observation.
- `cssanimation`: Ensures animation play/pause control.
- `ca__fx-fadeInLeft`: Sample animation class.

## Global Settings (`window.__CA_SETTINGS`)

```html
<script>
  window.__CA_SETTINGS = {
    offset: 100, // Default scroll offset
    mobile: false, // Disable on mobile if false
    live: true, // Toggle all scroll animations
  };
</script>
<script src="path/to/your/ca-scroll.js"></script>
```

## Element Data Attributes

### `ca-scroll`

Marks element as scroll-animatable.

```html
<div ca-scroll></div>
```

### `ca-scroll-offset`

Custom offset in pixels.

```html
<div ca-scroll ca-scroll-offset="200" class="cssanimation ca__fx-fadeIn">Animates when 200px from bottom.</div>
```

### `ca-scroll-repeat`

Repeats animation on each scroll into view.

```html
<div ca-scroll ca-scroll-repeat="true" class="cssanimation ca__fx-shakeX">I will shake every time!</div>
```

### `ca-delay`

Delays animation start.

```html
<div ca-scroll ca-delay="0.8s" class="cssanimation ca__fx-bounceIn">I will bounce in after 0.8s.</div>
```

### `ca-duration`

Sets animation duration.

```html
<div ca-scroll ca-duration="2s" class="cssanimation ca__fx-pulse">I will pulse for 2 seconds.</div>
```

### `data-ca-animation-class`

Use custom animation class:

```css
.my-custom-slide-up {
  animation: slideUpAnimation 1s ease-out forwards;
}
@keyframes slideUpAnimation {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

```html
<div ca-scroll data-ca-animation-class="my-custom-slide-up">I use a custom animation.</div>
```

### `data-ca-toggle-class`

Applies/removes class based on visibility:

```css
.initial-invisible-and-shifted {
  opacity: 0;
  transform: translateX(-100px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}
```

```html
<div
  ca-scroll
  ca-scroll-repeat="true"
  data-ca-animation-class="ca__fx-fadeInRight"
  data-ca-toggle-class="initial-invisible-and-shifted"
>
  I start hidden and slide in.
</div>
```

## CSS Requirements & Custom Animations

- All `[ca-scroll]` elements are initially `visibility: hidden`.
- `.ca-animate`: Applied when in view → sets `visibility: visible`, `animation-play-state: running`.
- `cssanimation` class is required for pause/resume handling.

## Re-initialization

If new elements are added dynamically:

```js
window.initCAScroll();
```

This rebinds the scroll observers.

## Debugging

To enable verbose debug output:

```html
<script>
  window.__CA_DEBUG = true;
</script>
<script src="path/to/your/ca-scroll.js"></script>
```

Check the browser console (`F12`) for logs.

## Developer Tips for Better Animations

- Prioritize Performance: Use `transform` and `opacity` for smooth animations; avoid animating layout properties.
- Stagger with Delays: Apply `ca-delay` for sequential, visually appealing element entrances.
- Strategic Offset: Fine-tune `ca-scroll-offset` to make animations appear at the most natural time.
- Smooth Resets: Utilize `data-ca-toggle-class` with `ca-scroll-repeat` for elegant "out-of-view" transitions.
- Cross-Device Testing: Always check responsiveness and mobile performance, using the **mobile** setting if needed.
- Leverage Debugging: Use `window.__CA_DEBUG` to quickly understand and troubleshoot animation behavior.
