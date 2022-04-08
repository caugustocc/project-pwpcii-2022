// const { resolve } = require("core-js/fn/promise");
// const async = require("hbs/lib/async");
// const { CompileShallowModuleMetadata } = require("prettier");
console.log("webpack💫");
// default parameters
let show = (m ="holis☠")=>{
    alert(m);
};
show();

// promises
function resolveAfter2Seconds(){
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve("functio resolve")  
        },2000)
    })
}

async function asyncCall(){
    console.log("calling asyn funtion!!!");
    const result = await resolveAfter2Seconds();
    console.log(result);//imprime "funcion resolve" en la consola
}
asyncCall();