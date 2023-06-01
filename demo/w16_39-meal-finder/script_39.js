const search = document.querySelector('#search');
const submit = document.querySelector('#submit');
const random = document.querySelector('#random');
const resultHeading = document.querySelector('#result-heading');
const mealsE1 = document.querySelector('#meals');
const single_mealE1 = document.querySelector('#single-meal');


const searchMeal = (e) => {
    e.preventDefault();
    const term = search.value;
    //console.log('term'. term);
    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(response => response.json())/*成功*/
            .then(data => {
                console.log('meals data', data);

                if (data.meals === null) {
                    resultHeading.innerHTML = `<P> There are no results, try again</p>`
                } else {
                    resultHeading.innerHTML = `<h2> Search results for '${term}' </h2>`;
                    mealsE1.innerHTML = data.meals.map((meal) => {
                        return `
                    <div class="meal">
                      <img src="${meal.strMealThumb}" />
                      <div class= "meal-info" data-mealid="${meal.idMeal}">
                      <h3> ${meal.strMeal}</h3>
                      </div>
                    </div>
                    `
                    }).join('');

                }
            })

    } else {
        //alert('Please enter a search term');
    }
}
submit.addEventListener('click', searchMeal);

const getMealById = (mealID) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
        .then(resp => resp.json())
        .then(data => {
            //console.log('single meal', data);
            const meal = data.meals[0];
            addMealToDOM(meal);
        })
}

const addMealToDOM = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        } else {
            break;
        }
    }
    console.log('ingredients', ingredients);

    single_mealE1.innerHTML = `
    <div class="single-meal">
    <h1> ${meal.strMeal} </h1>
    <img src="${meal.strMealThumb}"/>
    <div class = "main"
    <p>${meal.strInstructions}</p>
    <h2> Ingredients </h2>
    <ul>
       ${ingredients.map(ing =>{
        return`<li>${ing}</li>
        `
       }).join('')}
    </ul>
    </div>
    `
}

const randomMeal = () =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
            .then(resp => resp.json())/*成功*/
            .then(data => {
                console.log('meals data', data);
                const randomMeal = Math.floor(Math.random() *data.meals.length);
                console.log('randomMeal', randomMeal);
                resultHeading.innerHTML = `<h2>Random results for '${data.meals[randomMeal].strMeal}' </h2>`;
                    mealsE1.innerHTML =  `
                    <div class="meal">
                      <img src="${data.meals[randomMeal].strMealThumb}" />
                      <div class= "meal-info" data-mealid="${data.meals[randomMeal].idMeal}">
                      <h3> ${data.meals[randomMeal].strMeal}</h3>
                      </div>
                    </div>
                    `
            })}

// Event listeners


mealsE1.addEventListener('click', e => {
    console.log('e.path', e.composedPath());
    const composedPath = e.composedPath();
    const mealInfo = composedPath.find(item => {
        if (item.classList) {
            return item.classList.contains('meal-info');
        } else {
            return false;
        }
    });
    if (mealInfo) {
        //console.log('mealInfo', mealInfo);
        const mealID = mealInfo.getAttribute('data-mealid');//getAttribute回傳元素屬性的值
        getMealById(mealID);
        console.log('mealid', mealID);
    }
});

random.addEventListener('click', randomMeal);