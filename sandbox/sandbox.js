var fs = require('fs');
var t1, t2;

fs.readFile('./io/input.json', 'utf8', function(err, output){
    
    var input = JSON.stringify(output);

    run_prog(input, false);

    t1 = Date.now();

    run_prog(input, true);

});

function run_prog(input, stress_test) {
    
    const prog = require('./prog');
    // console.log(JSON.stringify(prog.main(input)));

    var prog_output;

    if (stress_test === false) {

        prog.main(input, function(prog_output){
            
            check_result(prog_output);

        });

    } else {

        execute_prog_statement(prog.main, input, 1, 1000, function(){
            
            t2 = Date.now();
            console.log('Time spent:');
            console.log((t2-t1)/1000);

        });

    }
}

function check_result(prog_output) {
    
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

function execute_prog_statement(main_fn, input, loop_num, to_loop_num, callback) {

    // console.log(loop_num);
    // console.log(to_loop_num);

    if (loop_num === to_loop_num) {
        callback();
        return;
    }
    
    main_fn(input, function(){
        execute_prog_statement(main_fn, input, loop_num+1, to_loop_num, callback);
    });

}