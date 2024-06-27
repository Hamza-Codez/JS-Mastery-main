const form = document.querySelector('form');
form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const Guide = document.querySelector('#weight-guide');
  Guide.innerHTML =null;
  
  if(height < 0 || height === '' || isNaN(height)){
    results.innerHTML = `Please enter a valid height ${height}`
  }
  else if(weight < 0 || weight === '' || isNaN(weight)){
    results.innerHTML = `Please enter a valid weight ${weight}`
  }
  else{
    const bmi = (weight / ((height * height)/10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`
    if (bmi < 18.6) {
        Guide.innerHTML = `<b>Under Weight = Less than 18.6<b>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        Guide.innerHTML = `<b>Normal Range = 18.6 and 24.9<b>`;
    } else if (bmi > 24.9) {
        Guide.innerHTML = `<b>Overweight = Greater than 24.9<b>`;
    }  
  }
})
