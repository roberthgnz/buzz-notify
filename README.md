[![](https://img.shields.io/jsdelivr/npm/hm/@reliutg/buzz-notify)](https://www.jsdelivr.com/package/npm/@reliutg/buzz-notify) [![GitHub issues](https://img.shields.io/github/issues/eliutgon/buzz-notify)](https://github.com/eliutgon/buzz-notify/issues) [![GitHub forks](https://img.shields.io/github/forks/eliutgon/buzz-notify)](https://github.com/eliutgon/buzz-notify/network) [![GitHub stars](https://img.shields.io/github/stars/eliutgon/buzz-notify)](https://github.com/eliutgon/buzz-notify/stargazers)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# BuzzNotify

Small and Clean JavaScript Toast Notifications

## New version introduces breaking changes!

Now the styles come separately and you will have to use a new import:

```js
// >= 1.6.0
import Notify from '@reliutg/buzz-notify';
import '@reliutg/buzz-notify/dist/buzz-notify.css';
```

## Features

✨ Beautiful and easy to use
✨ Lightweight
❤️ Strongly typed

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

Change the default notification type

```javascript
Notify({ title: 'My notification', type: 'danger' });
```

Determine the timeout in milliseconds. Default: 3000ms. If the duration is a negative number, the notification will not be removed.

```javascript
Notify({ title: 'My notification', duration: 5000 });
```

Change the position of the toast message. Can be ‘top left’, ‘top right’, ‘top center’, ‘center start’, ‘center’, ‘center end’, ‘bottom left’, ‘bottom center’, or ‘bottom right’. Default: ‘top right’.

```javascript
Notify({ title: 'My notification', position: 'bottom center' });
```

Execute a callback function when the toast message is dismissed.

```javascript
Notify({ title: 'My notification' }, () => {
  console.log('Notification closed');
});
```

### Usage with Vue

[Try live demo](https://codi.link/PGRpdiBpZD0iYXBwIj48L2Rpdj4=%7CQGltcG9ydCAnaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvQHJlbGl1dGcvYnV6ei1ub3RpZnkvZGlzdC9idXp6LW5vdGlmeS5jc3Mn%7CaW1wb3J0ICogYXMgVnVlIGZyb20gJ2h0dHBzOi8vY2RuLnNreXBhY2suZGV2L3Z1ZUBuZXh0L2Rpc3QvdnVlLmVzbS1icm93c2VyLnByb2QuanMnOwppbXBvcnQgQnV6ek5vdGlmeSBmcm9tICdodHRwczovL2Nkbi5za3lwYWNrLmRldi9AcmVsaXV0Zy9idXp6LW5vdGlmeSc7Cgpjb25zdCBBcHAgPSB7CiAgdGVtcGxhdGU6IGAKICAgIDxidXR0b24gQGNsaWNrPSJzaG93Tm90aWZpY2F0aW9uKCdzdWNjZXNzJywgJ3RvcCBjZW50ZXInKSI+U3VjY2VzczwvYnV0dG9uPgogICAgPGJ1dHRvbiBAY2xpY2s9InNob3dOb3RpZmljYXRpb24oJ3dhcm5pbmcnLCAnYm90dG9tIGNlbnRlcicpIj5XYXJuaW5nPC9idXR0b24+CiAgICA8YnV0dG9uIEBjbGljaz0ic2hvd05vdGlmaWNhdGlvbignZGFuZ2VyJywgJ2JvdHRvbSBsZWZ0JykiPkRhbmdlcjwvYnV0dG9uPgogICAgPGRpdiBpZD0ibm90aWZ5Ij48L2Rpdj4KICBgLAogIGRhdGEoKSB7CiAgICByZXR1cm4gewogICAgICBtZXNzYWdlOiAnT2ggaGkgZnJvbSB0aGUgY29tcG9uZW50JywKICAgIH07CiAgfSwKICBtb3VudGVkKCkgewogICAgQnV6ek5vdGlmeSh7CiAgICAgIHRpdGxlOiAnTW91bnRlZC4uLicsCiAgICAgIGR1cmF0aW9uOiAtMQogICAgfSkKICB9LAogIG1ldGhvZHM6IHsKICAgIHNob3dOb3RpZmljYXRpb24odHlwZSwgcG9zaXRpb24pIHsKICAgICAgQnV6ek5vdGlmeSh7CiAgICAgICAgdGl0bGU6IHR5cGUsCiAgICAgICAgdHlwZSwKICAgICAgICBwb3NpdGlvbgogICAgICB9KQogICAgfQogIH0KfTsKClZ1ZS5jcmVhdGVBcHAoQXBwKS5tb3VudCgnI2FwcCcpOw==)

### Usage with React

[Try live demo](https://codesandbox.io/s/rmg37)

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
````

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

### Based on

https://github.com/euvl/vue-notification

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://cutt.ly/dmxCq0G"><img src="https://avatars.githubusercontent.com/u/52201020?v=4?s=100" width="100px;" alt=""/><br /><sub><b>krau5</b></sub></a><br /><a href="https://github.com/eliutgon/buzz-notify/commits?author=Krausso" title="Code">💻</a> <a href="#maintenance-Krausso" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
