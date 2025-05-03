alert("Hi, welcome to Giri's calculator program");

function updateDisplay(value) {
    const display = document.getElementById('display'); 
    if(display.value=="" && value=='.'){
        display.value = '0'+value;
    }
    else{
        display.value = display.value + value;
    }
    
    /*if(display.value==0 && value=='.'){
        display.value = '0'+value;
    }
    else if(display.value==0 && value!='.')
    {
        display.value = value;
    }
    else
    {
        display.value = display.value + value;
    }*/
}

function calculate() {
    const display = document.getElementById('display');
    display.value = eval(display.value);
}

function calculateSq() {
    const display = document.getElementById('display');
    display.value = eval(display.value * display.value);
}

/*function calculateMod() {
    const display = document.getElementById('display');
    display.value = eval(display.value % display.value);
}
*/

function calculateSqrt() {
    const display = document.getElementById('display');
    display.value = eval(Math.sqrt(display.value));
}

function clearDisplay() {
    const display = document.getElementById('display');
    displayValue = "";
    display.value = displayValue;
}