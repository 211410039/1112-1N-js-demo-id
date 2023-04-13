// set inital value to zero
let count = 0; //let跟var的差別是不能宣告一樣名字的變數且只作用在程式區塊(不佔用記憶體)
// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

console.log('btn', btns);

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log('e.currentTarget', e.currentTarget.classList); //抓取每個按鈕位置
    const styles = e.currentTarget.classList;
     if(styles.contains('decrease')){
      count --;
     }else if(styles.contains('increase')){
      count ++;
     }else{
      count = 0;
     }

     if(count > 0){
      value.style.color = 'green';
     }else if(count < 0){
      value.style.color = 'red';//style.color變換值的顏色
     }else{
      value.style.color = '#222';//看有無原來css裡id=value的顏色
     }
     value.textContent = count;
  });
});
