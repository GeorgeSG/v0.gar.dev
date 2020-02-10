import { CellState } from './cell-state';
import { Player } from './player';

export class Game {
  private static readonly WINNING_STATES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  public currentPlayer: Player;
  public winner: Player | null = null;
  public lastMove: number[];

  private board: CellState[] = [null, null, null, null, null, null, null, null, null];

  constructor(public firstPlayer: Player, public players: Player[] = [Player.HUMAN, Player.AI]) {
    this.currentPlayer = firstPlayer;
  }

  copyBoard(): CellState[] {
    return this.board.slice();
  }

  toCoords(index: number): number[] {
    return [Math.floor(index / 3), index % 3];
  }

  toIndex(x: number, y: number): number {
    return x * 3 + y;
  }

  canPlaceAt(x: number, y: number): boolean {
    return this.board[this.toIndex(x, y)] === null;
  }

  makeMove(x: number, y: number) {
    this.lastMove = [x, y];
    this.board[this.toIndex(x, y)] = this.currentPlayer.token;
    this.currentPlayer = this.nextPlayer();
  }

  nextPlayer(): Player {
    return this.players.find(player => player !== this.currentPlayer) as Player;
  }

  remainingMoves(): number {
    return this.board.filter(e => e === null).length;
  }

  isInWinningState(): boolean {
    return Game.WINNING_STATES.some(winningState => {
      return (
        this.board[winningState[0]] !== null &&
        this.board[winningState[0]] === this.board[winningState[1]] &&
        this.board[winningState[0]] === this.board[winningState[2]]
      );
    });
  }

  isFinished(): boolean {
    if (this.isInWinningState()) {
      this.winner = this.nextPlayer();
      return true;
    }

    return this.remainingMoves() === 0;
  }

  hasWinner(): boolean {
    return this.winner !== null;
  }

  clone(): Game {
    const clonedGame = new Game(this.firstPlayer, this.players);
    clonedGame.currentPlayer = this.currentPlayer;
    clonedGame.lastMove = this.lastMove;
    clonedGame.board = this.board.slice();

    return clonedGame;
  }
}
