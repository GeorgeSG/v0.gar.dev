var Game = function(firstPlayer) {
  this.board         = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.firstPlayer   = firstPlayer;
  this.currentPlayer = firstPlayer;
  this.lastMove      = null;
  this.winner        = null;
};

Game.prototype.hasWinner = function() {
  return this.winner != null;
};

Game.prototype.canPlaceAt = function(x, y) {
  return this.board[x][y] == 0;
};

Game.prototype.makeMove = function(x, y) {
  this.lastMove = [x, y];
  this.board[x][y] = this.currentPlayer.token;

  this.currentPlayer = this.nextPlayer();
};

Game.prototype.nextPlayer = function() {
  return this.currentPlayer == Player.HUMAN ? Player.AI : Player.HUMAN;
};

Game.prototype.remainingMoves = function() {
  var flattenned = Array.prototype.concat.apply([], this.board);

  var filtered = flattenned.filter(function(element) {
    return element == 0;
  });

  return filtered.length;
};

Game.prototype.isFinished = function() {
  // Check Rows and Columns
  for (var i = 0; i < 3; i++) {
    if (this.board[i][0] == this.board[i][1]
        && this.board[i][1] == this.board[i][2]
        && this.board[i][0] != 0) {
      this.setWinner();
      return true;
    }

    if (this.board[0][i] == this.board[1][i]
        && this.board[1][i] == this.board[2][i]
        && this.board[0][i] != 0) {
      this.setWinner();
      return true;
    }
  }

  if (this.board[1][1] == 0) {
    return false;
  }

  // Check Main Diagonal
  if (this.board[0][0] == this.board[1][1]
      && this.board[1][1] == this.board[2][2]) {
    this.setWinner();
    return true;
  }

  // Check Secondary Diagonal
  if (this.board[0][2] == this.board[1][1]
      && this.board[1][1] == this.board[2][0]) {
    this.setWinner();
    return true;
  }

  if (this.remainingMoves() > 0) {
    return false;
  }

  return true;
};

Game.prototype.setWinner = function() {
  this.winner = this.nextPlayer();
};

Game.prototype.cloneGame = function() {
  var clonedGame = new Game();
  clonedGame.firstPlayer   = this.firstPlayer;
  clonedGame.currentPlayer = this.currentPlayer;
  clonedGame.lastMove      = this.lastMove;

  clonedGame.board = this.board.map(function(row) {
    return row.slice();
  });

  return clonedGame;
};