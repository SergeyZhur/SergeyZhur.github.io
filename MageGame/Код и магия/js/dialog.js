
'use strict';
// function getElement(nameClass) {
//   return document.querySelector(nameClass);
// };

// getElement('.setup-user-pic').addEventListener('mausedown', function(evt) {
// evt.preventDefault();
// });

// var startCoords = {
//   x: evt.clientX,
//   y: evt.clientY
// };

// function onMouseMove(moveEvt) {
// moveEvt.preventDefault();

// var shift = {
//   x: startCoords.x - moveEvt.clientX,
//   y: startCoords.y - moveEvt.clientY
// }

//   startCoords = {
//   x: moveEvt.clientX,
//   y: moveEvt.clientY
// };

// getElement('.setup').style.top = (getElement('.setup').offsetTop - shift.y) + 'px';
// getElement('.setup').style.left = (getElement('.setup').offsetLeft - shift.x) + 'px';
// }

// function onMouseUp(upEvt) {
// upEvt.preventDefault();

// document.removeEventListener('mausemove', onMouseMove);
// document.removeEventListener('mouseup', onMouseUp);
// }
// document.addEventListener('mausemove', onMouseMove);
// document.addEventListener('mouseup', onMouseUp);
(function () {

  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault)
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });


})();
