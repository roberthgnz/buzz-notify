[![](https://data.jsdelivr.com/v1/package/npm/@reliutg/buzz-notify/badge)](https://www.jsdelivr.com/package/npm/@reliutg/buzz-notify)

[![GitHub issues](https://img.shields.io/github/issues/eliutgon/buzz-notify)](https://github.com/eliutgon/buzz-notify/issues) [![GitHub forks](https://img.shields.io/github/forks/eliutgon/buzz-notify)](https://github.com/eliutgon/buzz-notify/network) [![GitHub stars](https://img.shields.io/github/stars/eliutgon/buzz-notify)](https://github.com/eliutgon/buzz-notify/stargazers)

# BuzzNotify

Small and Clean JavaScript Toast Notifications

## New version introduces breaking changes!

Now the styles come separately and you will have to use a new import:

```js
// >= 1.6.0
import Notify from '@reliutg/buzz-notify';
import '@reliutg/buzz-notify/dist/buzz-notify.css';
```

## Demo

https://buzz-notify-docs.vercel.app

## Install

```bash
npm install @reliutg/buzz-notify
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@reliutg/buzz-notify/dist/buzz-notify.css" />
<script src="https://unpkg.com/@reliutg/buzz-notify"></script>
```

### ES6 Modules

```js
import Notify from '@reliutg/buzz-notify';
import '@reliutg/buzz-notify/dist/buzz-notify.css';
```

or

### Skypack no npm install needed!

```html
<script type="module">
  import Notify from 'https://cdn.skypack.dev/@reliutg/buzz-notify';
  import 'https://cdn.skypack.dev/@reliutg/buzz-notify/dist/buzz-notify.css';
</script>
```

## How to use

In `index.html`:

```html
<div id="notify"></div>
```

In `index.js`:

```javascript
Notify({ title: 'My notification' });
```

## Customization

### Customize the styles

```css
:root {
  --bzn-trans-cubic-bezier: cubic-bezier(0.215, 0.61, 0.455, 1);
  --bzn-trans-duration: 0.4s;
  --bzn-color-success: #155724;
  --bzn-background-color-success: #d4edda;
  --bzn-border-color-success: #c3e6cb;
  --bzn-color-danger: #721c24;
  --bzn-background-color-danger: #f8d7da;
  --bzn-border-color-danger: #f5c6cb;
  --bzn-color-warning: #856404;
  --bzn-background-color-warning: #fff3cd;
  --bzn-border-color-warning: #ffeeba;
}
```

### Customize icons

```js
// You can change all or just one type of icon
// inline svg and emojis are supported :)
const myIcons = {
  success: '🎉',
  danger: '💣',
  warning: '⚠️',
};

Notify({ title: 'My notification', type: 'success', config: { icons: myIcons } });
```

## Options

```javascript
Notify({
  /**
   * Title of the notification
   */
  title: string;
  /**
   * Sets the HTML markup contained within the notification.
   */
  html?: string;
  /**
   * Sets the type of the notification.
   * @defaultvalue "success"
   */
  type?: Type;
  /**
   * Sets the position of the notification.
   */
  position?: Position;
  /**
   * Auto close notification. Set in ms (milliseconds). If the duration is a negative number, the notification will not be removed.
   */
  duration?: number;
  /**
   * Sets the transition effect.
   * @defaultvalue "fade"
   */
  transition?: Transition;
  /**
   * Sets the configuration of the notification.
   */
  config?: {
    /**
     * Override the default icons.
     */
    icons: Icons;
  } | null;
});
```
