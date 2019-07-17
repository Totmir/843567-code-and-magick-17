var setup = document.querySelectorAll('.setup');
setup.classList.remove('hidden');



var names = ['Иван', 'Хуан' + 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];


var randomArrayValue = function(myArray) {
  var rand = myArray[Math.floor(Math.random() * myArray.length)];
  return rand;
}

var firstCharacter = {
  name = randomArrayValue(names),
  coatColor = randomArrayValue(coatColors),
  eyesColor = randomArrayValue(eyesColors),
}

var secondCharacter = {
  name = randomArrayValue(names),
  coatColor = randomArrayValue(coatColors),
  eyesColor = randomArrayValue(eyesColors),
}

var thirdCharacter = {
  name = randomArrayValue(names),
  coatColor = randomArrayValue(coatColors),
  eyesColor = randomArrayValue(eyesColors),
}

var fourthCharacter = {
  name = randomArrayValue(names),
  coatColor = randomArrayValue(coatColors),
  eyesColor = randomArrayValue(eyesColors),
}

