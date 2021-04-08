$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu, .leng').toggleClass('active');
    $('.name,.profecional, .face__img ').toggleClass('schow');
  });
});
const ratingItemsList = document.querySelectorAll('.rating__icons');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach((item) =>
  item.addEventListner('click', () => {
    const { itemValue } = item.dataset;
    item.parentNode.dataset.totalValue = itemValue;
  })
);
ratingItemsArray();
