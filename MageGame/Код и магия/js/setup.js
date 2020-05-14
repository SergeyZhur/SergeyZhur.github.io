'use strict';
// _____________________МАССИВ ДЛЯ ЗАПОЛНЕНИЯ 4-Х  КАЛДУНОВ________________________
window.wizards = [];
// ____________________ФУНКЦИИ_______________________
function show(element, removeNameClass) {
  element.classList.remove(removeNameClass || 'hidden');
}
// _______________________________________________________________
function createObjectWizard() {
  // ___Массив ИМЕН_____________
  var Names = [
    'Иван',
    'Хуан',
    'Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  // __________________МАССИВ ФАМИЛИЙ ______________________
  var Surnames = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
  // ___________МАССИВ ЦВЕТОВ ПЛАЩЕЙ_________________________
  var CoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  // ________________МАССИВ ЦВЕТ ГЛАЗ ___________________
  var EyesColors = [
    'rgb(0, 0, 0)',
    'rgb(255, 0, 0)',
    'rgb(0, 0, 255)',
    'rgb(255, 255, 0)',
    'rgb(0, 128, 0)'
  ];

  var numberWizards = 4;

  for (var i = 0; i < numberWizards; i++) {
    var obj = {
      name: randomParam(Names) + ' ' + randomParam(Surnames),
      coatColor: randomParam(CoatColors),
      eyesColor: randomParam(EyesColors)
    };
    window.wizards.push(obj);
  }
}
// _______________________________________________________________
function renderWizard(wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}
// _______________________________________________________________
function insertFragment() {
  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < window.wizards.length; i++) {
    fragment.appendChild(renderWizard(window.wizards[i]));
  }
  similarListElement.appendChild(fragment);
}
// _______________________________________________________________
function randomParam(arrParam) {
  var randomIndexArray = Math.floor(Math.random() * arrParam.length);

  return arrParam[randomIndexArray];
}
// _______________________________________________________________
show(document.querySelector('.setup-similar'));
// show(document.querySelector('.setup'));
createObjectWizard();
insertFragment();
// _______________УРОК 4 _________________________________________________________
// var handlersList = [
//   {
//     flag: true,

//     nameAddHandlers: {
//       1:"getElement('.setup-open').addEventListener('click', onClickPopupOpenAddHandlers)"
//     }

//   },

//   {

//     flag: false,

//     nameRemoveHandlers: [

//       "getElement('.setup-open').addEventListener('click', onClickPopupOpenAddHandlers)"

//     ]

//   }

// ];
// console.log(handlersList[1].nameRemoveHandlers.length)
// function s() {

//   return handlersList[1].nameRemoveHandlers[1]
// }



// function gg(typeHandler, addOrRemove) {
// var as;

// console.log(as)
// }

// function onClickOpenPopupAddAllHandlers(onClickOpenPopupAddHandlersWithArray) {
//   for (var i = 0; i < handlersList[1].nameRemoveHandlers.length; i++) {
//     onClickOpenPopupAddHandlersWithArray = handlersList[1].nameRemoveHandlers[i];
    
//   }

// }

// function onClickClosePopupRemoveAllHandlers(onClickOpenPopupRemoveHandlersWithArray) {
//   for (var i = 0; i < handlersList[1].nameRemoveHandlers.length; i++) {
//     onClickOpenPopupRemoveHandlersWithArray = handlersList[2].nameRemoveHandlers[i];
//   }

// }


// getElement('.setup-user-name').addEventListener('click', onClickOpenPopupAddAllHandlers(getElement('.setup-user-name')));

// getElement('.setup-user-name').addEventListener('click', onClickClosePopupRemoveAllHandlers())

// 1) при клике на иконку добавлять все события
// 2) при enter входе на иконку добавлять события

// 3) при клике на крестик (выходить из попап) удалять события
// 4) при enter на крестик (выходить из попап) удалять события


// // _____________________________________________________________

//  {
//   onClickPopupOpenAddHandlers();
//   addHandlers();
//   onKeydownEnterPopupOpenAddHandlers();
// });

// getElement('.setup-open-icon').addEventListener('keydown', function () {
//   onKeydownEnterPopupOpenAddHandlers();
//   onClickPopupOpenAddHandlers();
//   addHandlers();
// });

//  {
//   onClickPopupCloseRemoveHandlers();
//   // removeHandlers();
// });
// // _____________________


// getElement('.setup-close').addEventListener('keydown', function () {
//   onKeydownEnterPopupCloseRemoveHandlers();

// });

// function addHandlers() {


// }

function getElement(nameClass) {
  return document.querySelector(nameClass);
}

// function onFocusRemoveHandlerClosePopup() {
//   document.removeEventListener('keydown', onKeydownEscPopupCloseRemoveHandlers);
// }
// getElement('.setup-user-name').addEventListener('focus', onFocusRemoveHandlerClosePopup);

