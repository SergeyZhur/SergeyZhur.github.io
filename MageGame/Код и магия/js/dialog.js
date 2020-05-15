'use strict';

(function () {

  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');

  function getElement(nameClass) {
    return document.querySelector(nameClass);
  }

  dialogHandler.addEventListener('mousedown', function (evt) {

    evt.preventDefault();

    function startCoordsXandY() {
      setupDialogElement.style.top = 80 + 'px';
      setupDialogElement.style.left = 50 + '%';
    }
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    function onMouseMove(moveEvt) {

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

    function onMouseUp(upEvt) {

      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {

        function onClickPreventDefault (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onClickPopupCloseRemoveHandlers() {
      getElement('.setup').classList.add('hidden');
    }

    function onClickPopupCloseAndDumpYX() {

      getElement('.setup').classList.add('hidden');
      startCoordsXandY();
      //   x: setupDialogElement.getBoundingClientRect().top,
      //   y: setupDialogElement.getBoundingClientRect().left
    }
    getElement('.setup-close').addEventListener('click', onClickPopupCloseAndDumpYX);

    function onKeydownPopupCloseAndDumpYX(evt) {
      var numberButtonEnter = 13;

      if (evt.keyCode === numberButtonEnter) {
        onClickPopupCloseRemoveHandlers();
        startCoordsXandY();
      }

    }
    getElement('.setup-close').addEventListener('keydown', onKeydownPopupCloseAndDumpYX);
  });

})();
