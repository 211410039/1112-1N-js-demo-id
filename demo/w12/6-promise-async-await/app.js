const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const heading4 = document.querySelector('.four');

const btn = document.querySelector('.btn');

btn.addEventListener('click',async()=>{
 const result = await displayColor();
 console.log('result',result);
});


const displayColor = async ()=>{
    try{
    await addColor(1000, heading1, 'red');
    await addColor(2000, heading2, 'green');
    await addColor(1000, heading3, 'blue');
    await addColor(500, heading4, 'yellow');
    }catch(error){
        console.log(error);
    }
}

const addColor =(time, element, color)=>{
    return new Promise((resolve, reject)=>{
    if(element){
        setTimeout(()=>{
            element.style.color = color;
            resolve();
        }, time);
    }else{
        reject(new Error(`There is no such element ${element}`));//丟回catch
    }
    });
};

// btn.addEventListener('click',()=>{
//     setTimeout(()=>{
//         heading1.style.color = 'red';
//         setTimeout(()=>{
//             heading2.style.color = 'green';
//             setTimeout(()=>{
//                 heading3.style.color = 'blue';
//                 setTimeout(()=>{
//                     heading4.style.color = 'yellow';
//                 }, 500);
//             }, 1000);
//         }, 2000);//2秒
//     }, 1000);//1秒
// });

const promise = new Promise((resolve, reject)=>{
    let value = true;
    if(value){
        resolve([1,2,3,4]);
    }else{
        reject('There was an error, value is false');
    }
}); 

promise.then((data)=>{ //接收資料
    console.log('data', data);
}).catch((error)=>{
    console.log(error);
});