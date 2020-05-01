"use strict";
var MAIN_WIDTH = 420;
var MAIN_HEIGHT = 270;
var COORDINATES_X = 100;
var COORDINATES_Y = 10;
// переменные для последнего задания
var HISTOGRAM_HEIGHT = 150;
var HISTOGRAM_WIDTH = 40;

window.renderStatistics = function (ctx, names, times) {
 
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(COORDINATES_X + 10, COORDINATES_Y + 10, MAIN_WIDTH, MAIN_HEIGHT);

  ctx.fillStyle = "#7CFC00";
  ctx.fillRect(COORDINATES_X, COORDINATES_Y, MAIN_WIDTH, MAIN_HEIGHT);

  ctx.fillStyle = "#FF0000";
  ctx.font = '16px PT Mono';

  ctx.fillText("Ура вы победили!", MAIN_WIDTH / 2, MAIN_HEIGHT / 6);
  ctx.fillText("Список результатов:", MAIN_WIDTH / 2, MAIN_HEIGHT / 4);

  // • names — массив, с именами игроков прошедших уровень.Имя самого
  // игрока — Вы.Массив имён формируется случайным образом.
  // • times — массив, по длине совпадающий с массивом names.Массив содержит время прохождения уровня соответствующего игрока из массива names.Время прохождения уровня задано в миллисекундах.
  // Эта функция будет вызываться каждый раз, когда игрок проходит уровень
// for(var i = 0, k = 0; i < names.length; i++, k++) {
//   if(names.length===4){
//     ctx.fillText(names,150,140);
    
//   } 
//   if(times.length === 4){
  
//     ctx.fillText(Math.round(times[i]),222 , 250);
//   }
  
// }
// for(var i = 0; i < 4; i++){
//    ctx.fillStyle = "#FF0000";
// names[i] = ctx.fillRect(200, 200, 200+20, 200);
 
// }

  // ctx.fillStyle = "#FF0000";
  // names[1] = ctx.fillRect(200,200, HISTOGRAM_WIDTH, HISTOGRAM_HEIGHT);
  // names[2] = ctx.fillRect(100, 150, HISTOGRAM_WIDTH, HISTOGRAM_HEIGHT);
  // ctx.fillStyle = "#FF0000";

  // ctx.fillStyle = "#FF0000";
  // names[2] = ctx.fillRect(50, 200, HISTOGRAM_WIDTH, HISTOGRAM_HEIGHT);
  // for (var i = 0; i < names.length; i++) {
    // console.log(names[i]);
  // }


// console.log(times)
// for(var i = 0; i < names.length; i++) {
//   if(i=== 0) {
//     // ctx.fillText(names[i], 170, 200);
   
//     // fill text ( x y )  x - ширина y высота
//     ctx.fillStyle = "#FF0000";
//     ctx.fillRect(150, 100, HISTOGRAM_WIDTH,425);
//     // (150 / 100) * times[1]
    
//   };
// //   if (i === 1) {
// //     ctx.fillStyle = "#FF0000";
// //     ctx.fillRect(250, 100, HISTOGRAM_WIDTH, HISTOGRAM_HEIGHT);
// //   };
// //   if (i === 2) {
// //     ctx.fillStyle = "#FF0000";
// //     ctx.fillRect(350, 100, HISTOGRAM_WIDTH, HISTOGRAM_HEIGHT);
// //   };
// //   if(i === 3) {
// //     ctx.fillStyle = "#FF0000";
// //     ctx.fillRect(450, 100, HISTOGRAM_WIDTH, HISTOGRAM_HEIGHT );
// //   }
// }

  
// for(var i = 0; i < times.length; i++){
//   var a = getMaxOfArray(times);
//   if (times[i] === a) {
//     ctx.fillStyle = "#FF0000";
//     ctx.fillRect(250, 100, HISTOGRAM_WIDTH, HISTOGRAM_HEIGHT);
//     delete times[i];
    

//   }
//   var b = getMaxOfArray(times);
 
//   else if(times[i] === b) {
//     console.log(b)
//   }

// }
  // console.log(times)

// for(var i = 0; i< times.length; i++){
//   function getMaxOfArray(numArray) {
//     return Math.max.apply(null, numArray);
//   }
//   var maxElem = getMaxOfArray(times);


//   if (times[i] < maxElem) {
//     maxElem = times[i]
//     console.log(maxElem[i])
//   }
// }
// console.log(times)





  // function getMaxOfArray(numArray) {
  //   return Math.max.apply(null, numArray);
  // }
  // var maxTime = getMaxOfArray(times);
  // // var num = times.indexOf(maxTime);
  // // console.log(num)



  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;

  }

  
  times.sort(compareNumeric);
