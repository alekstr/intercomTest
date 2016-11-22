require('should');
var flat = require('../lib/flat.js');

describe('Flat test', function(){
    it('should flatter simple test', function(){
        var arr = [[1,2,[3],4],5];
        var comp = [1, 2, 3, 4, 5];

        flat.flatter(arr).sort().should.eql(comp.sort());
    });
});
