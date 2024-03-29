//const url = `https://course-api.com/javascript-store-products`;

const url = './api/products.json'//這個撈不到用local端

const pContainer = document.querySelector('.products-container');
const companyBtns = document.querySelectorAll('.company-btn');

let allProducts; 
let products;

const fetchData = async () =>{
    try{
        const response = await fetch(url);
        const data = response.json();
        console.log('fetch data', data);
        return data;
    }catch(err){
        console.log(err);
    }
}

const displayProducts = (products) =>{
    let displayContent = products.map((product, index)=>{ //index=取得image的12345
        const {company, name, price } = product.fields;
        let image = `./images/product-${index+1}.jpg`; //local端
        return`
            <div class="single-product">
            <img
              src=${image}
              class="single-product-img img"
              alt=${name}
            />
            <footer>
              <h5 class="name">${name}</h5>
              <span class="price">$${price/100}</span>
            </footer>
          </div>
          `
    }).join('');
    //console.log('displayContent', displayContent);
    pContainer.innerHTML = displayContent;
}

companyBtns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const companyId = e.currentTarget.dataset.id; //dataset是一個集合
        console.log('companyId', companyId);
        if(companyId === 'all'){
            console.log('all products', allProducts);
            displayProducts(allProducts);
        }else{
            products = allProducts.filter((p)=>p.fields.company === companyId);
            console.log(`${companyId}products`, products);
            displayProducts(products);
        }
    });
});

window.addEventListener('DOMContentLoaded', async () =>{
    allProducts = await fetchData();
    console.log('all products', allProducts);
    await displayProducts(allProducts);
});