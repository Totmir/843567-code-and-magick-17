'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристов', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupBlock = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setupBlock.querySelector('.setup-close');
var setupCoat = document.querySelector('.wizard-coat');
var setupEyes = document.querySelector('.wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');

var isEnterOrEsc = function (evtObj) {
  return evtObj.key === ESC_KEYCODE || evtObj.key === ENTER_KEYCODE;
};

var onPopupEscPress = function (evt) {
  if (isEnterOrEsc(evt)) {
var WIZARDS_COUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardFireball = ['#30a8ee', '#5ce6c0', '#e848d5', '#e6e848', '#ee4830'];
var coat = document.querySelector('.setup-wizard .wizard-coat');
var eyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

var setup = document.querySelector('.setup');
var setupSimilar = setup.querySelector('.setup-similar');
var setupSimilarList = setup.querySelector('.setup-similar-list');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomArrayValue = function (myArray) {
  var rand = myArray[Math.floor(Math.random() * myArray.length)];
  return rand;
};

// Generate wizard list
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

// Generate single wizard
var generateWizard = function (wizardRandom) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardRandom.name;
  wizardElement.querySelector('.wizard-coat').setAttribute('fill', wizardRandom.coatColor);
  wizardElement.querySelector('.wizard-eyes').setAttribute('fill', wizardRandom.eyesColor);
  return wizardElement;
};

// Render all wizards
var renderWizards = function (characters) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < characters.length; i++) {
    fragment.appendChild(generateWizard(characters[i]));
  }
  setupSimilarList.appendChild(fragment);
  setupSimilar.classList.remove('hidden');
  setup.classList.remove('hidden');
};

renderWizards(generateWizardList(WIZARDS_COUNT));

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setupBlock.classList.remove('hidden');
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupBlock.classList.add('hidden');
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (onPopupEscPress(evt)) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (isEnterOrEsc(evt)) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupCoat.addEventListener('click', function (evt) {
  evt.target.setAttribute('style', 'fill:' + getRandomValue(COAT_COLORS));
});

setupEyes.addEventListener('click', function (evt) {
  evt.target.setAttribute('style', 'fill:' + getRandomValue(EYES_COLORS));
});

setupFireball.addEventListener('click', function () {
  var background = getRandomValue(FIREBALL_COLOR);
  setupFireball.setAttribute('style', 'background: ' + background);
  document.querySelector('input[name="fireball-color"]').setAttribute('value', background);
});

var getRandomValue = function (values) {
  var index = Math.floor(Math.random() * values.length);
  return values[index];
};

var createWizards = function (wizardCount) {
  var wizards = [];
  for (var i = 0; i < wizardCount; i++) {
    var wizard = {
      name: getRandomValue(NAMES) + ' ' + getRandomValue(SURNAMES),
      coatColor: getRandomValue(COAT_COLORS),
      eyesColor: getRandomValue(EYES_COLORS)
    };
    wizards.push(wizard);
  }
  return wizards;
};

var wizards = createWizards(4);

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
coat.addEventListener('click', function () {
  coat.style.fill = getRandomArrayValue(coatColors);
  document.querySelector('[name="coat-color"]').value = coat.style.fill;
});

eyes.addEventListener('click', function () {
  eyes.style.fill = getRandomArrayValue(eyesColors);
  document.querySelector('[name="eyes-color"]').value = eyes.style.fill;
});

fireball.addEventListener('click', function () {
  document.querySelector('[name="fireball-color"]').value = getRandomArrayValue(wizardFireball);
  fireball.style.backgroundColor = document.querySelector('[name="fireball-color"]').value;
});
