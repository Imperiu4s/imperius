document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

document.querySelectorAll(".movie").forEach(movie => {
  let ratings = [];

  movie.querySelectorAll(".star").forEach((star, index) => {
    star.addEventListener("click", () => {
      ratings.push(index + 1);
      updateRating(movie, ratings);
    });
  });
});

function updateRating(movie, ratings) {
  const avg = ratings.reduce((a,b)=>a+b,0) / ratings.length;
  movie.querySelector(".rating").innerText =
    `★ ${avg.toFixed(1)} / 5 (${ratings.length} értékelés)`;
}
