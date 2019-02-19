<template lang="pug">
  input.cell(:disabled="disabled" type="button" @click="$emit('select')" :class="classNames")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CellState } from '~/plugins/tic-tac-toe/cell-state';

@Component
export default class Cell extends Vue {
  @Prop({ required: false, default: null })
  state: CellState;

  @Prop({ required: false, default: false })
  disabled: boolean;

  get classNames() {
    return {
      placed: this.state !== null,
      x: this.state === 'x',
      o: this.state === 'o'
    }
  }
}
</script>


<style lang="scss">
.cell {
  width: 70px;
  height: 70px;
  background: #fff;
  border-top: 0;
  border-left: 0;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  &:not(.placed):not(:disabled):hover {
    cursor: pointer;
    background: #0085B2;
  }

  &:not(.placed):not(:disabled):active {
    box-shadow: inset 0px 0px 83px 0px rgba(0,0,0,0.38);
  }

  &.placed {
    background-repeat: no-repeat;
    background-position: center center;
  }

  &.x {
    background-image: url(data:image/png;base64,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);
  }

  &.o {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAtCAYAAADsvzj/AAAABmJLR0QA/wCPABm9JYiOAAAACXBIWXMAAEbJAABGyQGVdoTuAAAAB3RJTUUH3gsdFQ8omYO8AgAABQdJREFUaN7dmltoHFUYx38nqWlj0qatLTqmYgxFW6XipTVoSvIQLxQUH6Kh8UGLCk37ID0KakVBVOrdERRUUESi1ktLRa1WQRQhYou1SmqCumprtMc2TauRZtNtm/Fhv8gynLM7k90Zwe9l4ZyZOfOf813+3/+sIiELfG8GcBqwALgMuAloBk4CxoFvgCeBbUqbbLnrqQq+uALmAxfKiy8FFsrYTGCa5bZR4B3gCWC30ib4z4AEvlcHLAOuBTrk5WtjPuYX4GGgV2kzniqQwPcagBXiMq3y1cuxLPAi8KDSZjhxIIHvTQeuAm4DlgPTLZeNA38C+4FhYETipdXhYv8+HtgMaKXNb4kBCXxvIXAXsBKoL1h8FPgZ6JcgHgD2CogjQA6YAzwE3AzUlFhqK9ATB4yKEchXAo8AFxRMfQq8DXwNZIDDSpuJEvG0BrgbOKXEsm8Ba5U2IxUBEvheFXAD8Li4x6TtArqUNpmYu1otrvkAcHEJN/OB9UqbXKnnVkVY+3rg6RCIg8C9cUEAKG1OKG0+ADqB54C/i3zk1fIRKQtI4HstwKMhNzgueX9bWQVMm73AOsl6ux2X1QHrA99bPGXXkvT6KnB1aGoLsEppM1rBYtoqazU5LnlJ4iU3lR3pEl8utCFgQyVByO70AfcDY45LrgPaYrtW4HuNwFrhRZM2ATyrtPkqIXr2JvC6Y64B6Al8rzbujqwAloTGdgG9SZFMoSZPAT85LukQKhQNSOB7MyVTVYemXlPaGBI0pc2g0BQbeZwNdElNi7Qj54WKHsA+4CPSsTeAH4rsyulRgbQD80JjGaEciZvSZg+wyTHdDLREBbLMMj4OnCA9ew84ZBmvEeIZCcgiy1gjMCtFIP3ATsfcRcLZSgI51cF7grRQKG3GgM8d003SdZYEUm8ZOybUJE370lEg5wJeFCC2xqfW0UAlaRnggGX8ZJvX2IDkHJV1VspAhoFfHR96dhQgo45i1JQykCzwexFWXBLIkMO1LkkThXSaLiYxEQXIgOPmy4Xap2mupisXBUifZClboVyeMpCjlrHjtmJpA7JdZBxbtlgT+F6aQT/NITUdiALke+ALx4OvECkoLauzjI3YYqfKEmRHpZ3NObjOPYHvXZo0AqHrNpaxx+YxrsbqY2CHY+5MwA98b1HCWGaQV/KxtBTZSECUNoeAF8QfbdYCPB/43jkJApkHnGUZ/8MmAhYTH7aQl/xd1g70JuhmZ9s4FTAYS0VR2hwBNrhuLEjJGwPfu6WYMDBFa5NMWWgHXfS+qkR17QfudJC3wph5RlztfFdPHTPQ50iGtDHiwdhAxLYCd5QAUwvcCLwL3Bf4XnOZgNrJn3yFudcrrmO6OGp8J/CYIwDDTVhGdKrNwEAUEbpgrXrRt64JTW0EbpWma2pAChZZSv6Mo4PiBzaTtl86vfelyA5JnSq2Rjd5ibQw5r4FukUuomwgstBcoBvoARZb9C8c/MjIC22X34z0HFmpGY2S1m8P6QbfAatFVqViQAoAnUFekVwpykZNjNtzwGGJu7/Inz82kj/Vqi5w0T5gndJmZ0naX4EM0wCsArRksErYCPAy4Ctt9kXqXyrIi84lf9bRKYCqYz5mQmLqQ4mRHUqbyIJHxf4wIICqpCVukzqwRFymnryyr0LKzJjEzgDwGfAJ8KPS5ljsjjJB9jopEiwQqjFfaHkgDdOw7MAQMDKVl/9f2j8B3XOZyUnYJQAAAABJRU5ErkJggg==);
  }
}
</style>
