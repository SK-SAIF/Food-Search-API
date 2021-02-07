function foodCome(foodName) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodName}`)
        .then(res => res.json())
        .then(data => {
            const foodArray = data.meals;
            console.log(foodArray);
            if (foodArray === null) {
                document.getElementById("foodDiv").innerText = "Sorry, no result found";
            }
            else {
                foodArray.map(eachFood => {
                    const foodName = eachFood.strMeal;
                    const foodPic = eachFood.strMealThumb;

                    const parent = document.getElementById("foodDiv");
                    const foodThumb = document.createElement('section');
                    foodThumb.innerHTML = `
                    <div class="foodEvery" id="foodSpecificName" onclick="foodDetails('${foodName}')">
                    <div><img src="${foodPic}"></div>
                    <div><h2>${foodName}</h2></div>
                    </div>
                `
                    parent.appendChild(foodThumb);
                });
            }
        });
}
function searchFoodButton() {
    document.getElementById("foodDiv").innerHTML = null;
    const inputFoodName = document.getElementById("foodSearchBar").value;
    foodCome(inputFoodName);
}
function foodDetails(foodCoreName) {
    document.getElementById("foodList").innerHTML = null;
    document.getElementById("ingredientsUl").innerHTML = null;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodCoreName}`)
        .then(res => res.json())
        .then(data => {
            const singleFoodArray = data.meals;
            const singleFoodObject = singleFoodArray[0];

            const foodName = singleFoodObject.strMeal;
            const foodPic = singleFoodObject.strMealThumb;
              
            const arrayOfIngredients = Object.entries(singleFoodObject);
            const parent = document.getElementById("foodList");
            const foodThumb = document.createElement('section');
            foodThumb.innerHTML = ` 
                <div id="singleFoodDetails">  
                <div><img src="${foodPic}"></div>
                <div><h2>${foodName}</h2></div>
                <h5>Ingredients</h5>
                <div>
            `
            parent.appendChild(foodThumb);
            const parentUl = document.getElementById("ingredientsUl");
            for (let i = 9; i <= 28; i++) {
                const element = arrayOfIngredients[i];
                const element2 = arrayOfIngredients[i + 20];
                let item = element2[1] + " " + element[1];
                if (item != " ") {
                    const childLi = document.createElement("li");
                    childLi.innerText = item;
                    parentUl.appendChild(childLi);
                }
            }
        })
}
