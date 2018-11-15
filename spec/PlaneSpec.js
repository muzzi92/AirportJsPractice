const Plane = require('../lib/Plane');

describe('Plane', function(){

    let plane;

    beforeEach(function(){
        plane = new Plane();
    });

    it('is an object', function(){
        expect(plane).toEqual(jasmine.any(Plane));
        expect(plane).toEqual(jasmine.any(Object));
    });
});
