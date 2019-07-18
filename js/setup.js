var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var setupsSelector = document.querySelectorAll('.setup');
setupsSelector.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomArrayValue = function(myArray) {
  return rand = myArray[Math.floor(Math.random() * myArray.length)];
}

var characters = [
  {
    name: randomArrayValue(names),
    coatColor: randomArrayValue(coatColors),
    eyesColor: randomArrayValue(eyesColors),
  },
  {
    name: randomArrayValue(names),
    coatColor: randomArrayValue(coatColors),
    eyesColor: randomArrayValue(eyesColors),
  },
  {
    wizardNumber: 3,
    name: randomArrayValue(names),
    coatColor: randomArrayValue(coatColors),
    eyesColor: randomArrayValue(eyesColors),
  },
  {
    name: randomArrayValue(names),
    coatColor: randomArrayValue(coatColors),
    eyesColor: randomArrayValue(eyesColors),
  }
];

var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = randomArrayValue(names) + randomArrayValue(surnames);
  wizardElement.querySelector('.wizard-coat').setAttribute('fill', randomArrayValue(coatColors));
  wizardElement.querySelector('.wizard-eyes').setAttribute('fill', randomArrayValue(eyesColors));

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < characters.length; i++) {
  fragment.appendChild(renderWizard(characters.length));
}

similarListElement.appendChild(fragment);
