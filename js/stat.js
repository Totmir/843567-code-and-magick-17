'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var SHADOW_GAP = 10;
  var Y_GAP = 45;
  var X_GAP = 50;
  var FONT_GAP = 20;
  var BAR_CHART_GAP = 200;
  var BAR_CHART_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;
  var TIME_GAP = 5;
  var PLAYER_BAR_COLOR = 'rgba(255, 0, 0, 1)';
  var PLAYERS_BAR_COLOR = 'rgba(0,0,255,';

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderText = function (ctx, fontStyle, textColor, textLine1, textLine2) {
    ctx.font = fontStyle;
    ctx.fillStyle = textColor;
    ctx.fillText(textLine1, CLOUD_X + X_GAP, CLOUD_Y + Y_GAP);
    ctx.fillText(textLine2, CLOUD_X + X_GAP, CLOUD_Y + Y_GAP + FONT_GAP);
  };

  var renderPlayerStatisctics = function (ctx, players, times) {
    for (var i = 0; i < players.length; i++) {
      if (players[i] === 'Вы') {
        ctx.fillStyle = PLAYER_BAR_COLOR;
      } else {
        ctx.fillStyle = PLAYERS_BAR_COLOR + Math.random() + ')';
      }
      ctx.fillText(players[i], CLOUD_X + X_GAP + i * (BAR_WIDTH + BAR_GAP), CLOUD_Y + Y_GAP + FONT_GAP + BAR_CHART_GAP);
      ctx.fillText(Math.round(times[i]), CLOUD_X + X_GAP + i * (BAR_WIDTH + BAR_GAP), CLOUD_Y + Y_GAP + 2 * FONT_GAP + BAR_CHART_HEIGHT - Math.round(times[i] * BAR_CHART_HEIGHT / Math.max.apply(null, times)) - TIME_GAP);
      ctx.fillRect(CLOUD_X + X_GAP + i * (BAR_WIDTH + BAR_GAP), CLOUD_Y + Y_GAP + 2 * FONT_GAP + BAR_CHART_HEIGHT - Math.round(times[i] * BAR_CHART_HEIGHT / Math.max.apply(null, times)), BAR_WIDTH, Math.round(times[i] * BAR_CHART_HEIGHT / Math.max.apply(null, times)));
    }
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    renderText(ctx, '16px PT Mono', '#000', 'Ура вы победили!', 'Список результатов:');

    renderPlayerStatisctics(ctx, names, times);
  };
})();
