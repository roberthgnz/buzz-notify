# Notify [![GitHub issues](https://img.shields.io/github/issues/buzz-js/buzz-notify)](https://github.com/buzz-js/buzz-notify/issues) [![GitHub forks](https://img.shields.io/github/forks/buzz-js/buzz-notify)](https://github.com/buzz-js/buzz-notify/network) [![GitHub stars](https://img.shields.io/github/stars/buzz-js/buzz-notify)](https://github.com/buzz-js/buzz-notify/stargazers)

Small notifications library

### How to


In myawesomesite.html:
```html
<div id="notify"></div>
```

In myscript.js:
```javascript
Notify({title: 'My notification'});
```

### Position

`Position` property requires a string with 2 keywords for vertical and horizontal postion.

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
    // Overrides default/provided duration. Set in ms (milliseconds)
    duration: 2000,
  })
```
