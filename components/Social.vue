<template lang="pug">
  p
    a.social(href="mailto:georgi@gardev.com" title="Send me an email!")
      fa.fa-3x(icon="envelope")
    a.social(href="https://github.com/GeorgeSG" target="_blank" title="GitHub" rel="noreferrer")
      fa.fa-3x(:icon="['fab', 'github']")
    a.social(href="https://www.linkedin.com/in/georgigardev/" target="_blank" title="LinkedIn" rel="noreferrer")
      fa.fa-3x(:icon="['fab', 'linkedin']")
    a.social(href="http://steamcommunity.com/id/georgesg/" target="_blank" title="PC Master Race!" rel="noreferrer")
      fa.fa-3x(:icon="['fab', 'steam']")
    a.social(href="https://twitter.com/georgesg92" target="_blank" title="twitter" rel="noreferrer")
      fa.fa-3x(:icon="['fab', 'twitter']")
    a.social(href="https://open.spotify.com/user/11124147494?si=7XB-iCMxRvG5tDru_wkEVg" target="_blank" title="Spotify" rel="noreferrer")
      fa.fa-3x(:icon="['fab', 'spotify']")
    a.social(href="http://www.last.fm/user/GeorgeSG" target="_blank" title="last.fm" rel="noreferrer")
      fa.fa-3x(:icon="['fab', 'lastfm']")
</template>

<style lang="scss">
.social {
  color: $color-gray;
  text-decoration: none;
  padding: 0 4px;
  border-radius: 5px;

  &:hover {
    color: $color-dark-blue;
  }

  &:active {
    color: $color-dark-blue;
  }
}
</style>
