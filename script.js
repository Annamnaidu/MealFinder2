const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", () => {
menu.classList.toggle("show");
});

async function fetchdata() {
  let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
  let data = await response.json();
  console.log(data);

  // Loop through categories instead of data
  data.categories.map((item) => {
    let card = `
      <div class="item">
        <img src="${item.strCategoryThumb}" alt="">
        <h1>${item.strCategory}</h1>
        <p>${item.strCategoryDescription}</p>
      </div>
    `;
    // Example: show in document
    document.body.innerHTML += card;
  });
}

fetchdata();
