// inside eval() or if () block, the function won't be declared/defined
var y = 1;
  if (function f(){}) {
    y += typeof f;
  }
  console.log(y); // '1undefined' bc if statement code executes at run time, and the statement
  //inside if condition is evaluated during run time. 



var k = 1;
  if (1) {
    eval(function foo(){});
    k += typeof foo;
  }
  console.log(k); // '1undifined

  var k = 1;
  if (1) {
    function foo(){};
    k += typeof foo;
  }
  console.log(k); // output '1function'

//   write a mul function which will produce the following output

function mul(x) {
    return function(y) {
        return function(z) {
            return (x*y*z);
        }
    }
    // }
}


console.log(mul(2)(3)(4)); // output : 24 
console.log(mul(4)(3)(4)); // output : 48

