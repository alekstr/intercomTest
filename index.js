var LineReader = require('./lib/lineReader');
var geo        = require('./lib/geo');
var flat       = require('./lib/flat');

//2nd
var arr = [[1,2,[3],4],5];

console.log('Flatted array: ', flat.flatter(arr));
console.log('Flatted array (reducer): ', flat.flatterReducer(arr));

//3rd
var dublin = [53.3393,-6.2576841];
var radius = 100;

var lineReader = new LineReader('./gistfile1.txt');

lineReader
    .reduce(function(line) {
        return geo.inRadius(dublin, radius, [line.latitude, line.longitude]); 
    })
    .then(function(rez) {
        rez = rez.sort(function(a,b){
            return a.user_id - b.user_id;
        });
        console.log('Customers in ' + radius + ' to ' + dublin +':', rez);
    })
    .catch(function(err) {
        console.log(err);
    });

