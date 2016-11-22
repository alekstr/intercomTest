require('should');

var LineReader = require('../lib/lineReader.js');

describe('LineReader test', function(){
    it('should read good file', function() {
        var lr = new LineReader(__dirname + '/../gistfile1.txt');

        return lr.reduce(function(){
            return true;
        }).then(function(rez){
            rez.length.should.equal(32);
        });
    });

    it('should fail on bad file', function() {
        try {
            var lr = new LineReader('blah');
        } catch(e) {
            e.name.should.equal('FileNotFound');
        }
    });

    it('should fail on file syntax error', function(){
        var lr = new LineReader(__dirname + '/broken1.txt');

        return lr.reduce(function(){
            return true;
        })
        .then(function(rez){
            console.log('Rez');
        })
        .catch(function(e){
           console.log(e); 
        })
    });
});