// // _______________________________________________________________________________________
// function onBlurAddHandlerPopupClose() {
//   document.addEventListener('keydown', onKeydownEscPopupCloseRemoveHandlers);
// }
// getElement('.setup-user-name').addEventListener('blur', onBlurAddHandlerPopupClose);

// // _______________________________________________________________________________________
// function onKeydownEscPopupCloseRemoveHandlers(evt) {
//   var buttonEsc = 27;

//   if (evt.keyCode === buttonEsc) {
//     onClickPopupCloseRemoveHandlers();
//   }

// }
// document.addEventListener('keydown', onKeydownEscPopupCloseRemoveHandlers);

// // _______________________________________________________________________________________
// function onKeydownEnterPopupCloseRemoveHandlers(evt) {
//   var numberButtonEnter = 13;

//   if (evt.keyCode === numberButtonEnter) {
//     onClickPopupCloseRemoveHandlers();
//   }

// }
// getElement('.setup-close').addEventListener('keydown', onKeydownEnterPopupCloseRemoveHandlers);


// function onClickPopupOpenAddHandlers() {
//   getElement('.setup').classList.remove('hidden');
// }
// getElement('.setup-open').addEventListener('click', onClickPopupOpenAddHandlers);


// function onClickPopupCloseRemoveHandlers() {
//   getElement('.setup').classList.add('hidden');
// }
// getElement('.setup-close').addEventListener('click', onClickPopupCloseRemoveHandlers);

// function onKeydownEnterPopupOpenAddHandlers(evt) {
//   var numberButtonEnter = 13;

//   if (evt.keyCode === numberButtonEnter) {
//     onClickPopupOpenAddHandlers();
//   }

// }
// getElement('.setup-open').addEventListener('keydown', onKeydownEnterPopupOpenAddHandlers);

// (function changeCharacter() {
//   var counter = 0;

//   function changeColorCoat() {

//     var colorCoat = [
//       'rgb(101, 137, 164)',
//       'rgb(241, 43, 107)',
//       'rgb(146, 100, 161)',
//       'rgb(56, 159, 117)',
//       'rgb(215, 210, 55)',
//       'rgb(0, 0, 0)'
//     ];

//     getElement('.setup-wizard .wizard-coat').style.fill = colorCoat[counter];
//     getElement('.input-coat-color').value = colorCoat[counter];

//     if (counter++ >= colorCoat.length - 1) {
//       counter = 0;
//     }
//   }

//   function changeWizardEyes() {

//     var wizardEyes = [
//       'rgb(0, 0, 0)',
//       'rgb(255, 0, 0)',
//       'rgb(0, 0, 255)',
//       'rgb(255, 255, 0)',
//       'rgb(0, 128, 0)'
//     ];

//     getElement('.setup-wizard .wizard-eyes').style.fill = wizardEyes[counter];
//     getElement('.input-eyes-color').value = wizardEyes[counter];

//     if (counter++ >= wizardEyes.length - 1) {
//       counter = 0;
//     }
//   }

//   function changeFireball() {

//     var fireballs = [
//       '#ee4830',
//       '#30a8ee',
//       '#5ce6c0',
//       '#e848d5',
//       '#e6e848'
//     ];

//     getElement('.setup-fireball-wrap').style.background = fireballs[counter];
//     getElement('.input-fireball-color').value = fireballs[counter];
//     // console.log(document.querySelector('.input-coat-color').value = fireballs[counter]);
//     // Добавляет значение цвета в скрытый инпут
//     if (counter++ >= fireballs.length - 1) {
//       counter = 0;
//     }
//   }

//   getElement('.setup-wizard .wizard-coat').addEventListener('click', changeColorCoat);
//   getElement('.setup-wizard .wizard-eyes').addEventListener('click', changeWizardEyes);
//   getElement('.setup-fireball-wrap').addEventListener('click', changeFireball);
// })();

