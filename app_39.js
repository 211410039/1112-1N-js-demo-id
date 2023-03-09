const menu = [
    {
        id: 1,
        title: 'french toast',
        category: 'breakfast',
        price: 10.52,
        img: './images/item-1.jpeg',
        remote_img: '',
        desc: 'strawberrys,oranges and french toast on plates smells good and tastes good and vary favor can choose just try it!if you are hungry, let it go in to your body! make a better day and better emotion to every continue day ! '
    },
    {
        id: 2,
        title: 'salad',
        category: 'lunch',
        price: 13.25,
        img: './images/item-2.jpeg',
        remote_img: '',
        desc: 'vegetable salad smells good and tastes good and vary favor can choose just try it!if you are hungry, let it go in to your body! make a better day and better emotion to every continue day ! '
    },
    {
        id: 3,
        title: 'steak',
        category: 'dinner',
        price: 16.38,
        img: './images/item-3.jpeg',
        remote_img: '',
        desc: 'fried food and steak on black pan smells good and tastes good and vary favor can choose just try it!if you are hungry, let it go in to your body! make a better day and better emotion to every continue day ! '
    },
    {
        id: 4,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.59,
        img: './images/item-4.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto modi debitis numquam harum, impedit soluta tempora aliquid commodi, earum odit expedita minima id eveniet mollitia quasi libero ducimus dignissimos iste!'
    },
    {
        id: 5,
        title: 'dinner double',
        category: 'dinner',
        price: 13.95,
        img: './images/item-5.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto modi debitis numquam harum, impedit soluta tempora aliquid commodi, earum odit expedita minima id eveniet mollitia quasi libero ducimus dignissimos iste!'
    },
    {
        id: 6,
        title: 'godzilla milkshake',
        category: 'shakes',
        price: 13.99,
        img: './images/item-6.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto modi debitis numquam harum, impedit soluta tempora aliquid commodi, earum odit expedita minima id eveniet mollitia quasi libero ducimus dignissimos iste!'
    },
];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

const displayMenuItems = (menu) => {
    let displayMenu = menu.map( (item) =>{
        return `
        <article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
          </div>
        </article>`
    });
    console.log('displayMenu before join', displayMenu);
    displayMenu = displayMenu.join('');
    console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;
}

window.addEventListener('DOMContentLoaded' , () => {
    displayMenuItems(menu);
});