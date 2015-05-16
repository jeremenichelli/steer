# steer [![Build Status](https://travis-ci.org/jeremenichelli/steer.svg)](https://travis-ci.org/jeremenichelli/steer)

Script that fires events *only* when the user changes the scrolling direction.


### Install

After you included the script in your project or just added a script tag with the file

```html
<script src="js/steer.js"></script>
```

It's also available on *bower*

```bash
bower install steer --save-dev
```

... and *npm* as **steerjs**

```bash
npm install steerjs --save-dev
```


### steer.set()

After you page has loaded you can start the script by calling the ```set``` method. To cofigure the actions you want to be executed everytime the user changes the scroll direction.

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

In case you need it the *y* position when the function is fired is passed as an argument if you need it.

```js
steer.set({
    up: function(y) {
        console.log('up method fire at ' + y + 'px!');
    }
});
```

### steer.trigger()

There is a chance you're doing some other things when the window scrolls. If that's the case *steer* might override those when is set. To avoid this you can pass a flag called ```events``` with the value ```false``` in the configuration object.

```js
steer.set({
    events: false,
    up: function(y) {
        console.log('up method fire at ' + y + 'px!');
    }
});
```

Then to make it work you have to call *steer.trigger()* in the scroll event you're declaring.

```js
window.addEventListener('scroll, function() {
    // do things on scroll
    steer.trigger();
}, 'false);
```


### Size

**steer** is really light, only 2.23Kb uncompressed, 650 bytes minified and 392 bytes gzipped.


### Contribute

Feel free to rise an issue or suggest a change that you think that can improve this code.
