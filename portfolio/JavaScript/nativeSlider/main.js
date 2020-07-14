const allImages = document.querySelectorAll('.item');
const next = document.querySelector('.next');
const back = document.querySelector('.back');

let count = 0;

// .hide {
//   display:none;
// }
// .block {
//   display:block
// }

// if(allImages[0].classList.contains("active")) {
//    allImages[0].classList.add('block')
//    }

// ["Клубника", "Банан", "Манго"]

// var pos = fruits.indexOf('Банан');
// // 1

function nextSlide() {
  count++
  if (count === 1) {
    allImages[count].classList.add('block');
  }
  console.log(count)
  if (count === 2 && count != 1) {
    allImages[1].classList.add('hide');
    allImages[count].classList.add('block');
    // console.log(count)
  }
  if (count === 2) {
    count = 0;
    allImages[2].classList.add('hide');
    allImages[0].classList.add('block');

  }
  // allImages[count-1].classList.add('none')

}

function backSlide() {


  count--
  console.log(allImages[count])
  if (count >= 0) {
    allImages[count].classList.add('block');
  }
}


next.addEventListener('click', nextSlide)
back.addEventListener('click', backSlide)
// next.addEventListener('click', function() {
//   for(let i = 0; i<allImages.length; i++) {
//   if(allImages[0]) {
//     allImages[count].style.display = 'block';
//     // allImages[count-1].style.display = 'none';
//   }
// if(allImages[1]) {
//   allImages[0].style.display = 'none';
//    allImages[1].style.display = 'block';
//    return 
// }
//    if(allImages[2]) {
//        allImages[1].style.display = 'none';
//    allImages[2].style.display = 'block';
//     }
// }
// })



// next.addEventListener('click', function() {

//   if(allImages.length <= 3) {
//   count++
//     // console.log(count)
//     allImages[count].style.display = 'block';
//     allImages[count-1].style.display = 'none';

// }

// })

// back.addEventListener('click', function() {

//   if(allImages.length >= 3) {
//   count--
//     console.log(count)
//     allImages[count-1].style.display = 'none';
//     allImages[count].style.display = 'block';

// }

// })

// next.addEventListener('click', function() {
//   console.log(count)
//   if(count++ <=1) {
//     allImages[count].style.display = 'block';
//     allImages[0].style.display = 'none';

//      console.log()
//   }


// })


// back.addEventListener('click', function() {
//   // console.log(count)
//   if(count <=1) {
//     allImages[0].style.display = 'block';
//     allImages[count].style.display = 'none';

//      console.log()
//   }


// })