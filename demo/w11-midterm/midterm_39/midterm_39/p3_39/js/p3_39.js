import {data, data2} from './product_data.js';//要寫.js，只有一個不能加{}

const productContainer = document.querySelector('.products-container');

console.log('data', data);
console.log('data2', data2);

const fetchData = (data)=>{

    let products = data.map((item)=>{   //products是一個陣列 
        const{id, img, name, price} = item;
        return`
        <div class="single-product">
        <img
          src="${img}"
          class="single-product-img img"
          alt="${name}"
        />
        <footer>
          <h5 class="name">${name}</h5>
          <span class="price">$${price}</span>
        </footer>
      </div>
        `
    }).join('');//用join串起來

    console.log('products', products);
    productContainer.innerHTML = products;

}

document.addEventListener('DOMContentLoaded',()=>{
    fetchData(data);
});