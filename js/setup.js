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
    closePopup();
  }
};

var openPopup = function () {
  setupBlock.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupBlock.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (onPopupEscPress(evt)) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (isEnterOrEsc(evt)) {
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
