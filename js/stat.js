var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var FONT_HEIGHT = 16;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;
var QUANTITY_OF_BARS = 4;
var FONT_GAP = FONT_HEIGHT * 2;
var BAR_START_Y = FONT_HEIGHT + FONT_GAP * 3 + BAR_HEIGHT + FONT_HEIGHT;


var renderCloud = function(ctx, x, y, color) {
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
}

var renderText = function (ctx, x, y, text) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText(text, x, y);
}

window.renderStatistics = function(ctx, players, times) {

  // 2 облака
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)')
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white')

  // 2 текста
  renderText(ctx, CLOUD_X + BAR_WIDTH, CLOUD_Y + FONT_GAP, 'Ура вы победили!');
  renderText(ctx, CLOUD_X + BAR_WIDTH, CLOUD_Y + FONT_GAP * 1.6, 'Список результатов:');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    drawSingleBar(ctx, i, players[i], times[i], maxTime);
  }

  function getFillStyle(playerName) {
    if (playerName === 'Вы') {
      return 'rgba(255, 0, 0, 1)';
    }
    var opacity = Math.random();
    if (opacity == 0 || opacity == 1) {
      return 'rgba(31, 58, 147, 1';
    }

    return 'rgba(31, 58, 147, ' + opacity + ')';
  }

  function drawSingleBar(ctx, playerIndex, playerName, playerTime, max) {
    var height = BAR_HEIGHT * (playerTime / max);
    renderText(ctx, CLOUD_X + (BAR_WIDTH + BAR_GAP) * playerIndex + BAR_WIDTH, BAR_START_Y, playerName);
    ctx.fillStyle = getFillStyle(playerName);
    ctx.fillRect(CLOUD_X + (BAR_WIDTH + BAR_GAP) * playerIndex + BAR_WIDTH, BAR_START_Y - FONT_HEIGHT - height, BAR_WIDTH, height);
    renderText(ctx, CLOUD_X + (BAR_WIDTH + BAR_GAP) * playerIndex + BAR_WIDTH, BAR_START_Y - FONT_HEIGHT - height - FONT_HEIGHT, Math.floor(playerTime));
  }
};
