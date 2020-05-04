'use strict';
// сделать wizards пустой массив и добавлять туда обьекты с данными
// обернуть весь код  в функции, и вызывать их после написанного кода функций
// если использую переменную глобально писать windows.название переменной
// сделать отдельные функции для хидден
// 
// ___________ ДАННЫЕ ____________________________________________
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
// _____________________МАССИВ ДЛЯ ЗАПОЛНЕНИЯ 4-Х  КАЛДУНОВ________________________
var wizards = [];
// ____________________ФУНКЦИИ_______________________
function show(searchClass, removeNameClass) {
  searchClass.classList.remove(removeNameClass || 'hidden');
};
// _______________________________________________________________
function createObjectWizard() {
  var numberWizards = 4;
  
  for (var i = 0; i < numberWizards; i++) {
    var obj = {
      name: randomParam(Names) + ' ' + randomParam(Surnames),
      coatColor: randomParam(CoatColors),
      eyesColor: randomParam(EyesColors)
    };
    wizards.push(obj)[i];
  };
};
// _______________________________________________________________
function renderWizard(wizard) {
  var silimarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
  var wizardElement = silimarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
// _______________________________________________________________
function insertFragment() {
  var silimarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  };
  silimarListElement.appendChild(fragment);
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
