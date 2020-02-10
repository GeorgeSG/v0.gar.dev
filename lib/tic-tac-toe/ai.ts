import { Game } from './game';

class AI {
  private static readonly INFINITY = 9;

  constructor(private game: Game, public difficulty: AI.Difficulty = 'normal') {}

  move() {
    const move = this.chooseMove();
    this.game.makeMove(move[0], move[1]);
  }

  private chooseMove(): number[] {
    switch (this.difficulty) {
      case 'easy':
        return this.randomChoice(this.game);
      case 'normal':
        if (this.randomInt(0, 10) > 4) {
          return this.alphabetaChoice(this.game);
        } else {
          return this.randomChoice(this.game);
        }
      case 'hard':
        return this.alphabetaChoice(this.game);
    }
  }

  private randomChoice(currentGame: Game) {
    const gameClone = currentGame.clone();
    const moves = this.getPossibleMoves(gameClone);
    const index = this.randomInt(0, moves.length - 1);

    return moves[index].lastMove;
  }

  private getPossibleMoves(game: Game): Game[] {
    const moves = [];
    let move: Game;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (game.canPlaceAt(i, j)) {
          move = game.clone();
          move.makeMove(i, j);
          moves.push(move);
        }
      }
    }

    return moves;
  }

  private alphabetaChoice(game: Game) {
    const gameClone = game.clone();
    const result = this.alphabeta(gameClone, -AI.INFINITY, AI.INFINITY);

    return result.game.lastMove;
  }

  private alphabeta(game: Game, alpha: number, beta: number) {
    if (game.isFinished()) {
      let score = 0;
      if (game.hasWinner()) {
        if (game.winner === game.firstPlayer) {
          score = 1;
        } else {
          score = -1;
        }
      }

      score *= game.remainingMoves() + 1;

      return {
        score,
        game
      };
    }

    const moves = this.getPossibleMoves(game);

    if (game.firstPlayer === game.currentPlayer) {
      return this.maximize(alpha, beta, moves);
    } else {
      return this.minimize(alpha, beta, moves);
    }
  }

  private maximize(alpha: number, beta: number, moves: Game[]) {
    const result = {
      score: alpha,
      game: moves[0]
    };

    for (const move of moves) {
      const alphabeta = this.alphabeta(move, alpha, beta);
      if (alpha < alphabeta.score) {
        alpha = alphabeta.score;
        result.score = alphabeta.score;
        result.game = move;
      }

      if (beta <= alpha) {
        break;
      }
    }

    return result;
  }

  private minimize(alpha: number, beta: number, moves: Game[]) {
    const result = {
      score: beta,
      game: moves[0]
    };

    for (const move of moves) {
      const alphabeta = this.alphabeta(move, alpha, beta);
      if (beta > alphabeta.score) {
        beta = alphabeta.score;
        result.score = alphabeta.score;
        result.game = move;
      }

      if (beta <= alpha) {
        break;
      }
    }

    return result;
  }

  private randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

namespace AI {
  export type Difficulty = 'easy' | 'normal' | 'hard';
}

export { AI };
