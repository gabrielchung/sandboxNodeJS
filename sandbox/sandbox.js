
var fs = require('fs');

var input = null;

fs.readFile('./io/input.json', 'utf8', function(err, output){
    
    input = JSON.stringify(output);

    run_prog(input);

});

function run_prog(input) {
    const prog = require('./prog');
    // console.log(JSON.stringify(prog.main(input)));

    var prog_output = prog.main(input);
    
    fs.readFile('./io/output.json', 'utf8', function(err, output){

        // var expected_output = JSON.parse(output);
        var expected_output = JSON.parse(output);

        if (expected_output === prog_output) {
            
            console.log('Pass');

            console.log('expected output:');
            console.log(expected_output);

        } else if (JSON.stringify(expected_output) ===
                        JSON.stringify(prog_output)) {

            console.log('Stringify Pass');

            console.log('expected output:');
            console.log(expected_output);

        } else {

            console.log('Diff');

            console.log('expected output:');
            console.log(expected_output);
            
            console.log('output:');
            console.log(prog_output);
                        
        }

    });

}