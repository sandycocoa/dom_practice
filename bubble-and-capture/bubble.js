const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const button = document.querySelector('button');

outer.addEventListener('click', () => {
  console.log('outer captured');
}, true);

inner.addEventListener('click', () => {
  console.log('inner captured');
}, true);

button.addEventListener('click', () => {
  console.log('button clicked');
  button.style.cssText = 'background-color: green'
});

inner.addEventListener('click', () => {
  console.log('inner bubbled');
});

outer.addEventListener('click', () => {
  console.log('outer bubbled');
});
