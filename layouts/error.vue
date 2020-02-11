<template lang="pug">
  main
    h1 Georgi Gardev
    p Oops. It looks like you got lost there! This page doesn't exist... yet :)
    Social
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Social from '~/components/Social.vue';

@Component({ components: { Social } })
export default class ErrorPage extends Vue {}
</script>
