{
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

// fetchdata

{
async function fetchdata() {
  let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
  let data = await response.json();
  console.log(data);

  // Meals array from API
  let meals = data.meals;

  meals.forEach(item => {
    let data1 = `
    <div class="details">
        <div class="image-details">
        <img src="${item.strMealThumb}" alt="image" class="detailImage">
      </div>
      <div class="Content-Dettails">
         <h1>${item.strMeal}</h1>
         <span> </span>
         <h3> Category : ${item.strCategory}</h3>
         <h3> Source : <a href="https://www.youtube.com/watch?v=1IszT_guI08"> ${item.strYoutube}</a></h3>
         <div class="ingredients">
         <h3>Ingredients</h3>
           <ol>
            <li>${item.strIngredient1}</li>
            <li>${item.strIngredient2}</li>
            <li>${item.strIngredient3}</li>
            <li>${item.strIngredient4}</li>
            <li>${item.strIngredient5}</li>
            <li>${item.strIngredient6}</li>
            <li>${item.strIngredient7}</li>
            <li>${item.strIngredient8}</li>
          </ol>
        </div>  
      </div>
      </div>
        <h2 class="measure">Measure : </h2>
        
      <div class="measure-details">
          <ul>
            <li>${item.strMeasure1}</li>
            <li>${item.strMeasure2}</li>
            <li>${item.strMeasure3}</li>
            <li>${item.strMeasure4}</li>
            <li>${item.strMeasure5}</li>
            <li>${item.strMeasure6}</li>
            <li>${item.strMeasure7}</li>
            <li>${item.strMeasure8}</li>
          </ul>
      </div>
      <div class="instructions">
      <h2>Instructions : </h2>
      <ul>
      <li>${item.strInstructions}</li>
      </ul>
    <h3 class="heading">CATEGORIES</h3>
      </div>           
    `;
    // Append to body (or any container you want)
    document.body.innerHTML += data1;
  });

  
  let allCategories = []; // store all categories

  async function fetchdata() {
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let data = await response.json();
    console.log(data);

    allCategories = data.categories; // keep the data
    renderCategories(allCategories); // first render
  }

  function renderCategories(categories) {
    // clear old results
    document.querySelectorAll(".item-details1").forEach(el => el.remove());

    // render new ones
    categories.forEach((item) => {
      let card = `
      <div class="item-details1">
          <div class="item">
            <h6>${item.strCategory}</h6>
            <a href="../Vegetarian/index.html">
             <img src="${item.strCategoryThumb}" alt=""></a>
        </div>
      </div>
      `;
      document.querySelector(".heading").insertAdjacentHTML("afterend", card);
    });
  }

  // 🔎 search feature
  document.querySelector(".search-container input").addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    const filtered = allCategories.filter(cat =>
      cat.strCategory.toLowerCase().includes(searchText)
    );
    renderCategories(filtered);
  });

  fetchdata();
}


fetchdata();
}

 