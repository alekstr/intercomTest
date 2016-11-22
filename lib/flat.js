function flatter(arr) {
    var rez = [];

    for(var p in arr) {
        if(arr[p] instanceof Array) {
            rez.push.apply(rez, flatter(arr[p]));
        }else{
            if(arr[p] !== null) {
                rez.push(arr[p]);
            }
        }
    }

    return rez;
}

function flatterReducer(arr) {
    return arr.reduce(function (f, tf) {
        return f.concat((tf instanceof Array) ? flatterReducer(tf) : tf);
    }, []);
}

module.exports = {
    flatter: flatter,
    flatterReducer: flatterReducer
}

