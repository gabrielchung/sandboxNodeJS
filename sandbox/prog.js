exports.main = function(input, callback) {
    //return { output: 'Better World!' };
    // return { output: 'Better World!!!' };
    
    for (var i=0; i<10000; i++) {
        ;
    }

    // sleep({ output: 'Better World!!!' }, callback);

    callback({ output: 'Better World!!!' });
}

function sleep(output, callback) {
    setTimeout(function(){
        //do what you need here
        
        callback(output);

    }, 50);
}