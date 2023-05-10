// const listMarkup = foundations
//   .map(({ title, url, img }) => {
//     return `<li class="foundation">
//         		<a href="${url}"><img src="${img}" alt="${title}"></a>
//        		</li>`;
//   })
//   .join('');

// foundationsList.innerHTML = listMarkup;

// for (let i = 0; i < foundations.length; i++) {
//   const foundation = foundations[i];

//   const listItem = document.createElement('li');
//   listItem.classList.add('foundation');

//   const link = document.createElement('a');
//   link.href = foundation.url;

//   const img = document.createElement('img');
//   img.src = foundation.img;
//   img.alt = foundation.title;

//   link.appendChild(img);
//   listItem.appendChild(link);

//   foundationsList.appendChild(listItem);
// }

// const supportRef = document.querySelector('.foundations-list');
// console.log(supportRef);
// function renderSupport() {
//   const supportMarkup = foundations
//     .map(company => {
//       return `
//     		<h1>Privet</h1>
//     		<img src='${image}'>
//     `;
//     })
//     .join('');

//   supportRef.innerHTML = supportMarkup;
// }

// renderSupport();

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
}
