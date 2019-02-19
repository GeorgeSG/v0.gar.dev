<template lang="pug">
  main
    h1 Georgi Gardev
    p
      | Hi! I'm currently working on this page,
      br
      | but you can play some Tic-Tac-Toe instead!
    p
      a.social(href="mailto:georgi@gardev.com" target="_blank" title="Send me an email!")
        fa.fa-3x(icon="envelope")
      a.social(href="https://github.com/GeorgeSG" target="_blank" title="GitHub")
        fa.fa-3x(:icon="['fab', 'github']")
      a.social(href="https://bitbucket.org/GeorgeSG" target="_blank" title="Bitbucket")
        fa.fa-3x(:icon="['fab', 'bitbucket']")
      a.social(href="https://www.linkedin.com/profile/view?id=154844036" target="_blank" title="LinkedIn")
        fa.fa-3x(:icon="['fab', 'linkedin']")
      a.social(href="http://steamcommunity.com/id/georgesg/" target="_blank" title="PC Master Race!")
        fa.fa-3x(:icon="['fab', 'steam']")
      a.social(href="https://twitter.com/georgesg92" target="_blank" title="twitter")
        fa.fa-3x(:icon="['fab', 'twitter']")
      a.social(href="http://www.last.fm/user/GeorgeSG" target="_blank" title="last.fm")
        fa.fa-3x(:icon="['fab', 'lastfm']")
    TicTacToe

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TicTacToe from '~/components/TicTacToe/TicTacToe.vue';

@Component({ components: { TicTacToe } })
export default class Home extends Vue {
}
</script>

<style lang="scss">
.social {
  color: #bbb;
  text-decoration: none;
  padding: 0 4px;
  border-radius: 5px;

  &:hover {
    color: #0085B2;
  }

  &:active {
    color: #006385;
  }
}
</style>
