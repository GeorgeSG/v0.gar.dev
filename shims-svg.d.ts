declare module '*.svg' {
  import Vue, { VNode, Component } from 'vue';

  type Svg = Component<Vue>;

  const content: Svg;
  export default content;
}
