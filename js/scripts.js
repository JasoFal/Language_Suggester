function languageSuggester(event) {
  event.preventDefault();
  let breakfastInput = parseInt(document.querySelector("input[name='breakfast']:checked").value);
  let movieInput = parseInt(document.querySelector("input[name='movie']:checked").value);
  let langInput = parseInt(document.querySelector("input[name='lang']:checked").value);
  let sportInput = parseInt(document.querySelector("input[name='sport']:checked").value);
  let stateInput = parseInt(document.querySelector("input[name='state']:checked").value);

  let totalValue = breakfastInput + movieInput + langInput + sportInput + stateInput;
  
  let result;
  if (totalValue <= 7) {
    result = 'Ruby';
  } else if (totalValue <= 14) {
    result = 'Python';
  } else if (totalValue <= 20) {
    result = 'C#';
  } else {
    result = 'ERROR';
  }

  document.getElementById('output').innerText = result;
}

window.addEventListener('load', function() {
  const form = this.document.getElementById('form-inputs');
  form.addEventListener('submit', languageSuggester);
});