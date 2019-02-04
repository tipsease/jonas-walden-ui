const social = document.querySelectorAll('.social a');
const social2 = document.querySelectorAll('.social i');

social.forEach(link => link.addEventListener('click', box));

function box(e) {
  e.preventDefault();
  social2.style.color = 'red';
}
