[![](https://data.jsdelivr.com/v1/package/npm/@reliutg/buzz-notify/badge)](https://www.jsdelivr.com/package/npm/@reliutg/buzz-notify)

# Notify [![GitHub issues](https://img.shields.io/github/issues/eliutgon/buzz-notify)](https://github.com/eliutgon/buzz-notify/issues) [![GitHub forks](https://img.shields.io/github/forks/eliutgon/buzz-notify)](https://github.com/eliutgon/buzz-notify/network) [![GitHub stars](https://img.shields.io/github/stars/eliutgon/buzz-notify)](https://github.com/eliutgon/buzz-notify/stargazers)



Small notifications library

## New minor version 1.6.0. Introduces breaking changes!
Now the styles come separately and you will have to use a new import:

```js
import Notify from '@reliutg/buzz-notify'
import '@reliutg/buzz-notify/css/index.css'
```


## Demo

https://buzz-notify-henna.vercel.app

## Install

### CDN
https://cdn.jsdelivr.net/npm/@reliutg/buzz-notify/index.min.js

or

### USAGE no npm install needed!

```html
<script type="module">
  import Notify from "https://cdn.skypack.dev/@reliutg/buzz-notify";
</script>
```

### How to use

In myawesomesite.html:

```html
<div id="notify"></div>
```

In myscript.js:

```javascript
Notify({ title: "My notification" });
```

### Styles

`type` property require a string. Can be `'success', 'danger', 'warning'`

```javascript
Notify({ title: "My notification", type: "success" });
```

### Position

`position` property requires a string with 2 keywords for vertical and horizontal postion.

Format: `<vertical> <horizontal>`.

- Vertical options: `top`, `bottom`
- Horizontal options: `left`, `center`, `right`

Default is "top right".

### API

```javascript
Notify({
  // (optional)
  // Can be 'success', 'danger', 'warning'
  // Overrides default/provided type
  type: "success",

  // (optional)
  // Notification position
  // Overrides default/provided duration
  position: "top right",

  // (optional)
  // Title
  title: "This is title",

  // (optional)
  // Content
  html: "This is <b> content </b>",

  // (optional)
  // Set in ms (milliseconds) If the duration is a negative number, the notification will not be removed.
  duration: 2000,
});
```
