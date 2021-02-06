function foodCome(foodName) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(res => res.json())
        .then(data => {

            const x = data.meals;
            const total = console.log(x[0]);
            const mealName = x[0].strMeal;
            const mealPic = x[0].strMealThumb;

            const parent = document.getElementById("foodDiv");

            const foodThumb = document.createElement('div');
            foodThumb.innerHTML = `
                <div><img src="${mealPic}"></div>
                <div><p>${mealName}</p></div>
            `
            parent.appendChild(foodThumb);
        });
}

function searchFoodButton() {
    document.getElementById("foodDiv").innerHTML=null;
    const inputFoodName = document.getElementById("foodSearchBar").value;
    foodCome(inputFoodName);
}

