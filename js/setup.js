'use strict';

var WZARDS_COUNT = 4;

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var setupsSelector = document.querySelector('.setup');
setupsSelector.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomArrayValue = function (myArray) {
  var rand = myArray[Math.floor(Math.random() * myArray.length)];
  return rand;
};

// Генерирует список волшебников
var generateWizardList = function (wizardsNumber) {
  var characters = [];
  for (var i = 0; i < wizardsNumber; i++) {
    characters.push({
      name: getRandomArrayValue(names) + ' ' + getRandomArrayValue(surnames),
      coatColor: getRandomArrayValue(coatColors),
      eyesColor: getRandomArrayValue(eyesColors)
    });
  }
  return characters;
};

// Генерирует конкретного волшебника
var generateWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').setAttribute('fill', wizard.coatColor);
  wizardElement.querySelector('.wizard-eyes').setAttribute('fill', wizard.eyesColor);
  return wizardElement;
};

// Отрисовывает всех волшебников
var renderWizards = function (characters) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < characters.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    fragment.appendChild(generateWizard(characters[i]));
  }
  return wizardElement;
};

renderWizards(generateWizardList(WZARDS_COUNT));
