const userInput = document.querySelector('#input-number');
const cBtn = document.querySelector('#btn-c');
const fBtn = document.querySelector('#btn-f');

const currentcalculationOutput= document.querySelector('#current-calculation');

function getUserInput(){
    return parseFloat(userInput.value);//parse輸入的東西轉變型態
}

function outputResult(text){
    currentcalculationOutput.textContent = text;
}

function c(){
    const operand1 = getUserInput();
    const calcText = `${operand1} `*9/5+32;
    const outputText = `${operand1} C = ${calcText} F`;
    outputResult(outputText);
}

function f(){
    const operand1 = getUserInput();
    const calcText = ((`${operand1} `-32)*5/9).toFixed(2);
    const outputText = `${operand1} F = ${calcText} C`;
    outputResult(outputText);
}

fBtn.addEventListener('click',c);
cBtn.addEventListener('click',f);

// let c, f;
// f =( c * 9/5 +32 ).toFixed(2);//toFixed取小數點
// console.log(`${c} C = ${f} F`);//輸出