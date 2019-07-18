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

var getRandomArrayValue = function(myArray) {
  return rand = myArray[Math.floor(Math.random() * myArray.length)];
}

var characters = [
  {
    name: randomArrayValue(names),
    surname: randomArrayValue(surnames),
    coatColor: randomArrayValue(coatColors),
    eyesColor: randomArrayValue(eyesColors),
  },
  {
    name: randomArrayValue(names),
    surname: randomArrayValue(surnames),
    coatColor: randomArrayValue(coatColors),
    eyesColor: randomArrayValue(eyesColors),
  },
  {
    name: randomArrayValue(names),
    surname: randomArrayValue(surnames),
    coatColor: randomArrayValue(coatColors),
    eyesColor: randomArrayValue(eyesColors),
  },
  {
    name: randomArrayValue(names),
    surname: randomArrayValue(surnames),
    coatColor: randomArrayValue(coatColors),
    eyesColor: randomArrayValue(eyesColors),
  }
];

// Генерирует список волшебников
var generateWizardList = function (wizardsNumber) {
  for (var i = 1; i <= wizardsNumber; i++) {
    wizardElement.querySelector('.setup-similar-label').textContent = randomArrayValue(names) + randomArrayValue(surnames);
    wizardElement.querySelector('.wizard-coat').setAttribute('fill', randomArrayValue(coatColors));
    wizardElement.querySelector('.wizard-eyes').setAttribute('fill', randomArrayValue(eyesColors));
  }
}

// Генерирует конкретного волшебника
var generateWizard = function (wizardNumber) {
  wizardElement.querySelector('.setup-similar-label').textContent = characters[wizardNumber].name + characters[wizardNumber].surname;
  wizardElement.querySelector('.wizard-coat').setAttribute('fill', characters[wizardNumber].coatColor);
  wizardElement.querySelector('.wizard-eyes').setAttribute('fill', characters[wizardNumber].eyesColor);
}

// Отрисовывает всех волшебников
var renderWizards = function(characters) {
  for (var i=0; i < characters.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    document.createDocumentFragment().appendChild(generateWizardList(characters.length))
  }
  return wizardElement;
}

/* var renderWizard = function(wizard) {
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

similarListElement.appendChild(fragment); */
