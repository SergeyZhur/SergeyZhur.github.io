const allImages = document.querySelectorAll('.item');
const next = document.querySelector('.next');
const back = document.querySelector('.back');

let count = 0;


function plus() {

  if (count <= 0) {
    count = 0;
  }

  count++

  if (count === allImages.length) {

    count = 0;

    allImages[count].style.display = 'block';
    allImages[allImages.length - 1].style.display = 'none';

    return
  }

  allImages[count - 1].style.display = 'none';
  allImages[count].style.display = 'block';

}

function minus() {

  count--;

  if (count >= 0) {

    allImages[count + 1].style.display = 'none';
    allImages[count].style.display = 'block';
  }

  if (count < 0 && count > -3) {

    count = allImages.length - 1;

    allImages[0].style.display = 'none';
    allImages[count].style.display = 'block';
  }
}

next.addEventListener('click', plus);
back.addEventListener('click', minus)


// Вариант 2 

// __________________________________________________________________________________________
// const allImages = document.querySelectorAll('.item');
// const next = document.querySelector('.next');
// const back = document.querySelector('.back');

// let count = 0;


// function plus() {
//   allImages[count].style.display = 'none';

//   count = count === allImages.length - 1
//     ? 0
//     : count + 1;

//   allImages[count].style.display = 'block';
// }

// function minus() {
//   allImages[count].style.display = 'none';

//   count = count === 0
//     ? allImages.length - 1
//     : count - 1;

//   allImages[count].style.display = 'block';
// }

// next.addEventListener('click', plus);
// back.addEventListener('click', minus)