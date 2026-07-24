//Global scope
var globalVar = "I am a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm also global, but scoped with const";

{
    var blockVar = "I'm a block-scoped var";
    let globalLet = "I'm a global constant";

    // Block scope - can only be accessed within block or the curly braces
    var blockVar = "I'm a block-scoped var";
    let blockLet  = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); //Output: I am a global variable
console.log(globalLet); //Output: I'm also global, but scoped with let
console.log(globalConst); //Output: I'm also global, but scoped with const


function show() {
    var functionVar = "I'm a block-scoped"
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError

// console.log(blockVar);
// console.log(blockLet);
