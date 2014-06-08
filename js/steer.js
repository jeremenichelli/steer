(function(root, factory){
	if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.steer = factory(root);
  }
})(this, function(){
	var self
	, y = 0
	, direction = 'down'
	, oldDirection = 'down';

	var methods = {
		'up' : undefined,
		'down' : undefined
	};

	var init = function(){
		self = window.steer;
		window.onscroll = _compareDirection;
		return self
	}

	var _getYPosition = function(){
		return window.scrollY || window.pageYOffset
	};

	var _getDirection = function(){
		var actualPosition = _getYPosition();
		
		direction = (y < actualPosition) ? 'down' : 'up';

		y = actualPosition;

		return direction
	};

	var _compareDirection = function(){
		var fn;

		direction = _getDirection();

		if (direction !== oldDirection){
			fn = (direction === 'up') ? methods.up : methods.down;
			oldDirection = direction;
			try {
				fn();
			} catch(e) {
				console.log(e);
			}
		};
	};

	var up = function(callback){
		methods.up = callback;
		return self
	}

	var down = function(callback){
		methods.down = callback;
		return self
	}

	return {
		init : init,
		up : up,
		down : down
	}

});


steer
	.init()
	.up(function(){
		console.log("Direction changed to UP!");
	})
	.down(function(){
		console.log("Direction changed to DOWN!");
	});