'use strict';
// ________________ОСНОВНЫЕ ПЕРЕМЕННЫЕ_______________________________________
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var silimarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
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
// _____________________ОБЪЕКТ С 4 ВОЛШЕБНИКАМИ________________________
var wizards = [
  {
    name: '',
    coatColor: '',
    eyesColor: ''
  },
  {
    name: '',
    coatColor: '',
    eyesColor: ''
  },
  {
    name: '',
    coatColor: '',
    eyesColor: ''
  },
  {
    name: '',
    coatColor: '',
    eyesColor: ''
  }
];
// ___________________ФУНКЦИИ И ДЕЙСТВИЯ_________________________
for (var i = 0; i < wizards.length; i++) {
  wizards[i].name = [randomParam(Names) + ' ' + randomParam(Surnames)];
  wizards[i].coatColor = [randomParam(CoatColors)];
  wizards[i].eyesColor = [randomParam(EyesColors)];
};
// цикл по подстановки в каждый обьект и каждый параметр нужного значения из массивов
function renderWizard(wizard) {
  var wizardElement = silimarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
// кладем в функцию номер волшебника из массива, и добавляем для каждого 3 характеристики
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
};

similarListElement.appendChild(fragment);
setup.querySelector('.setup-similar').classList.remove('hidden');

function randomParam(arrParam) {
  var randomIndexArray = Math.floor(Math.random() * arrParam.length);
  return arrParam[randomIndexArray];
};
// Получаем случайный ключ массива
