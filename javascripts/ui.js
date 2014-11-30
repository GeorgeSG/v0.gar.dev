var UI = function() {
  this.game = new Game(Player.HUMAN);
  this.ai   = new AI();

  this.unplacedStyle = "unplaced";

  this.boxes            = [];
  this.result           = null;
  this.difficultyLevels = [];
  this.difficultyInputs = [];
  this.winsCount        = null;
  this.drawsCount       = null;
  this.lossesCount      = null;
};

UI.prototype.getBoxes = function() {
  if (this.boxes.length == 0) {
    this.boxes = document.getElementsByClassName("box");
  }

  return this.boxes;
};

UI.prototype.getResult = function() {
  if (this.result == null) {
    this.result = document.getElementById("result");
  }

  return this.result;
};

UI.prototype.getDifficultyLabels = function() {
  if (this.difficultyLevels.length == 0) {
    this.difficultyLevels = document
        .getElementById("difficulty")
        .getElementsByTagName("label");
  }

  return this.difficultyLevels;
};

UI.prototype.getDifficultyInputs = function() {
  if (this.difficultyInputs.length == 0) {
    this.difficultyInputs = document
        .getElementById("difficulty")
        .getElementsByTagName("input");
  }

  return this.difficultyInputs;
};

UI.prototype.getWinsCount = function() {
  if (this.winsCount == null) {
    this.winsCount = document.getElementById("wins-count");
  }

  return this.winsCount;
};

UI.prototype.getDrawsCount = function() {
  if (this.drawsCount == null) {
    this.drawsCount = document.getElementById("draws-count");
  }

  return this.drawsCount;
};

UI.prototype.getLossesCount = function() {
  if (this.lossesCount == null) {
    this.lossesCount = document.getElementById("losses-count");
  }

  return this.lossesCount;
};

UI.prototype.increaseWins = function() {
  var wins = this.getWinsCount();
  var winsCount = parseInt(wins.innerHTML);
  wins.innerHTML = winsCount + 1;
};

UI.prototype.increaseDraws = function() {
  var draws = this.getDrawsCount();
  var drawsCount = parseInt(draws.innerHTML);
  draws.innerHTML = drawsCount + 1;
};

UI.prototype.increaseLosses = function() {
  var losses = this.getLossesCount();
  var lossesCount = parseInt(losses.innerHTML);
  losses.innerHTML = lossesCount + 1;
};

UI.prototype.init = function() {
  var self            = this;
  var boxes           = this.getBoxes();
  var new_game_button = document.getElementById("new-game");
  var difficulties    = this.getDifficultyInputs();

  new_game_button.addEventListener("click", function() {
    self.resetGame();
  });

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", pickMove);
  }

  for (var i = 0; i < difficulties.length; i++) {
    difficulties[i].addEventListener("click", function(e) {
      self.pickDifficulty(e.target);
    });
  }
};

UI.prototype.aiMove = function() {
  var boxes  = this.getBoxes();
  var aiMove = this.ai.chooseMove(this.game);

  var x = aiMove[0];
  var y = aiMove[1];

  this.game.makeMove(x, y);

  var boxIndex = 3 * x + y;

  boxes[boxIndex].classList.remove(this.unplacedStyle);
  boxes[boxIndex].classList.add(Player.AI.token);
  boxes[boxIndex].removeEventListener("click", pickMove);
};

UI.prototype.finishGame = function() {
  var boxes  = this.getBoxes();
  var result = this.getResult();

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove(this.unplacedStyle);
    boxes[i].removeEventListener("click", pickMove);
  }

  if (this.game.winner == Player.HUMAN) {
    result.innerHTML = "You win! Congratulations!";
    this.increaseWins();
  } else if (this.game.winner == Player.AI) {
    result.innerHTML = "The AI won. Better luck next time!";
    this.increaseLosses();
  } else {
    result.innerHTML = "It's a draw. Have another try!";
    this.increaseDraws();
  }
};

UI.prototype.resetGame = function() {
  var boxes  = this.getBoxes();
  var result = this.getResult();

  this.game = new Game(Player.HUMAN);

  result.innerHTML = null;

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", pickMove);
    boxes[i].classList.remove(Player.HUMAN.token);
    boxes[i].classList.remove(Player.AI.token);
    boxes[i].classList.add(this.unplacedStyle);
  }
};

UI.prototype.pickDifficulty = function(difficulty_object) {
  var labels = this.getDifficultyLabels();

  for (var i = 0; i < labels.length; i++) {
    var label = labels[i];
    if (label.getAttribute('for') == difficulty_object.id) {
      label.classList.add("checked");
    } else {
      label.classList.remove("checked");
    }
  }

  this.ai.difficulty = difficulty_object.id;
};

UI.prototype.pickMove = function(box_object) {
  if (this.game.isFinished()) {
    return;
  }

  var x = parseInt(box_object.getAttribute('data-x'));
  var y = parseInt(box_object.getAttribute('data-y'));

  box_object.classList.add(this.game.currentPlayer.token);

  this.game.makeMove(x, y);

  box_object.classList.remove(this.unplacedStyle);
  box_object.removeEventListener("click", pickMove);

  if (!this.game.isFinished()) {
    this.aiMove();
  }

  if (this.game.isFinished()) {
    this.finishGame();
  }
};