//Pegando pelo id 

var currentNumberWrapper = document.getElementById("currentNumber")//span
var currentNumber = 0;


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

// //função decrement 
function decrement(){
    currentNumber = currentNumber - 1
    currentNumberWrapper.innerHTML = currentNumber;
 }