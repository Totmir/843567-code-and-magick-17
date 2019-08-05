'use strict';

var MIN = 128;
var MAX = 255;

var POSITION_NAME_X = 40;
var POSITION_NAME_Y = 270;

var POSITION_TIME_X = POSITION_NAME_X;
var POSITION_TIME_Y = 100;

var POSITION_RECT_X = 40;
var POSITION_RECT_Y = 250;

var HEIGHT_RECT = -150;

// Функция рисования облака и тени
var renderCloud = function (ctx) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 430, 280);
  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 180, 40);
  ctx.fillText('Список результатов:', 180, 56);
};

var color = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

// Функция поиска максимального элемента массива времен
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var FONT_HEIGHT = 16;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;
var FONT_GAP = FONT_HEIGHT * 2;
var BAR_START_Y = FONT_HEIGHT + FONT_GAP * 3 + BAR_HEIGHT + FONT_HEIGHT;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

//  Функция генерации статистики
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx);

  var positionNameX = POSITION_NAME_X;
  var positionTimeX = POSITION_TIME_X;
  var positionRectX = POSITION_RECT_X;

  // Функция поиска максимального элемента массива времен
  var maxTime = getMaxElement(times);
  maxTime = Math.floor(maxTime);


  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], positionNameX += 90, POSITION_NAME_Y);
    ctx.fillText(Math.round(times[i]), positionTimeX += 90, POSITION_TIME_Y);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgb(255, 0, 0)';
    } else {
      ctx.fillStyle = 'rgb(0, 0,' + color(MIN, MAX) + ')';
    }

    ctx.fillRect(positionRectX += 90, POSITION_RECT_Y, 40, ((HEIGHT_RECT * times[i]) / maxTime));
    ctx.fillStyle = 'black';

var renderText = function (ctx, x, y, text) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText(text, x, y);
};

window.renderStatistics = function (ctx, players, times) {

  // 2 облака
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  // 2 текста
  renderText(ctx, CLOUD_X + BAR_WIDTH, CLOUD_Y + FONT_GAP, 'Ура вы победили!');
  renderText(ctx, CLOUD_X + BAR_WIDTH, CLOUD_Y + FONT_GAP * 1.6, 'Список результатов:');

  var maxTime = getMaxElement(times);

  var drawSingleBar = function (playerIndex, playerName, playerTime, max) {
    var height = BAR_HEIGHT * (playerTime / max);
    renderText(ctx, CLOUD_X + (BAR_WIDTH + BAR_GAP) * playerIndex + BAR_WIDTH, BAR_START_Y, playerName);
    ctx.fillStyle = getFillStyle(playerName);
    ctx.fillRect(CLOUD_X + (BAR_WIDTH + BAR_GAP) * playerIndex + BAR_WIDTH, BAR_START_Y - FONT_HEIGHT - height, BAR_WIDTH, height);
    renderText(ctx, CLOUD_X + (BAR_WIDTH + BAR_GAP) * playerIndex + BAR_WIDTH, BAR_START_Y - FONT_HEIGHT - height - FONT_HEIGHT, Math.floor(playerTime));
  };

  for (var i = 0; i < players.length; i++) {
    drawSingleBar(i, players[i], times[i], maxTime);
  }

  function getFillStyle(playerName) {
    return (playerName === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(31, 58, 147, ' + Math.max(Math.random(), 0.1) + ')';
  }
};
