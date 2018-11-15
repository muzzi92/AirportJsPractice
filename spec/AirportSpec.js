const Airport = require('../lib/Airport');

describe('Airport', function(){

    let airport;

    beforeEach(function(){
        airport = new Airport();
    });

    it('has a hanger', function(){
        expect(airport.hanger).toEqual([]);
    });

    it('puts plane in hanger on land', function(){
        airport.land('plane');
        expect(airport.hanger).toContain('plane');
    });

});
