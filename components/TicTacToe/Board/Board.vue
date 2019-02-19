<template lang="pug">
  .board
    Cell(
      v-for="(cellState, index) of cellStates"
      :key="index"
      :state="cellState"
      :disabled="finished"
      @select="$emit('place', index)")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Cell from './Cell/Cell.vue';
import { CellState } from '~/plugins/tic-tac-toe/cell-state';

@Component({ components: { Cell } })
export default class Board extends Vue {
  @Prop({required: true})
  cellStates: CellState[];

  @Prop({ required: false, default: false })
  finished: boolean;
}
</script>

<style lang="scss">
.board {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 210px;
  height: 210px;
  background: #fff;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
</style>
