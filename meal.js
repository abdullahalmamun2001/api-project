const mealLoad=(searchText)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data =>displayMeals(data.meals))
    console.log(url);
}
const displayMeals=meals=>{
    // console.log(meal);

    const mealsContainer=document.getElementById('meals-container');
    mealsContainer.innerHTML="";
    meals.forEach(meal => {
        console.log(meal);
        
        const mealDiv=document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML=`
        <div class="col">
            <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="loadMealsDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDeatails">
                    Details
                </button>
            </div>
            </div>
        </div> `

        mealsContainer.appendChild(mealDiv);
    });

}
const searchMeal=()=>{
    const searchText=document.getElementById('search-field').value;
    console.log(searchText);
    mealLoad(searchText);
    
}

const loadMealsDetails=(idMail)=>{
   const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMail}`
   fetch(url)
   .then(res =>res.json())
   .then(data=>displyMeals(data.meals[0]))
}

const displyMeals=meal=>{
    document.getElementById('mealDeatailsLabel').innerText=meal.strMeal;
    const mealsDetails=document.getElementById('meals-body');
    console.log(meal);
    mealsDetails.innerHTML=`
    <img class="img-fluid" src="${meal.strMealThumb}">
    <h2>This is disgusting</h2>
    <h2>${meal.strCategory}</h2>
    `
}


mealLoad('fish');