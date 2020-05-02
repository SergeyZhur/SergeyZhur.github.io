"use strict";
var MAIN_WIDTH = 420;
var MAIN_HEIGHT = 270;
var COORDINATES_X = 100;
var COORDINATES_Y = 10;
// переменные для последнего задания
var HISTOGRAM_HEIGHT = 150;
var HISTOGRAM_WIDTH = 40;
var MAIN_HEIGHT_GAP = 250;
var GAP_PLUS = 50;
window.renderStatistics = function (ctx, names, times) {
 
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(COORDINATES_X + 10, COORDINATES_Y + 10, MAIN_WIDTH, MAIN_HEIGHT);

  ctx.fillStyle = "#7CFC00";
  ctx.fillRect(COORDINATES_X, COORDINATES_Y, MAIN_WIDTH, MAIN_HEIGHT);

  ctx.fillStyle = "#FF0000";
  ctx.font = '16px PT Mono';

  ctx.fillText("Ура вы победили!", MAIN_WIDTH / 2, MAIN_HEIGHT / 6);
  ctx.fillText("Список результатов:", MAIN_WIDTH / 2, MAIN_HEIGHT / 4);


// __________________________________________________



  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  var maxNum = getMaxOfArray(times);
// узнаем максимальное число в массиве

function formulaHeight(arrNum) {
  return (HISTOGRAM_HEIGHT * arrNum) / maxNum;
}
// Формула вычисления высоты в px для каждого числа 




function arrayHeightPx(){
var arrHeightEmpty = [];

  for (var i = 0; i < times.length; i++) {
    arrHeightEmpty.push(Math.round(formulaHeight(times[i]))) 
  }

  return arrHeightEmpty;
}

// Массив отсортированный от меньшего к большему, с конкретной высотой для каждого столбца (округленные числа)
  console.log(arrayHeightPx())
  console.log(times)


  // var HISTOGRAM_HEIGHT = 150;
  // var HISTOGRAM_WIDTH = 40;
  // var MAIN_HEIGHT_GAP = 270;
  // var GAP_PLUS = 50;


for(var i = 0; i < times.length; i++) {

  ctx.fillRect(HISTOGRAM_HEIGHT, (MAIN_HEIGHT_GAP - arrayHeightPx()[i]), HISTOGRAM_WIDTH, arrayHeightPx()[i]);

  HISTOGRAM_HEIGHT += 50+40;
}


//   function resultHeightHistogram(maxWidthPx, maxNumber, num, plusMinus) {
// var numRound = Math.round(num);
//   var maxNumberRound = Math.round(maxNumber);
//   var result = (maxWidthPx * numRound) / maxNumberRound;

//     return Math.round(Number(plusMinus + result));
// }
  // console.log(resultHeightHistogram(150, times[3], times[0]))
// определение высоты гистограммы

  // console.log(resultHeightHistogram(150, times[3], times[0]))
// построение высоты каждой гистограммы
// if(times[0]){
//    ctx.fillText(names[0], 150, 270);
  
//   ctx.fillRect(150, 250, HISTOGRAM_WIDTH, resultHeightHistogram(150, times[3], times[0], "-") );
//   ctx.fillStyle = "#FF0000";
//   ctx.fillText(Math.round(times[0]), 150, (270 - 30) - resultHeightHistogram(150, times[3], times[0], "+") );
// }
// if(times[1]){
//   ctx.fillText(names[1], 220, 270);
//   ctx.fillRect(220, 250, HISTOGRAM_WIDTH, resultHeightHistogram(150, times[3], times[1], "-"));
//   ctx.fillStyle = "#FF0000";
//   ctx.fillText(Math.round(times[1]), 220, (270 - 30) - resultHeightHistogram(150, times[3], times[1], "+"));
// }

// if(times[2]){
//   ctx.fillText(names[2], 290, 270);
//   ctx.fillRect(290, 250, HISTOGRAM_WIDTH, resultHeightHistogram(150, times[3], times[2], "-"));
//   ctx.fillStyle = "#FF0000";
//   ctx.fillText(Math.round(times[2]), 290, (270 - 30) - resultHeightHistogram(150, times[3], times[2], "+"));
// }
// if(times[3]){
//   ctx.fillText(names[3], 360, 270);
//   ctx.fillRect(360, 250, HISTOGRAM_WIDTH, resultHeightHistogram(150, times[3], times[3], "-"));
//   ctx.fillStyle = "#FF0000";
//   ctx.fillText(Math.round(times[3]), 360, (270 - 30) - resultHeightHistogram(150, times[3], times[3], "+"));
// }



// for(var i = 0; i < 4; i++) {
// if(times[i]) {
//   ctx.fillText(names[i], 150, 270);

//   ctx.fillRect(150, 250, HISTOGRAM_WIDTH, resultHeightHistogram(150, times[3], times[i], "-"));
//   ctx.fillStyle = "#FF0000";
//   ctx.fillText(Math.round(times[i]), 150, (270 - 30) - resultHeightHistogram(150, times[3], times[i], "+"));

// }


// }






















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


