const price = document.getElementById('price');
const liters = document.getElementById('liters');
const btn = document.getElementById('calc');
const result = document.getElementById('result');

btn.addEventListener('click', function() {
  let p = parseFloat(price.value);
  let l = parseFloat(liters.value);
  let total = p * l;
  result.textContent = 'Total: AED ' + total.toFixed(2);
});