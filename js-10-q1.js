// Using an example, explain the difference between block,global and function scope in variables.


//___global_________________________________________________________

let global= "global"
console.log(global)        // ✅

function test() {
    console.log(global);   // ✅
};
  test()

{
    console.log(global)    // ✅
}

//   حتی درون block و function scopes
// قابل دسترسی است

//___block__________________________________________________________

{
    let block= "block"
    console.log(block)      // ✅
}

// console.log(block)          // ❌ not defined

// فقط درون block scope 
// قابل دسترسی است

//___function_______________________________________________________

function scope(){
    let funScope = "funScope"
    console.log(funScope)        // ✅
}
scope()
// console.log(funScope)            // ❌ not defined

// فقط درون function scope
// قابل دسترسی است

