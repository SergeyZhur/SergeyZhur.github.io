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


  
  // ctx.fillStyle = "#FF0000";
  // names[1] = ctx.fillRect(200,200, HISTOGRAM_WIDTH, HISTOGRAM_HEIGHT);
  
  // ctx.fillStyle = "#FF0000";
  // names[2] = ctx.fillRect(50, 200, HISTOGRAM_WIDTH, HISTOGRAM_HEIGHT);
  // for (var i = 0; i < names.length; i++) {
  //   console.log(names[i]);
  // }
}
