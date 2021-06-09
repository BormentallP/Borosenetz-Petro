const elements = document.querySelectorAll('.element');
const elementsArray = Array.prototype.slice.call(elements);

elementsArray.forEach((element) => {
  element.addEventListener('click', function () {
    var active = document.querySelector('.active');
    active.classList.remove('active');
    this.classList.add('active');
  });
});

const menu = document.querySelector('.dots');
const menuSchow = document.querySelector('.main__menu-window ');

const closeWindow = document.querySelector('body');

menu.addEventListener('click', function () {
  menuSchow.classList.toggle('schow');
});
