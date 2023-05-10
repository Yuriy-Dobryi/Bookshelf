const list = document.querySelector('.foundations-list');
const loadMoreButton = document.querySelector('.foundations-more');

let itemsPerPage = window.innerWidth < 768 ? 4 : 6;
let start = 0;

showItems(start, itemsPerPage);

loadMoreButton.addEventListener('click', function () {
  start += itemsPerPage;
  if (start >= list.children.length) {
    start = 0;
  }
  showItems(start, itemsPerPage);
});

function showItems(start, count) {
  // Приховати усі елементи
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].classList.add('hidden');
  }

  // Показати requested елементи
  for (let i = start; i < start + count; i++) {
    const item = list.children[i];
    if (item) {
      item.classList.remove('hidden');

      let span = item.querySelector('span');
      if (!span) {
        span = document.createElement('span');
        item.insertBefore(span, item.firstChild);
      }
      span.classList.add('foundation-counter');
      span.textContent = '0' + (i + 1);
    }
  }

  const lastItemIndex = start + count - 1;
  if (lastItemIndex >= list.children.length - 1) {
    loadMoreButton.classList.add('up');
  } else {
    loadMoreButton.classList.remove('up');
  }

  const visibleItems = document.querySelectorAll('.foundation.visible');
  visibleItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '0';
      item.style.pointerEvents = 'none';
    }, index * 50);
  });

  setTimeout(() => {
    for (let i = start; i < start + count; i++) {
      const item = list.children[i];
      if (item) {
        item.classList.add('visible');
        item.style.opacity = '1';
        item.style.pointerEvents = 'auto';
      }
    }
  }, visibleItems.length * 50);
}
