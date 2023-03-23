let c, f;
c = Number(prompt("Enter a temperature in C: ")).toFixed(2);//prompt=輸入
f =( c * 9/5 +32 ).toFixed(2);//toFixed取小數點
console.log(`${c} C = ${f} F`);//輸出
