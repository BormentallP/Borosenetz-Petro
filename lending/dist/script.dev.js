"use strict";

var elements = document.querySelectorAll('.element');
var elementsArray = Array.prototype.slice.call(elements);
elementsArray.forEach(function (element) {
  element.addEventListener('click', function () {
    var active = document.querySelector('.active');
    active.classList.remove('active');
    this.classList.add('active');
  });
});
var menu = document.querySelector('.dots');
var menuSchow = document.querySelector('.main__menu-window ');
var closeWindow = document.querySelector('body');
menu.addEventListener('click', function () {
  menuSchow.classList.toggle('schow');
});