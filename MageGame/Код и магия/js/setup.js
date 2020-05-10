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

function popupHiddenAlways() {
  getElement('.overlay').classList.add('hidden');
}
popupHiddenAlways();


function getElement(nameClass) {
  return document.querySelector(nameClass);
};

function removeHiddenHandler() {
  getElement('.setup').classList.remove('hidden');
};

function addHiddenHandler() {
  getElement('.setup').classList.add('hidden');
};


function buttonEsc(evt) {
  var numberButtonEsc = 27;

  if (evt.keyCode === numberButtonEsc) {
    addHiddenHandler();
  };

};

function addHeandlerKeyEsc() {
  document.addEventListener('keydown', buttonEsc);
};

function deleteHeandlerInFocus(evt) {
  if (evt.type === 'focus') {
    document.removeEventListener('keydown', buttonEsc);
  };
};

function openButtonEnter(evt) {
  var numberButtonEnter = 13;

  if (evt.keyCode === numberButtonEnter) {
    removeHiddenHandler();
  };

}

function closeButtonEnter(evt) {
  var numberButtonEnter = 13;

  if (evt.keyCode === numberButtonEnter) {
    addHiddenHandler();
  }
}
// _____________________________________________________________
getElement('.setup-close').addEventListener('click', addHiddenHandler);
getElement('.setup-open').addEventListener('click', removeHiddenHandler);
getElement('.setup-user-name').addEventListener('blur', addHeandlerKeyEsc);
getElement('.setup-user-name').addEventListener('focus', deleteHeandlerInFocus);
addHeandlerKeyEsc();
getElement('.setup-open-icon').addEventListener('keydown', openButtonEnter);
getElement('.setup-close').addEventListener('keydown', closeButtonEnter);








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
