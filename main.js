const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
   let clickCounter = 0;

   arrow.addEventListener("click", function () {
      clickCounter++;

      movieList[i].style.transform = `translateX(${
         movieList[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
   });
});