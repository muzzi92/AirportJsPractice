const Airport = require('../lib/Airport');
const Plane = require('../lib/Plane');

describe('Airport', function(){

    let airport;

    beforeEach(function(){
        airport = new Airport();
        plane = new Plane();
    });

    it('has a hanger', function(){
        expect(airport.hanger).toEqual([]);
    });

    it('puts plane in hanger on land', function(){
        airport.land(plane);
        expect(airport.hanger).toContain(plane);
    });

    it('removes plane from hanger on takeoff', function(){
        airport.land(plane);
        airport.takeoff(plane);
        expect(airport.hanger).not.toContain(plane);
    });

});
