/*The receivesAFunction function should:

 - take a callback function as an argument
 - call the callback function it doesn't matter what this function returns, 
so long as it calls the callback function */

function receivesAFunction (thing) {
    return thing();
}


//let hello = function namedFunction(){
// return function thing2(){
   // 1+2;
// }
//}
function returnsANamedFunction () {
    return function hello(){
        1+2;
    };
}

function returnsAnAnonymousFunction(){
    return function(){
        2+2;
    }
}