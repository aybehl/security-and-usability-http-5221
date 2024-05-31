//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST & TEST EXECUTION ==========

function test__checkHumberId(valueIn, expected){
    "use strict";

    let result = checkHumberId(valueIn);

    let resultString = '';
    console.log(`result - ${result} expected - ${expected}`);
    if(result === expected){
        resultString = '<span style="color: green;">PASSED</span>';
    } else {
        resultString = '<span style="color: red;">FAILED</span>';
    }
    let msg = `<strong>Value tested</strong>: ${valueIn} 
        <strong>Expected result</strong>: ${expected}
        === ${resultString} === <br/>`;

    let resultBox = document.getElementById('data');
    resultBox.innerHTML += msg;
}

test__checkHumberId('N12345678', true); //Test to pass
test__checkHumberId('n12345678', true); //Test to pass

test__checkHumberId('N1234567', false); //Boundary test
test__checkHumberId('n123456789', false); //Boundary test

test__checkHumberId('', false); //Test to fail
test__checkHumberId(null, false); //Test to fail

test__checkHumberId('tbcjksd', false); //Test to fail
test__checkHumberId('x12345678', false); //Test to fail

test__checkHumberId('aN12345678', false); //Test to pass
