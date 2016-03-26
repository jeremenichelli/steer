(function(root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.steer = factory();
    }
})(this, function() {
    'use strict';

    var y = 0,
        root = window,
        config = {
            events: true,
            up: function() {},
            down: function() {}
        },
        direction = null,
        oldDirection = null;

    /*
     * Replaces configuration values with custom ones
     * @method _setConfigObject
     * @param {Object} obj - object containing custom options
     */
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

    /*
     * Main function which sets all variables and bind events if needed
     * @method _set
     * @param {Object} configObj object containing custom options
     */
    var _set = function(configObj) {
        _setConfigObject(configObj);

        if (config.events) {
            root.addEventListener('scroll', _compareDirection);
        }
    };

    /*
     * Cross browser way to get how much is scrolled
     * @method _getYPosition
     */
    var _getYPosition = function() {
        return root.scrollY || root.pageYOffset;
    };

    /*
     * Returns direction and updates position variable
     * @method _getDirection
     */
    var _getDirection = function() {
        var actualPosition = _getYPosition(),
            direction;

        direction = actualPosition < y ? 'up' : 'down';

        // updates general position variable
        y = actualPosition;

        return direction;
    };

    /*
     * Compares old and new directions and call specific function
     * @method _compareDirection
     */
    var _compareDirection = function() {
        direction = _getDirection();

        // when direction changes update and call method
        if (direction !== oldDirection) {
            oldDirection = direction;
            config[direction].call(root, y);
        }
    };

    return {
        set: _set,
        trigger: _compareDirection
    };
});
