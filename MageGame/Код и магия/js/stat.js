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
var WIDTH_X_HISTOGRAM = 150;
var MARGIN_BOTTOM = 10;

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(COORDINATES_X + 10, COORDINATES_Y + 10, MAIN_WIDTH, MAIN_HEIGHT);

  ctx.fillStyle = "#7CFC00";
  ctx.fillRect(COORDINATES_X, COORDINATES_Y, MAIN_WIDTH, MAIN_HEIGHT);

  ctx.fillStyle = "#000000";
  ctx.font = '16px PT Mono';

  ctx.fillText("Ура вы победили!", MAIN_WIDTH / 2, MAIN_HEIGHT / 6);
  ctx.fillText("Список результатов:", MAIN_WIDTH / 2, MAIN_HEIGHT / 4);
  // __________________________________________________
  
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  // узнаем максимальное число в массиве
  function formulaHeight(arrNum) {
    var maxNum = getMaxOfArray(times);
    return (HISTOGRAM_HEIGHT * arrNum) / maxNum;
  }
  // Формула вычисления высоты в px для каждого числа 
  function arrayHeightPx() {
    var arrHeightEmpty = [];
    for (var i = 0; i < times.length; i++) {
      arrHeightEmpty.push(Math.round(formulaHeight(times[i])));
    }
    return arrHeightEmpty;
  }
  function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  // функция на случайное число от 1 до 100
  function colorHistogram(saturation) {
 //  тон, насыщенность и светлота HSL
    var colorHistogramBlue = "hsl(240, saturation, 50%)";
    return colorHistogramBlue.replace(/saturation/g, String(saturation) + "%");
  }
// функция для подстановки числа насыщенности и возвращает строку

  function histogram() {
    var arrayHeight = arrayHeightPx();
    var widthXhistogram = WIDTH_X_HISTOGRAM;
    for (var i = 0; i < times.length; i++) {
      
      ctx.fillStyle = "#000000";
      ctx.fillText(names[i], widthXhistogram, MAIN_HEIGHT);

      if (names[i] === "Вы") {
        ctx.fillStyle = "rgba(255, 0, 0, 1)";
      }
      if (names[i] !== "Вы") {
        ctx.fillStyle = colorHistogram(randomInteger(1, 100));
      }

      ctx.fillRect(widthXhistogram, MAIN_HEIGHT_GAP - arrayHeight[i], HISTOGRAM_WIDTH, arrayHeight[i]);
      ctx.fillStyle = "#000000";
      ctx.fillText(Math.round(times[i]), widthXhistogram, MAIN_HEIGHT_GAP - arrayHeight[i] - MARGIN_BOTTOM);
      widthXhistogram += GAP_PLUS + HISTOGRAM_WIDTH;
    }
  }
  histogram();
};











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