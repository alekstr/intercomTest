require('should');

var geo = require('../lib/geo.js');

describe('Geo test', function(){
    it('should calculate distance', function(){
        dist = Math.round(geo.distance(53.3393,-6.2576841, 53.4498,-6.2576849) * 100)/100;
        dist.should.equal(12.29); 
    });
});
