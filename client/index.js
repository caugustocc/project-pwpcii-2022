// const { resolve } = require("core-js/fn/promise");
// const async = require("hbs/lib/async");
// const { CompileShallowModuleMetadata } = require("prettier");
/* eslint-disable*/
/* eslint-disable no console */
// import ' ./styles/style.css';
// import ' ./styles/mystyle.css';

console.log('webpack💫');
// default parameters
const show = (m = 'holis ☠') => {
  alert(m);
};
show();

// promises
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('functio resolve');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling asyn funtion!!!');
  const result = await resolveAfter2Seconds();
  console.log(result); // imprime "funcion resolve" en la consola
}
asyncCall();
