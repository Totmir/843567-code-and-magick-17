var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_HEIGHT = 16;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var barHeight = CLOUD_HEIGHT - 120;
var QUANTITY_OF_BARS = 5;


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
  return maxElement;
  }
}

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)')
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white')

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  var stringIndex = 2;
  ctx.fillText('Ура вы победили!', CLOUD_X + BAR_WIDTH, CLOUD_Y + GAP * stringIndex  + FONT_HEIGHT);
  var stringIndex = 4;
  ctx.fillText('Список результатов:', CLOUD_X + BAR_WIDTH, CLOUD_Y + GAP * stringIndex + FONT_HEIGHT);

  var maxTime = getMaxElement(times);

  var colors = ['rgba(255, 0, 0, 1)', 'rgba(31, 58, 147, 1)', 'rgba(31, 58, 147, 0.6)', 'rgba(31, 58, 147, 1)']
  var saturations = ['none', 'saturate(10%)', 'saturate(10%)', 'saturate(10%)'];

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP + (CLOUD_WIDTH / QUANTITY_OF_BARS) * i + CLOUD_WIDTH / QUANTITY_OF_BARS - BAR_WIDTH, CLOUD_HEIGHT - CLOUD_Y - GAP);
    ctx.fillStyle = colors[i];
    ctx.filter = saturations[i];
    ctx.fillRect(CLOUD_X + GAP + (CLOUD_WIDTH / QUANTITY_OF_BARS) * i + CLOUD_WIDTH / QUANTITY_OF_BARS - BAR_WIDTH, CLOUD_HEIGHT - CLOUD_Y - GAP - FONT_HEIGHT - barHeight, BAR_WIDTH, (barHeight * times[i])/maxTime);
    ctx.fillStyle = 'black';
  }
};

/*   var playerIndex = 0;
  var playerName = 'Вы';


  ctx.fillText(playerName, CLOUD_X + GAP + (CLOUD_WIDTH / QUANTITY_OF_BARS) * playerIndex + CLOUD_WIDTH / QUANTITY_OF_BARS - BAR_WIDTH, CLOUD_HEIGHT - CLOUD_Y - GAP);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + GAP + (CLOUD_WIDTH / QUANTITY_OF_BARS) * playerIndex + CLOUD_WIDTH / QUANTITY_OF_BARS - BAR_WIDTH, CLOUD_HEIGHT - CLOUD_Y - GAP - FONT_HEIGHT - BAR_HEIGHT, BAR_WIDTH, BAR_HEIGHT);
  ctx.fillStyle = 'black';

  var playerIndex = 1;
  var playerName = 'Кекс';

  ctx.fillText(playerName, CLOUD_X + GAP + (CLOUD_WIDTH / QUANTITY_OF_BARS) * playerIndex + CLOUD_WIDTH / QUANTITY_OF_BARS - BAR_WIDTH, CLOUD_HEIGHT - CLOUD_Y - GAP);
  ctx.fillStyle = 'rgba(31, 58, 147, 1)';
  ctx.fillRect(CLOUD_X + GAP + (CLOUD_WIDTH / QUANTITY_OF_BARS) * playerIndex + CLOUD_WIDTH / QUANTITY_OF_BARS - BAR_WIDTH, CLOUD_HEIGHT - CLOUD_Y - GAP - FONT_HEIGHT - BAR_HEIGHT, BAR_WIDTH, BAR_HEIGHT);
  ctx.fillStyle = 'black';

  var playerIndex = 2;
  var playerName = 'Катя';

  ctx.fillText(playerName, CLOUD_X + GAP + (CLOUD_WIDTH / QUANTITY_OF_BARS) * playerIndex + CLOUD_WIDTH / QUANTITY_OF_BARS - BAR_WIDTH, CLOUD_HEIGHT - CLOUD_Y - GAP);
  ctx.filter = 'saturate(10%)';
  ctx.fillStyle = 'rgba(31, 58, 147, 0.6)';
  ctx.fillRect(CLOUD_X + GAP + (CLOUD_WIDTH / QUANTITY_OF_BARS) * playerIndex + CLOUD_WIDTH / QUANTITY_OF_BARS - BAR_WIDTH, CLOUD_HEIGHT - CLOUD_Y - GAP - FONT_HEIGHT - BAR_HEIGHT, BAR_WIDTH, BAR_HEIGHT);
  ctx.filer = 'none';
  ctx.fillStyle = 'black';

  var playerIndex = 3;
  var playerName = 'Игорь';

  ctx.fillText(playerName, CLOUD_X + GAP + (CLOUD_WIDTH / QUANTITY_OF_BARS) * playerIndex + CLOUD_WIDTH / QUANTITY_OF_BARS - BAR_WIDTH, CLOUD_HEIGHT - CLOUD_Y - GAP);
  ctx.filter = 'saturate(10%)';
  ctx.fillStyle = 'rgba(31, 58, 147, 1)';
  ctx.fillRect(CLOUD_X + GAP + (CLOUD_WIDTH / QUANTITY_OF_BARS) * playerIndex + CLOUD_WIDTH / QUANTITY_OF_BARS - BAR_WIDTH, CLOUD_HEIGHT - CLOUD_Y - GAP - FONT_HEIGHT - BAR_HEIGHT, BAR_WIDTH, BAR_HEIGHT);
  ctx.filter = 'none';
  ctx.fillStyle = 'black'; */
