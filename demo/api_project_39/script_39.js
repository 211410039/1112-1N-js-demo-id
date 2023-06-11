const search = document.querySelector('#search');
const submit = document.querySelector('#submit');
const resultHeading = document.querySelector('#result-heading');
const mealsE1 = document.querySelector('#meals');
const single_mealE1 = document.querySelector('#single-meal');
const quize = document.querySelector('#random');
const quizTopic = document.querySelector('#quiz-topic');


const searchMeal = (e) => {
    e.preventDefault();
    const term = search.value;
    //console.log('term'. term);
    if (term.trim()) {
        fetch(`https://api.jikan.moe/v4/anime?q=${term}`)
            .then(response => response.json())/*成功*/
            .then(data => {
                console.log('data', data);

                if (data.data === null) {
                    resultHeading.innerHTML = `<P> There are no results, try again</p>`
                } else {
                    resultHeading.innerHTML = `<h2> Search results for '${term}' </h2>`;
                    mealsE1.innerHTML = data.data.map((anime) => {
                        return `
                    <div class="meal">
                      <img src="${anime.images.jpg.image_url}" />
                      <div class= "meal-info" data-mealid="${anime.mal_id}">
                      <h3> ${anime.title_japanese}</h3>
                      </div>
                    </div>
                    `
                    }).join('');

                }
            })

    } else {
       // alert('Please enter a search term');
    }
}
submit.addEventListener('click', searchMeal);




const getMealById = (mealID) => {
    fetch(`https://api.jikan.moe/v4/anime/${mealID}`)
        .then(resp => resp.json())
        .then(data => {
            //console.log('single meal', data);
            const meal = data.data;
            addMealToDOM(meal);
        })
}

const addMealToDOM = (meal) => {
    single_mealE1.innerHTML = `
    <div class="single-meal">
    <h1> ${meal.title_japanese} </h1>
    <img src="${meal.images.jpg.image_url}"/>
    <div class = "main"
    <p>${meal.synopsis}</p>
    <h2>Year </h2>
    <ul>
    ${meal.year}
    </ul>
    <h3> Status </h3>
    <ul>
    ${meal.status}
    </ul>
    </div>
    `
}

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
        //console.log('mealid', mealID);
    }
});


const playQuize = (e) => {
    e.preventDefault();
    const term = search.value;
    //console.log('term'. term);
    if (term.trim()) {
        fetch(`https://opentdb.com/api.php?amount=${term}&category=31`)
            .then(response => response.json())/*成功*/
            .then(data => {
                console.log('quiz data', data);
                resultHeading.innerHTML = `<h2> ${term} topics of Anime & Manda </h2>`;
                quizTopic.innerHTML = data.results.map((topic) => {
                    return `
                      <h2> ${topic.question}</h2>
                      <form class="answerflex" >
                      <input type="answer" id="answer" placeholder="Input your answer"/>
                    `
                 }).join('');
            })
       // alert('Please enter a search term');
    }
}

random.addEventListener('click', playQuize);