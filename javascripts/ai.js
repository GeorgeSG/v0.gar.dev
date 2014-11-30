var AI = function() {
  this.INFINITY   = 9;
  this.difficulty = 'normal';
};

AI.prototype.randomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

AI.prototype.chooseMove = function(current_game) {
  switch (this.difficulty) {
    case 'easy':
      // Make a random choice
      return this.randomChoice(current_game);
      break;
    case 'normal':
      // Choose either randomly or with minimax alpha-beta pruning
      var random = this.randomInt(0, 10);
      if (random > 4) {
        return this.alphabetaChoice(current_game);
      } else {
        return this.randomChoice(current_game);
      }
      break;
    case 'hard':
      // Choose with minimax alpha-beta pruning
      return this.alphabetaChoice(current_game);
      break;
    }
};

AI.prototype.alphabetaChoice = function(current_game) {
  var gameClone = current_game.cloneGame();
  var result    = this.alphabeta(gameClone, -this.INFINITY, this.INFINITY);
  return result[1].lastMove;
};

AI.prototype.randomChoice = function(current_game) {
  var gameClone = current_game.cloneGame();
  var moves     = this.getPossibleMoves(gameClone);
  var index     = this.randomInt(0, moves.length - 1);

  return moves[index].lastMove;
};

AI.prototype.alphabeta = function(current_game, alpha, beta) {
  if (current_game.isFinished()) {
    var score = 0;
    if (current_game.hasWinner()) {
      if (current_game.winner == current_game.firstPlayer) {
        score = 1;
      } else {
        score = -1;
      }
    }

    score *= (current_game.remainingMoves() + 1);
    return [score, current_game];
  }

  var moves = this.getPossibleMoves(current_game);

  if (current_game.firstPlayer == current_game.currentPlayer) {
    return this.maximize(alpha, beta, moves);
  } else {
    return this.minimize(alpha, beta, moves);
  }
};

AI.prototype.maximize = function(alpha, beta, moves) {
  var result = [alpha, moves[0]];

  for (var i = 0; i < moves.length; i++) {
    var move = moves[i];

    var alphabeta = this.alphabeta(move, alpha, beta);
    if (alpha < alphabeta[0]) {
      alpha = alphabeta[0];
      result = [alpha, move];
    }

    if (beta <= alpha) {
      break;
    }
  }

  return result;
};

AI.prototype.minimize = function(alpha, beta, moves) {
  var result = [beta, moves[0]];

  for (var i = 0; i < moves.length; i++) {
    var move = moves[i];

    var alphabeta = this.alphabeta(move, alpha, beta);
    if (beta > alphabeta[0]) {
      beta = alphabeta[0];
      result = [beta, move];
    }

    if (beta <= alpha) {
      break;
    }
  }

  return result;
};

AI.prototype.getPossibleMoves = function(current_game) {
  var moves = [];

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (current_game.canPlaceAt(i, j)) {
        var move = current_game.cloneGame();
        move.makeMove(i, j);
        moves.push(move);
      }
    }
  }

  return moves;
};