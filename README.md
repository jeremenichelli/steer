# steer [![Build Status](https://travis-ci.org/jeremenichelli/steer.svg)](https://travis-ci.org/jeremenichelli/steer)

Script that fires events **only** when the user changes the scrolling direction.


### Install

Include the distribution file in your project

```html
<script src="js/steer.min.js"></script>
```

also available on **bower**

```bash
bower install steer --save-dev
```

... and **npm** as **steerjs**

```bash
npm install steerjs --save-dev
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

There is a chance you're doing some other things when the window scrolls. If that's the case **steer** might override those when is set. To avoid this you can pass a flag called ```events``` with the value ```false``` in the configuration object.

```js
steer.set({
    events: false,
    up: function(y) {
        console.log('up method fire at ' + y + 'px!');
    }
});
```

Then to make it work you have to call **steer.trigger()** in the scroll event you're declaring.

```js
window.addEventListener('scroll', function() {
    // do things on scroll
    steer.trigger();
}, false);
```


### Size

**steer** is really light, only 3.1KB uncompressed, 650 bytes minified and 392 bytes gzipped.


### Contribute

Feel free to rise an issue or suggest a change that you think that can improve this code.
