var fs 		 = require('fs'),
    Q        = require('q'),
    readline = require('readline');


module.exports = function(file) {
    if(!fs.existsSync(file)) {
        throw {
            name: "FileNotFound",
            message: "File not found: " + file
        };
    }

    this._rd = readline.createInterface({
        input: fs.createReadStream('./gistfile1.txt'),
        output: process.stdout,
        terminal: false
    });
    
    this.reduce = function(cb) {
        var defer = Q.defer();
        var rez = [];
        var line = 1;

        this._rd.on('line', function(line) {
	        try {
	            var jsonLine = JSON.parse(line);
                if(!jsonLine) {
                    defer.reject({
                        name: 'JSONParseError',
                        message: 'Error in line('+line+') parsing: ' + e,
                        line: line
                    });
                }
                if(cb(jsonLine)) {
                    rez.push(jsonLine);
                }
	        }catch(e) {
	            defer.reject(e);
            }

            line++;
        });


        this._rd.on('close', function() {
            defer.resolve(rez);
        }); 

        return defer.promise;
    };
}
