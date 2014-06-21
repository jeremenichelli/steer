# steer

Script that fires events *only* when the scrolling direction changes.


## Use

To get this script working just add it to your web project and initialize it:

`steer.init();`

Of course you need to set the functions you want to fire when the scroll direction has changed. When the user changes the scrolling direction and starts going up you do this:

```js
steer.up(
    function(){
       // do something
   }
);
```

And when the user changes the direction and starts going down:

```js
steer.down(
    function(){
       // do something
   }
);
```


Pretty easy, right? Well, you can actually chain this functions;

```js
steer.init()
     .up(
        function(){
            // do something
         }
      )
     .down(
        function(){
            // do something else
         }
      );
```


Work with existing scrolling functions
--------------------------------------

There's a chance that you already do things when the scroll event happens. In that case you just need to set the `up()` and `down()` functions and then call `steer.trigger()` inside the event function, and that's it!

```js
steer
     .up(
        function(){
            // do something
         }
      )
     .down(
        function(){
            // do something else
         }
      );

window.addEventListener('scroll', function(){
	// do some things
	steer.trigger();
	// do other super smart things
} ,false);
```

### Fire events after some scrolling

If you wanna set a gap, and start firing the functions after a certain number of scrolled pixels just call this function:

`steer.gap(150)`

You can also fire a function when the user comes in the gap:

```js
steer.gap(150, function(position){
  //do something
  console.log("You've scrolled " + position + "px.");
});
```

You'll always receive the actual scroll position, when any function is fired, as a parameter if you feel like you will need it.

THAT'S IT! Hope you find this useful, let me know if you see any issues.

Happy coding!

