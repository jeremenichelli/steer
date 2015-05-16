(function(root) {
    'use strict';

    describe('steer', function() {
        it('namespace available in global scope', function() {
            expect(typeof root.steer).toBe('object');
        });
        it('set method available in global scope', function() {
            expect(typeof root.steer.set).toBe('function');
        });
        it('trigger available in global scope', function() {
            expect(typeof root.steer.trigger).toBe('function');
        });
    });
})(this);