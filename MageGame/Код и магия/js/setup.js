'use strict';
// _____________________МАССИВ ДЛЯ ЗАПОЛНЕНИЯ 4-Х  КАЛДУНОВ________________________
window.wizards = [];
// ____________________ФУНКЦИИ_______________________
function show(element, removeNameClass) {
  element.classList.remove(removeNameClass || 'hidden');
};
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
  };
};
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
};
// _______________________________________________________________
function insertFragment() {
  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < window.wizards.length; i++) {
    fragment.appendChild(renderWizard(window.wizards[i]));
  };
  similarListElement.appendChild(fragment);
};
// _______________________________________________________________
function randomParam(arrParam) {
  var randomIndexArray = Math.floor(Math.random() * arrParam.length);

  return arrParam[randomIndexArray];
};
// _______________________________________________________________
show(document.querySelector('.setup-similar'));
show(document.querySelector('.setup'));
createObjectWizard();
insertFragment();
// _______________УРОК 4 _________________________________________________________


function getElement(nameClass) {
  return document.querySelector(nameClass);
};








function removeHiddenHandler() {
  getElement('.setup').classList.remove('hidden');
};

function addHiddenHandler() {
  getElement('.setup').classList.add('hidden');
};

// getElement('.setup-close').addEventListener('click', addHiddenHandler);
// getElement('.setup-open').addEventListener('click', removeHiddenHandler);
// Рабочий варинат


getElement('.setup-open').addEventListener('click', function(){
  removeHiddenHandler();

  document.addEventListener('keydown',function(evt){

  if (evt.keyCode === 27) {
console.log(55)
    addHiddenHandler();
   
      };
       evt.stopPropagation();
     
  })
});
// getElement('.setup-close').addEventListener('click', function(){
//   addHiddenHandler();

// });


// function closePopup() {
//   addHiddenHandler();
//   document.removeEventListener('keydown', onPopupEscPress);
// }
// function onPopupEscPress(evt) {
//   if (evt.keyCode === 27) {
//     closePopup();
//   };
// }

// getElement('.setup-close').addEventListener('keydown', function (evt) {
//   var buttonEsc = 27;

//   if (evt.keyCode === buttonEsc) {

//     addHiddenHandler();
//     // evt.stopPropagation();
//   };
// });

// getElement('.setup-open').addEventListener('keydown', function (evt) {
//   var buttonEnter = 13;

//   if (evt.keyCode === buttonEnter) {
//     removeHiddenHandler();
//     // evt.stopPropagation();
//   };
// });














// function getElement(pointClass) {
//   return document.querySelector(pointClass);
// };

// (function thingPopup() {
//   function removeHiddenHandler() {
//     return getElement('.setup').classList.remove('hidden');
//   };

//   function addHiddenHandler() {
//     return getElement('.setup').classList.add('hidden');
//   };

//   getElement('.setup-open').addEventListener('click', removeHiddenHandler);
//   getElement('.setup-close').addEventListener('click', addHiddenHandler);
// })();

// ______________________________________________________________

(function changeCharacter() {
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
    };
  };

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
    };
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
    };
  };

  getElement('.setup-wizard .wizard-coat').addEventListener('click', changeColorCoat);
  getElement('.setup-wizard .wizard-eyes').addEventListener('click', changeWizardEyes);
  getElement('.setup-fireball-wrap').addEventListener('click', changeFireball);
// CДЕЛАТЬ ОДНУ ФУНКЦИЮ ДЛЯ ШАБЛОНА , но в последней не fill a background
// function ww(arr, namefunc){
//   function namefunc()
// }
})();
// ______________________УРОК 5 ____________________________________