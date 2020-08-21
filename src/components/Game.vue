<template>
  <div class="game">
    <img src="../assets/Background.png" class="game__background" />
    <img src="../assets/options/1.png" id="option__one" class="game__option" />
    <img src="../assets/options/2.png" id="option__two" class="game__option" />
    <img
      src="../assets/options/3.png"
      id="option__three"
      class="game__option"
    />
    <img src="../assets/options/4.png" id="option__four" class="game__option" />
    <img src="../assets/options/5.png" id="option__five" class="game__option" />
    <img src="../assets/options/6.png" id="option__six" class="game__option" />

    <img src="../assets/chips/1.png" id="chip__1" class="game__chip" />
    <img src="../assets/chips/5.png" id="chip__5" class="game__chip" />
    <img src="../assets/chips/25.png" id="chip__25" class="game__chip" />
    <img src="../assets/chips/100.png" id="chip__100" class="game__chip" />
    <img src="../assets/chips/500.png" id="chip__500" class="game__chip" />
    <img src="../assets/chips/1000.png" id="chip__1000" class="game__chip" />

    <img
      src="../assets/buttons/Repeat.png"
      id="button__repeat"
      class="game__button"
    />
    <img
      src="../assets/buttons/Undo.png"
      id="button__undo"
      class="game__button"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Game extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.game {
  &__background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &__option {
    filter: brightness(1);
    position: absolute;
    width: 4%;
  }

  #option__one {
    left: 25%;
    transform: skewY(-17deg) rotate(32deg);
    top: 52%;
  }
  #option__two {
    left: 34%;
    transform: skewY(-14deg) rotate(22deg);
    top: 55%;
  }
  #option__three {
    left: 44%;
    transform: skewY(-6deg) rotate(8deg);
    top: 56%;
  }
  #option__four {
    left: 52%;
    transform: skewY(12deg) rotate(-16deg);
    top: 56%;
  }
  #option__five {
    left: 62%;
    transform: skewY(18deg) rotate(-26deg);
    top: 55%;
  }
  #option__six {
    left: 71%;
    transform: skewY(22deg) rotate(-37deg);
    top: 52%;
  }

  &__chip {
    width: 6%;
    position: absolute;
  }

  #chip__1 {
    left: 27%;
    top: 76%;
  }
  #chip__5 {
    left: 35%;
    top: 78%;
  }
  #chip__25 {
    left: 44%;
    top: 80%;
  }
  #chip__100 {
    left: 52%;
    top: 80%;
  }
  #chip__500 {
    left: 61%;
    top: 78%;
  }
  #chip__1000 {
    left: 69%;
    top: 76%;
  }

  &__button {
    top: 71%;
    width: 6%;
    position: absolute;
  }

  #button__repeat {
    left: 19%;
  }
  #button__undo {
    left: 77%;
  }
}
</style>
