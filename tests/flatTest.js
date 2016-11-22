require('should');
var flat = require('../lib/flat.js');

describe('Flat test', function(){
    it('should flatter simple test', function(){
        var arr = [[1,2,[3],4],5];
        var comp = [1, 2, 3, 4, 5];

        flat.flatter(arr).sort().should.eql(comp.sort());
    });
    it('should flatter with some null values', function(){
        var arr = [[1,2,[],4],5, [6, null]];
        var comp = [1, 2, 4, 5, 6];

        flat.flatter(arr).sort().should.eql(comp.sort());
    });
    it('should flatter with zero values', function(){
        var arr = [0, [1,2,[],4],5, [6, null]];
        var comp = [0, 1, 2, 4, 5, 6];

        flat.flatter(arr).sort().should.eql(comp.sort());
    });
});
