// FUNCTION DEFINITION(S)
function square(n) {
  return n * n;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual,expected,testname) {
    if (actual === expected) {
        console.log('passed'); 
    } else {
        console.log('failed, expected ' + testname +'to equal' + expected +' it was ' +actual);
    }
}

// TESTS CASES
console.log(assertEqual(square(2),4,'sqare of 2'));