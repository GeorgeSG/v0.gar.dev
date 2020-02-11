<template lang="pug">
  main
    h1 Georgi Gardev
    p
      | Hi! I'm currently working on this page,
      br
      | but you can play some Tic-Tac-Toe instead!
    p
      a.social(href="mailto:georgi@gardev.com" title="Send me an email!")
        fa.fa-3x(icon="envelope")
      a.social(href="https://github.com/GeorgeSG" target="_blank" title="GitHub" rel="noreferrer")
        fa.fa-3x(:icon="['fab', 'github']")
      a.social(href="https://bitbucket.org/GeorgeSG" target="_blank" title="Bitbucket" rel="noreferrer")
        fa.fa-3x(:icon="['fab', 'bitbucket']")
      a.social(href="https://www.linkedin.com/profile/view?id=154844036" target="_blank" title="LinkedIn" rel="noreferrer")
        fa.fa-3x(:icon="['fab', 'linkedin']")
      a.social(href="http://steamcommunity.com/id/georgesg/" target="_blank" title="PC Master Race!" rel="noreferrer")
        fa.fa-3x(:icon="['fab', 'steam']")
      a.social(href="https://twitter.com/georgesg92" target="_blank" title="twitter" rel="noreferrer")
        fa.fa-3x(:icon="['fab', 'twitter']")
      a.social(href="http://www.last.fm/user/GeorgeSG" target="_blank" title="last.fm" rel="noreferrer")
        fa.fa-3x(:icon="['fab', 'lastfm']")

    p Oops. It looks like you got lost there! This page doesn't exist... yet :)
</template>
