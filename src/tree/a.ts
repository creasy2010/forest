console.log('hello tree from module a ');
// require("./b");

//
// declare global {
//   /*~ Here, declare things that go in the global namespace, or augment
//    *~ existing declarations in the global namespace
//    */
//   x :number;
// }

// declare var x:number;

let t ={val:0};
var test  = 'hold up ';
setInterval(()=>{
  x++;t.val++ ; console.log(t.val)
},2000);
t;