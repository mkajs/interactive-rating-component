///rating elements

const ratingElements = document.querySelectorAll(".rating");

const handleRatingStyle = function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("active"))
    ratingElements.forEach((el) => el.classList.remove("active"));

  e.target.classList.add("active");
  console.log("rating changed");
};

ratingElements.forEach((el) => el.addEventListener("click", handleRatingStyle));

////submit button
const submitButton = document.getElementById("submit-rating");

submitButton.addEventListener("click", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const activeRating =
    +document.getElementsByClassName("rating active")[0].dataset?.rating;
  document.getElementById("rate").textContent = ` ${activeRating} `;

  ///hide rating card
  const ratingCard = document.getElementsByClassName("rating-card")[0];
  ratingCard.style.opacity = "0";
  ratingCard.style.display = "none";
  ///show thanks card
  const thanksCard = document.getElementsByClassName("thanks-card")[0];
  thanksCard.style.opacity = "1";
  thanksCard.style.display = "flex";
}
