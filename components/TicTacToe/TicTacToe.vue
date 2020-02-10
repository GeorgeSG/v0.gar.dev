<template lang="pug">
  .tic-tac-toe
    fieldset.difficulty
      label(:class="{ selected: difficulty === 'easy'}")
        input#easy(type="radio" v-model="difficulty" name="difficulty" value="easy")
        | easy
      label(:class="{ selected: difficulty === 'normal'}")
        input#normal(type="radio" v-model="difficulty" name="difficulty" value="normal")
        | normal
      label(:class="{ selected: difficulty === 'hard'}")
        input#hard(type="radio" v-model="difficulty" name="difficulty" value="hard")
        | hard

    Board(:cellStates="cellStates" :finished="finished" @place="place")
    button.new-game(@click="newGame") new game
    p.result {{ lastResultString }}
    .stats
      h2 stats
      table
        tbody
          tr
            td wins
            td.wins.count {{ wins }}
          tr
            td draws
            td.draws.count {{ draws }}
          tr
            td losses
            td.losses.count {{ losses }}
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Board from './Board/Board.vue';
import { Game } from '~/lib/tic-tac-toe/game';
import { AI } from '~/lib/tic-tac-toe/ai';
import { Player } from '~/lib/tic-tac-toe/player';
import { CellState } from '~/lib/tic-tac-toe/cell-state';

@Component({ components: { Board } })
export default class TicTacToe extends Vue {
  private wins: number = 0;
  private draws: number = 0;
  private losses: number = 0;
  private lastResultString: string = '';

  private cellStates: CellState[] = [];
  private finished: boolean = false;

  private difficulty: AI.Difficulty = 'normal';

  private game: Game;
  private ai: AI;

  @Watch('difficulty', { immediate: true })
  onDifficultyChange(newDifficulty: AI.Difficulty) {
    if (this.ai) {
      this.ai.difficulty = newDifficulty;
    }
  }

  created() {
    this.newGame();
  }

  newGame() {
    this.game = new Game(Player.HUMAN);
    this.ai = new AI(this.game, this.difficulty);
    this.cellStates = this.game.copyBoard();
    this.finished = false;
    this.lastResultString = '';
  }

  place(index: number) {
    const coords = this.game.toCoords(index);
    if (this.game.isFinished() || !this.game.canPlaceAt(coords[0], coords[1])) {
      return;
    }

    this.game.makeMove(coords[0], coords[1]);

    if (!this.game.isFinished()) {
      this.ai.move();
    }

    this.cellStates = this.game.copyBoard();

    if (this.game.isFinished()) {
      this.finishGame();
    }
  }

  private finishGame() {
    this.finished = true;

    switch (this.game.winner) {
      case Player.HUMAN:
        this.wins++;
        this.lastResultString = 'You win! Congratulations!';
        break;
      case Player.AI:
        this.lastResultString = 'The AI won. Better luck next time!';
        this.losses++;
        break;
      default:
        this.lastResultString = "It's a draw. Have another try!";
        this.draws++;
    }
  }
}
</script>

<style lang="scss">
.new-game {
  cursor: pointer;
  padding: 10px 20px;
  margin-top: 10px;
  background: $color-white;
  color: $color-dark-blue;
  text-decoration: none;

  border: 1px solid $color-dark-blue;
  border-radius: 4px;

  &:hover {
    background: $color-dark-blue;
    color: $color-white;
  }

  &:active {
    box-shadow: inset 0px 0px 83px 0px rgba(0, 0, 0, 0.38);
  }
}

.difficulty {
  position: relative;
  margin: 40px auto 16px;
  padding: 0;
  border: 0;

  label {
    display: inline-block;
    padding: 6px 12px;
    margin: 0;
    text-align: center;
    font-size: 0.8em;
    cursor: pointer;
    background: $color-dark-blue;
    color: $color-white;
    border-bottom: 1px solid $color-dark-blue;
    border-top: 1px solid $color-dark-blue;

    &:first-of-type {
      margin-left: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border: 1px solid $color-dark-blue;
    }

    &:last-of-type {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border: 1px solid $color-dark-blue;
    }

    &:hover {
      background: $color-dark-blue;
    }

    &:active {
      box-shadow: inset 0px 0px 83px 0px rgba(0, 0, 0, 0.38);
    }

    input {
      display: none;
    }
  }

  > .selected {
    cursor: default;
    background: $color-light-orange;
    border-color: $color-dark-orange !important;

    &:hover {
      background: $color-light-orange;
    }

    &:active {
      box-shadow: none;
    }
  }
}

.stats {
  position: absolute;
  top: 210px;
  left: 350px;
  text-align: left;

  > h2 {
    display: inline-block;
    width: 200px;
    color: $color-dark-blue;
    font-weight: normal;
    border-bottom: 1px solid $color-dark-blue;
  }

  table {
    position: relative;
    left: 10px;

    td:first-child {
      text-align: right;
      padding-right: 5px;
    }
  }

  .count {
    display: inline-block;
    min-width: 15px;
    padding: 2px 3px;
    color: $color-white;
    text-align: center;
    font-size: 0.8em;
    border-radius: 2px;

    &.wins {
      background: $color-dark-blue;
    }

    &.losses {
      background: $color-light-orange;
    }

    &.draws {
      background: $color-dark-gray;
    }
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .stats {
    position: static;
    text-align: center;

    table {
      width: 100px;
      margin: 0 auto;
      position: static;

      td {
        text-align: center;
      }
    }
  }
}

@media (max-width: 799px) {
  .stats {
    position: static;
    text-align: center;

    table {
      width: 100px;
      margin: 0 auto;
      position: static;

      td {
        text-align: center;
      }
    }
  }
}
</style>
