var fs 		 = require('fs'),
    Q        = require('q'),
    readline = require('readline');


module.exports = function(file) {
    this._rd = readline.createInterface({
        input: fs.createReadStream('./gistfile1.txt'),
        output: process.stdout,
        terminal: false
    });
    
    this.reduce = function(cb) {
        var defer = Q.defer();
        var rez = [];

        this._rd.on('line', function(line) {
	        try{
	            var jsonLine = JSON.parse(line);
                if(cb(jsonLine)) {
                    rez.push(jsonLine);
                }
	        }catch(e) {
                defer.reject('Error in line parsing: ' + e);
	        }
        });


        this._rd.on('close', function(){
            defer.resolve(rez);
        }); 

        return defer.promise;
    };
}
