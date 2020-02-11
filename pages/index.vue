<template lang="pug">
  main
    h1 Georgi Gardev
    p
      | Hi! I'm currently working on this page,
      br
      | but you can play some Tic-Tac-Toe instead!
    Social
    TicTacToe

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TicTacToe from '~/components/TicTacToe/TicTacToe.vue';
import Social from '~/components/Social.vue';

@Component({ components: { TicTacToe, Social } })
export default class Home extends Vue {}
</script>
