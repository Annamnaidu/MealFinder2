{
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

async function fetchdata() {
  let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
  let data = await response.json();
  console.log(data);

  // Meals array from API
  let meals = data.meals;

  meals.forEach(item => {
    let data1 = `
      <div class="details">
        <img src="${item.strMealThumb}" alt="image" class="detailImage">
        <h1>${item.strMeal}</h1>

      </div>
    `;

    // Append to body (or any container you want)
    document.body.innerHTML += data1;
  });
}

fetchdata();
