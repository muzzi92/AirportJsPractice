const Weather = require('../lib/Weather');

describe('Weather', function(){

    let weather;

    beforeEach(function(){
        weather = new Weather();
    });

    it('condition returns sunny when random integer is zero', function(){
        spyOn(Math, 'floor').and.returnValue(0)
        expect(weather.condition()).toEqual('sunny');
    });

    it('condition returns stormy when random integer is one', function(){
        spyOn(Math, 'floor').and.returnValue(1)
        expect(weather.condition()).toEqual('stormy');
    });

});
