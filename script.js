function foodCome(foodName) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodName}`)
        .then(res => res.json())

        .then(data => {
            const foodArray = data.meals;
            if (foodArray === null) {
                document.getElementById("foodDiv").innerText = "Sorry, no result found";
            }
            else {
                foodArray.map(eachFood => {
                    const foodName = eachFood.strMeal;
                    const foodPic = eachFood.strMealThumb;

                    const parent = document.getElementById("foodDiv");

                    const foodThumb = document.createElement('div');
                    foodThumb.innerHTML = `
                    <div class="foodEvery" onclick="foodClick()">
                    <div><img src="${foodPic}"></div>
                    <div><p>${foodName}</p></div>
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
function foodClick(){
    console.log("sbjsh");
}