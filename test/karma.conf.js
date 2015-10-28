// karma.conf.js
module.exports = function(config) {
    config.set({
        files: [ '../src/steer.js', '../test/steer.spec.js' ],
        browsers: [ 'PhantomJS' ],
        frameworks: [ 'jasmine' ],
        reporters: [ 'spec' ]
    });
};