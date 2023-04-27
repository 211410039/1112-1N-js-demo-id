const calculateBtn = document.querySelector('#calculate');
const bmiResult = document.querySelector('#result');
const suggest = document.querySelector('#suggest');

function bmiCalc_39(height, weight) {
  return weight / (height * height);
}

function bmi_normal_low(height) {
  return 18.5 * (height) * (height);
}

function bmi_normal_high(height) {
  return 24 * (height) * (height);
}

function calculateBMI() {
  const weight = Number(document.querySelector('#weight').value); //Number轉換成數值
  const height = Number(document.querySelector('#height').value/100);//輸入時轉換成公尺
  //console.log(weight, height);
  const  bmi = bmiCalc_39(height, weight);
  const normal_low = bmi_normal_low(height);
  const normal_high = bmi_normal_high(height);

  let status;//let 變數宣告=>執行在程式區塊
  let suggestion;

  if(bmi < 18.5 ){
    status = 'Underweight';
    suggestion = `add at least ${(normal_low - weight).toFixed(1)} kg to normal.`;
  }else if(bmi <=24){
    status = 'Normal';
    suggestion = '';
  }else{
    status = 'Overweight';
    suggestion = `reduce at least ${(weight - normal_high).toFixed(1)} kg to normal.`
  }

  suggest.innerHTML = `${suggestion}`//innerHTM=>輸出在網頁上
  bmiResult.innerHTML = `Your BMI is ${bmi.toFixed(1)} .${status}`
}

calculateBtn.addEventListener('click', calculateBMI);
