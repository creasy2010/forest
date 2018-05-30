import vm from 'vm';
import {readFile} from 'fs-extra';
import {join} from 'path';

let basicBox = {
  require,
  setInterval,
  clearInterval,
  setTimeout,
  clearTimeout,
};

//@ts-ignore
let x = 'hello';
let sandbox = {
  ...basicBox,
  x: 0,
  y: 0,
  echo: () => {
    console.log('hello,', x);
  },
};
vm.createContext(sandbox);

(async () => {


  try{
    const code = await readFile(join(__dirname, './tree/a.ts'), 'utf-8');
    // x and y are global variables in the sandboxed environment.
    // Initially, x has the value 2 because that is the value of sandbox.x.
    let result = vm.runInContext(code, sandbox);

    setInterval(()=>{
      console.log("result::",result);
      console.log(sandbox.x); // 17
      console.log(sandbox.x,sandbox['test']); // 17

    },1000)
  } catch(err) {
    console.log(err);
  }

})();
