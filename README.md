# steer

[![Build Status](https://travis-ci.org/jeremenichelli/steer.svg)](https://travis-ci.org/jeremenichelli/steer)

Script that fires events **only** when the user changes the scrolling direction.


### Install

Include the distribution file in your project

```html
<script src="js/steer.min.js"></script>
```

also available on **bower**

```bash
bower install steer --save
```

... and **npm** as **steerjs**

```bash
npm install steerjs --save
```


### steer.set()

This method ```set``` lets you configure the actions to be called everytime the user changes the scroll direction.

```js
steer.set({
    up: function() {
        // do something when the user starts scrolling up
    },
    down: function() {
        // do something when the user starts scrolling down
    }
});
```

In case you need it, the **y** position when the function was fired is passed as an argument.

```js
steer.set({
    up: function(y) {
        console.log('up method fire at ' + y + 'px!');
    }
});
```

### steer.trigger()

You can pass a flag called ```events``` with the value ```false``` in the configuration object so no listeners are added **on scroll**.

```js
steer.set({
    events: false,
    up: function(y) {
        console.log('up method fire at ' + y + 'px!');
    }
});
```

Then for **steer** to work you need to call `steer.trigger()` in the scroll event in your code.

```js
window.addEventListener('scroll', function() {
    // do other things on scroll ...
    steer.trigger();
}, false);
```


### Size

**steer** is really light, **364 bytes** minified and gzipped!


### Browser support

This library works perfect in the latest version of all modern browsers and Internet Explorer 9+, and requires `requestAnimationFrame` and `addEventListener` support.


### Contribute

Feel free to rise an issue or suggest a change that you think that can improve this code.
