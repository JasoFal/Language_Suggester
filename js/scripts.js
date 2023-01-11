function languageSuggester(event) {
  event.preventDefault();

  let breakfastInput = document.getElementById("input[id#`breakfast`]:checked");
  let movieInput = document.querySelector("input[name=`movie`]:checked");
  let langInput = document.querySelector("input[name=`lang`]:checked");
  let sportInput = document.querySelector("input[name=`sport`]:checked");
  let stateInput = document.querySelector("input[name=`state`]:checked");

  let totalValue = breakfastInput + movieInput + langInput + sportInput + stateInput;
  let result;
  if (totalValue <= 7) {
    result = `Ruby`;
  } else if (totalValue <= 14) {
    result = `Python`;
  } else if (totalValue <= 20) {
    result = `C#`;
  } else {
    result = `ERROR`;
  }

  document.getElementById(`output`).innerText = result;
}

window.addEventListener(`load`, function() {
  const form = this.document.getElementById(`form-inputs`);
  form.addEventListener(`submit`, languageSuggester);
});