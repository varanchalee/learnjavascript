// ES6 let & const

// var x =5;
// var x =6;
// console.log(x);
// at console >6 

// let y = 6;
//     y = 7; // y = 7 คือการประกาศใหม่
//let y = 7 ;// let y = 7; คือการประกาศซ้ำ = error
//console.log(y);

//const z = 10;
//const z = 11;
//console.log(z);
// const = ค่าคงที่ ประกาศซ้ำและประกาศใหม่ไม่ได้

// var, let and const scoop
var x =20; //ถ้ามีการประกาศแบบ global ค่าที่ได้จะเป็นใน scoop 
 {// {this is scoop}
    var x = 10;
 }
 console.log(x); 
 // at console >10 สามารถเข้าถึงตัวแปรนี้จากภายนอกได้

 let y = 20; //ถ้าประกาศตัวแปร let แบบ global ค่าที่ได้จะเป็นค่าของตัวแปร global ไม่สนใจค่าใน scoop
 {
    let y = 10;
 }
 console.log(y);
 // let is blog scoop
 //ไม่สามารถเข้าถึงจากภายนอกได้

 {
     const z = 10; 
 }
 //console.log(z);
 // const is blog scoop
 //ไม่สามารถเข้าถึงจากภายนอกได้




