(function(root, factory){
    if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.steer = factory(root);
  }
})(this, function(){
    var y = 0,
        gap = 0,
        direction = 'gap',
        oldDirection = 'gap';

    var methods = {
        'gap' : undefined,
        'up' : undefined,
        'down' : undefined
    };

    var init = function(){
        _bindScrolling(_compareDirection);
        return window.steer;
    };

    var _bindScrolling = function(fn){
        if(window.addEventListener){
            window.addEventListener('scroll', fn, false);
        } else if (window.attachEvent){
            window.attachEvent('onscroll', fn);
        } else {
            window.onscroll = fn;
        }
    };

    var _getYPosition = function(){
        return window.scrollY || window.pageYOffset;
    };

    var _getDirection = function(){
        var actualPosition = _getYPosition(),
            direction = (y < gap) ? 'gap' : (y < actualPosition) ? 'down' : 'up';

        y = actualPosition;

        return direction;
    };

    var _compareDirection = function(){
        direction = _getDirection();

        if (direction !== oldDirection){
            oldDirection = direction;
            fn = methods[direction];
            if(typeof fn == 'function'){
                try {
                    fn(y);
                } catch(e) {
                    console.log(e);
                }
            }
        }
    };

    var up = function(callback){
        methods.up = callback;
        return window.steer;
    };

    var down = function(callback){
        methods.down = callback;
        return window.steer;
    };

    var _setGap = function(n, fn){
        gap = n;
        methods.gap = fn;
        return window.steer;
    };

    return {
        init : init,
        up : up,
        down : down,
        gap : _setGap,
        trigger : _compareDirection
    };
});