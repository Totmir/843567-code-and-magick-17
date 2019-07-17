var names = ['Иван', 'Хуан' + 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var setupSelector = document.querySelectorAll('.setup');
setupSelector.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var randomArrayValue = function(myArray) {
  var rand = myArray[Math.floor(Math.random() * myArray.length)];
  return rand;
}

var characters = [
  {
    wizardNumber = 1,
    name = randomArrayValue(names),
    coatColor = randomArrayValue(coatColors),
    eyesColor = randomArrayValue(eyesColors),
  },
  {
    wizardNumber = 2,
    name = randomArrayValue(names),
    coatColor = randomArrayValue(coatColors),
    eyesColor = randomArrayValue(eyesColors),
  },
  {
    wizardNumber = 3,
    name = randomArrayValue(names),
    coatColor = randomArrayValue(coatColors),
    eyesColor = randomArrayValue(eyesColors),
  },
  {
    wizardNumber = 4,
    name = randomArrayValue(names),
    coatColor = randomArrayValue(coatColors),
    eyesColor = randomArrayValue(eyesColors),
  }
];

var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = randomArrayValue(names);
  wizardElement.querySelector('.wizard-coat').setAttribute('fill', randomArrayValue(coatColors));
  wizardElement.querySelector('.wizard-eyes').setAttribute('fill', randomArrayValue(eyesColors));

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < characters.length; i++) {
  fragment.appendChild(renderWizard(characters));
}

similarListElement.appendChild(fragment);

setupSelector.querySelector('.setup-similar').classList.remove('hidden');
