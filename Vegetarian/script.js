{
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

  // 🔎 search feature
 {

  let searhdata=document.querySelector(".search-container input");
  searhdata.addEventListener("keyup", function (){
    let filter=searhdata.value.toLowerCase();
    let meals=document.querySelectorAll(".mealsDetails");
    meals.forEach(meal => {
      let text=meal.querySelector("h4").textContent.toLowerCase();
      if (text.includes(filter)) {
        meal.style.display="inline";
      }
      else{
        meal.style.display="none";
      }
      
    });
  });

}