//  отсортировал массив от меньшего к большему
  

  


  function resultHeightHistogram(maxWidthPx, maxNumber, num, plusMinus) {
var numRound = Math.round(num);
  var maxNumberRound = Math.round(maxNumber);
  var result = (maxWidthPx * numRound) / maxNumberRound;

    return Math.round(Number(plusMinus + result));
}
  // console.log(resultHeightHistogram(150, times[3], times[0]))
// определение высоты гистограммы

  // console.log(resultHeightHistogram(150, times[3], times[0]))
// построение высоты каждой гистограммы
if(times[0]){
   ctx.fillText(names[0], 150, 270);
  
  ctx.fillRect(150, 250, HISTOGRAM_WIDTH, resultHeightHistogram(150, times[3], times[0], "-") );
  ctx.fillStyle = "#FF0000";
  ctx.fillText(Math.round(times[0]), 150, (270 - 30) - resultHeightHistogram(150, times[3], times[0], "+") );
}
if(times[1]){
  ctx.fillText(names[1], 220, 270);
  ctx.fillRect(220, 250, HISTOGRAM_WIDTH, resultHeightHistogram(150, times[3], times[1], "-"));
  ctx.fillStyle = "#FF0000";
  ctx.fillText(Math.round(times[1]), 220, (270 - 30) - resultHeightHistogram(150, times[3], times[1], "+"));
}

if(times[2]){
  ctx.fillText(names[2], 290, 270);
  ctx.fillRect(290, 250, HISTOGRAM_WIDTH, resultHeightHistogram(150, times[3], times[2], "-"));
  ctx.fillStyle = "#FF0000";
  ctx.fillText(Math.round(times[2]), 290, (270 - 30) - resultHeightHistogram(150, times[3], times[2], "+"));
}
if(times[3]){
  ctx.fillText(names[3], 360, 270);
  ctx.fillRect(360, 250, HISTOGRAM_WIDTH, resultHeightHistogram(150, times[3], times[3], "-"));
  ctx.fillStyle = "#FF0000";
  ctx.fillText(Math.round(times[3]), 360, (270 - 30) - resultHeightHistogram(150, times[3], times[3], "+"));
}



for(var i = 0; i < 4; i++) {
if(times[i]) {
  
}


}






















// for(var i=0; i<times.length; i++){
//   if(num === i) {
//     var m = i;
//     // максимальное время
//   }
//   if(m) {

//   }
 
// }


  // console.log(maxTime)
// максимальное время из массива

// if(maxTime) {
//   // ctx.fillStyle = "#FF0000";
//   //   ctx.fillRect(250, 100, HISTOGRAM_WIDTH, HISTOGRAM_HEIGHT);
// }
// if(times[0] === maxTime || 2 === 2) {
// console.log(2)
// }
//   if (times[1] === maxTime) {
//     console.log(23)
//   }
//   if (times[2] === maxTime) {
//     console.log(2333)
//   }
//   if (times[3] === maxTime) {
//     console.log(2111)
//   }
// for(var i = 0; i < times.length; i++) {
//   if(times[i] === 0) {

//   }
// }


























};


