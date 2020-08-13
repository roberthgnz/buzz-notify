# Notify [![GitHub issues](https://img.shields.io/github/issues/buzz-js/buzz-notify)](https://github.com/buzz-js/buzz-notify/issues) [![GitHub forks](https://img.shields.io/github/forks/buzz-js/buzz-notify)](https://github.com/buzz-js/buzz-notify/network) [![GitHub stars](https://img.shields.io/github/stars/buzz-js/buzz-notify)](https://github.com/buzz-js/buzz-notify/stargazers)

Small notifications library

### Demo
[https://buzz-js.github.io/buzz-notify/](https://buzz-js.github.io/buzz-notify/)

### Install
[https://cdn.jsdelivr.net/npm/@reliutg/buzz-notify/index.min.js](https://cdn.jsdelivr.net/npm/@reliutg/buzz-notify/index.min.js)

### How to use

In myawesomesite.html:
```html
<div id="notify"></div>
```

In myscript.js:
```javascript
Notify({title: 'My notification'});
```
### Styles
`type` property require a string. Can be `'success', 'danger', 'warning'`

```javascript
Notify({title: 'My notification', type: 'success'});
```

### Position

`position` property requires a string with 2 keywords for vertical and horizontal postion.

Format: `"<vertical> <horizontal>"`.

- Vertical options: `top`, `bottom`
- Horizontal options: `left`, `center`, `right`

Default is "top right".

### API

```javascript
  Notify({
    // (optional)
    // Can be 'success', 'danger', 'warning'
    // Overrides default/provided type
    type: 'success',
    
    // (optional)
    // Notification position
    // Overrides default/provided duration
    position: 'top right',

    // (optional)
    // Title
    title: 'This is title',

    // (optional)
    // Content
    html: 'This is <b> content </b>',

    // (optional)
    // Set in ms (milliseconds) If the duration is a negative number, the notification will not be removed.
    duration: 2000,
  })
```
