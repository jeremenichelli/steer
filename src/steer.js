(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.steer = factory();
    }
})(this, function() {
    var y = 0,
        config = {
            events: true,
            up: undefined,
            down: undefined
        },
        direction = 'null',
        oldDirection = 'null',
        root = window;

    var _bindScrollEvent = function(fn) {
        if (root.addEventListener) {
            root.addEventListener('scroll', fn, false);
        } else if (root.attachEvent) {
            root.attachEvent('onscroll', fn);
        } else {
            root.onscroll = fn;
        }
    };

    var _setConfigObject = function(obj) {
        // override with custom attributes
        if (typeof obj === 'object') {
            for (var key in config) {
                if (typeof obj[key] !== 'undefined') {
                    config[key] = obj[key];
                }
            }
        }
    };

    var _safeFn = function(fn, args) {
        if (typeof fn === 'function') {
            try {
                fn.apply(null, args);
            } catch (e) {
                console.error(e);
            }
        }
    };

    var _set = function(configObj) {
        _setConfigObject(configObj);

        if (config.events) {
            _bindScrollEvent(_compareDirection);
        }
    };

    var _getYPosition = function() {
        return root.scrollY || root.pageYOffset || document.documentElement.scrollTop;
    };

    var _getDirection = function() {
        var actualPosition = _getYPosition(),
            direction;

        direction = (actualPosition < y) ? 'up' : 'down';

        // updates general position variable
        y = actualPosition;

        return direction;
    };

    var _compareDirection = function() {
        direction = _getDirection();

        if (direction !== oldDirection) {
            oldDirection = direction;
            _safeFn(config[direction], [ y ]);
        }
    };

    return {
        set: _set,
        trigger: _compareDirection
    };
});
