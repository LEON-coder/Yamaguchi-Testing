let topButton = document.querySelector('.top-button');
let downButton = document.querySelector('.down-button');
let tableTopFrame = document.querySelector('.table-top-frame');


topButton.addEventListener('click', function() {
  tableTopFrame.classList.add('table-active');
});

downButton.addEventListener('click', function() {
  tableTopFrame.classList.remove('table-active');
});