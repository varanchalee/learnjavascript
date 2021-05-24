// function myFuncyion(value1, value2){
//     return value1 * value2;
// }

// console.log(myFuncyion(5, 5));

// function changeBg(){
//     document.body.style.backgroundColor = "red";
// }

// changeBg();

function cTof(celsios){
    var cTemp = celsios;
    var cTofar = cTemp * 9 /5 + 32;
    var message = cTemp + "is" + cTofar;
    console.log(message);
}

cTof(30);