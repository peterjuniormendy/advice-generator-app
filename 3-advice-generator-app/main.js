const adviceIdElement = document.querySelector("#advice-id");
const adviceContentElement = document.querySelector("#advice");
const adviceGenerationButton = document.querySelector(
  "#advice-generation-button"
);
const loader = document.querySelector("i");

const url = "https://api.adviceslip.com/advice";

generateAdvice();

adviceGenerationButton.addEventListener("click", function () {
  adviceContentElement.textContent = "";
  loader.style.display = "block";
  generateAdvice();
});

function generateAdvice() {
  fetch(url)
    .then((response) => response.json())
    .then((advice) => {
      loader.style.display = "none";
      adviceIdElement.textContent = advice.slip.id;
      adviceContentElement.textContent = advice.slip.advice;
    })
    .catch((error) => {
      error = "There was an error when fetching the data.";
      console.log(error);
    });
}
