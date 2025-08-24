{
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

{
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
    document.querySelectorAll(".item-details").forEach(el => el.remove());

    // render new ones
    categories.forEach((item) => {
      let card = `
      <div class="item-details">
          <div class="item">
            <h2>${item.strCategory}</h2>
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
