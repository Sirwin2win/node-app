// const os = require('os')
console.log("The very first Hello world")
console.log("The very Second Hello world")
function square(e){
    return e**2
}

console.log(square(6))
// const higher = function(n){
//     const lower = function(){
//         return 2*n
//     }
//     return lower()
// }
setTimeout(()=>{
    console.log("Hello world from setTimeout")
},3000)
console.log("Hello world after settimeout")
/* synchronous and asynchronous
The call stack:LIFO: Here is where Synchronous function are stacked and executed/
poped out one by one
The callback queue: FIFO: This is where the callback functions from asynchronous 
JavaScript are kept for execution
The event loop: This does a monitor job, checking when the call stack is empty 
so that it'll start pushing functions from the callback queue into the call stack
*/
// console.log(os.platform())
// console.log(os.type())