function onClickPopupOpenAddHandlers() {
  getElement('.setup').classList.remove('hidden');
}
function onFocusRemoveHandlerClosePopup() {
  document.removeEventListener('keydown', onKeydownEscPopupCloseRemoveHandlers);
}
function onBlurAddHandlerPopupClose() {
  document.addEventListener('keydown', onKeydownEscPopupCloseRemoveHandlers);
}
function onKeydownEscPopupCloseRemoveHandlers(evt) {
  var buttonEsc = 27;

  if (evt.keyCode === buttonEsc) {
    onClickPopupCloseRemoveHandlers();
  }

}
function onKeydownEnterPopupCloseRemoveHandlers(evt) {
  var numberButtonEnter = 13;

  if (evt.keyCode === numberButtonEnter) {
    onClickPopupCloseRemoveHandlers();
  }

}
function onClickPopupCloseRemoveHandlers() {
  getElement('.setup').classList.add('hidden');
}
function changeCharacter() {
  var counter = 0;

  function changeColorCoat() {

    var colorCoat = [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ];

    getElement('.setup-wizard .wizard-coat').style.fill = colorCoat[counter];
    getElement('.input-coat-color').value = colorCoat[counter];

    if (counter++ >= colorCoat.length - 1) {
      counter = 0;
    }
  }

  function changeWizardEyes() {

    var wizardEyes = [
      'rgb(0, 0, 0)',
      'rgb(255, 0, 0)',
      'rgb(0, 0, 255)',
      'rgb(255, 255, 0)',
      'rgb(0, 128, 0)'
    ];

    getElement('.setup-wizard .wizard-eyes').style.fill = wizardEyes[counter];
    getElement('.input-eyes-color').value = wizardEyes[counter];

    if (counter++ >= wizardEyes.length - 1) {
      counter = 0;
    }
  }

  function changeFireball() {

    var fireballs = [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ];

    getElement('.setup-fireball-wrap').style.background = fireballs[counter];
    getElement('.input-fireball-color').value = fireballs[counter];
    // console.log(document.querySelector('.input-coat-color').value = fireballs[counter]);
    // Добавляет значение цвета в скрытый инпут
    if (counter++ >= fireballs.length - 1) {
      counter = 0;
    }
  }

  getElement('.setup-wizard .wizard-coat').addEventListener('click', changeColorCoat);
  getElement('.setup-wizard .wizard-eyes').addEventListener('click', changeWizardEyes);
  getElement('.setup-fireball-wrap').addEventListener('click', changeFireball);
}
function onKeydownEnterPopupOpenAddHandlers(evt) {
  var numberButtonEnter = 13;

  if (evt.keyCode === numberButtonEnter) {
    onClickPopupOpenAddHandlers();
  }

}


function onClickAddHandlers() {
  onClickPopupOpenAddHandlers();
  getElement('.setup-user-name').addEventListener('focus', onFocusRemoveHandlerClosePopup);
  getElement('.setup-user-name').addEventListener('blur', onBlurAddHandlerPopupClose);
  document.addEventListener('keydown', onKeydownEscPopupCloseRemoveHandlers);
  getElement('.setup-close').addEventListener('keydown', onKeydownEnterPopupCloseRemoveHandlers);
  getElement('.setup-close').addEventListener('click', onClickPopupCloseRemoveHandlers);
  changeCharacter();
}
getElement('.setup-open').addEventListener('click', onClickAddHandlers);


function onKeydownAddHandlers() {
  onClickPopupOpenAddHandlers();
  document.addEventListener('keydown', onKeydownEscPopupCloseRemoveHandlers);
  onKeydownEnterPopupOpenAddHandlers();
  getElement('.setup-user-name').addEventListener('focus', onFocusRemoveHandlerClosePopup);
  getElement('.setup-user-name').addEventListener('blur', onBlurAddHandlerPopupClose);
  getElement('.setup-close').addEventListener('keydown', onKeydownEnterPopupCloseRemoveHandlers);
  getElement('.setup-close').addEventListener('click', onClickPopupCloseRemoveHandlers);
  changeCharacter();
}
getElement('.setup-open').addEventListener('keydown', onKeydownAddHandlers);


function onClickRemoveHandlers() {
  onClickPopupCloseRemoveHandlers();
  getElement('.setup-user-name').removeEventListener('focus', onFocusRemoveHandlerClosePopup);
  getElement('.setup-user-name').removeEventListener('blur', onBlurAddHandlerPopupClose);
  document.addEventListener('keydown', onKeydownEscPopupCloseRemoveHandlers);
  getElement('.setup-close').removeEventListener('keydown', onKeydownEnterPopupCloseRemoveHandlers);
  getElement('.setup-close').removeEventListener('click', onClickPopupCloseRemoveHandlers);
  getElement('.setup-close').removeEventListener('click', changeCharacter);

}
getElement('.setup-close').addEventListener('click', onClickRemoveHandlers);


function onKeydownRemoveHandlers() {
  onClickPopupCloseRemoveHandlers();
  getElement('.setup-user-name').removeEventListener('focus', onFocusRemoveHandlerClosePopup);
  getElement('.setup-user-name').removeEventListener('blur', onBlurAddHandlerPopupClose);
  document.addEventListener('keydown', onKeydownEscPopupCloseRemoveHandlers);
  getElement('.setup-close').removeEventListener('keydown', onKeydownEnterPopupCloseRemoveHandlers);
  getElement('.setup-close').removeEventListener('click', onClickPopupCloseRemoveHandlers);
  getElement('.setup-close').removeEventListener('click', changeCharacter);
}
getElement('.setup-close').addEventListener('keydown', onKeydownRemoveHandlers);