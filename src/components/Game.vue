<template>
  <div class="game">
    <div class="info">
      <!-- Info Panel -->
      <p>Bilance is: {{ this.bilance }}</p>
      <p>Selected chip: {{ this.selectedChip }}</p>
      <p>Total bet: {{ this.bet }}</p>
      <p>Selected bet: {{ this.totalSelected }}</p>
    </div>

    <img src="../assets/Background.png" class="game__background" />

      <!-- options -->
    <button
      type="submit"
      style="border: 0; background: transparent"
      id="option__one"
      class="game__option"
    >
      <img src="../assets/options/1.png" alt="submit" v-on:click="addBet(1)" />
    </button>
    <button
      type="submit"
      style="border: 0; background: transparent"
      id="option__two"
      class="game__option"
    >
      <img src="../assets/options/2.png" alt="submit" v-on:click="addBet(2)" />
    </button>
    <button
      type="submit"
      style="border: 0; background: transparent"
      id="option__three"
      class="game__option"
    >
      <img src="../assets/options/3.png" alt="submit" v-on:click="addBet(3)" />
    </button>
    <button
      type="submit"
      style="border: 0; background: transparent"
      id="option__four"
      class="game__option"
    >
      <img src="../assets/options/4.png" alt="submit" v-on:click="addBet(4)" />
    </button>
    <button
      type="submit"
      style="border: 0; background: transparent"
      id="option__five"
      class="game__option"
    >
      <img src="../assets/options/5.png" alt="submit" v-on:click="addBet(5)" />
    </button>
    <button
      type="submit"
      style="border: 0; background: transparent"
      id="option__six"
      class="game__option"
    >
      <img src="../assets/options/6.png" alt="submit" v-on:click="addBet(6)" />
    </button>

<!-- Chips -->
    <label
      id="chip__1"
      class="game__chip"
      :class="{ 'game__chip--non-active': this.bilance - 1 < 0 }"
    >
      <input type="radio" name="test" value="1" v-model="selectedChip" />
      <img src="../assets/chips/1.png" />
    </label>
    <label
      id="chip__5"
      class="game__chip"
      :class="{ 'game__chip--non-active': this.bilance - 5 < 0 }"
    >
      <input type="radio" name="test" value="5" v-model="selectedChip" />
      <img src="../assets/chips/5.png" />
    </label>
    <label
      id="chip__25"
      class="game__chip"
      :class="{ 'game__chip--non-active': this.bilance - 25 < 0 }"
    >
      <input type="radio" name="test" value="25" v-model="selectedChip" />
      <img src="../assets/chips/25.png" />
    </label>
    <label
      id="chip__100"
      class="game__chip"
      :class="{ 'game__chip--non-active': this.bilance - 100 < 0 }"
    >
      <input type="radio" name="test" value="100" v-model="selectedChip" />
      <img src="../assets/chips/100.png" />
    </label>
    <label
      id="chip__500"
      class="game__chip"
      :class="{ 'game__chip--non-active': this.bilance - 500 < 0 }"
    >
      <input type="radio" name="test" value="500" v-model="selectedChip" />
      <img src="../assets/chips/500.png" />
    </label>
    <label
      id="chip__1000"
      class="game__chip"
      :class="{ 'game__chip--non-active': this.bilance - 1000 < 0 }"
    >
      <input type="radio" name="test" value="1000" v-model="selectedChip" />
      <img src="../assets/chips/1000.png" />
    </label>

<!-- Buttons -->
    <button
      type="submit"
      style="border: 0; background: transparent"
      id="button__repeat"
      class="game__button"
    >
      <img
        src="../assets/buttons/Repeat.png"
        alt="submit"
        v-on:click="repeatBet"
      />
    </button>

    <button
      type="submit"
      style="border: 0; background: transparent"
      id="button__undo"
      class="game__button"
    >
      <img
        src="../assets/buttons/Undo.png"
        alt="submit"
        v-on:click="undoBet"
      />
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import Option from "./mini/Option.vue";
// import Chip from "./mini/Chip.vue";

@Component
// ({
//   components: {
//     Chip,
//     Option,
//   },
// })
export default class Game extends Vue {
  bilance: number = 5000;
  bet: number = 0;
  selectedChip: number = 0;

  selectedOptions:any = {
    1: {
      selected: false,
      value: 0
    },
    2: {
      selected: false,
      value: 0
    },
    3: {
      selected: false,
      value: 0
    },
    4: {
      selected: false,
      value: 0
    },
    5: {
      selected: false,
      value: 0
    },
    6: {
      selected: false,
      value: 0
    }
  }

  addBet( optionNr:number ) {
    if (this.bilance - this.selectedChip < 0) return;
    if ( this.totalSelected >= 2 && this.selectedOptions[optionNr].selected === false ) return;

    this.selectedOptions[optionNr].selected = true;
    this.selectedOptions[optionNr].value += Number(this.selectedChip);
    
    

    this.bilance -= Number(this.selectedChip);
    this.bet += Number(this.selectedChip);
  }

  repeatBet() {
    if (this.bilance - this.bet < 0) return;

    this.bilance -= this.bet;
    this.bet *= 2
  }

  undoBet() {
    this.bilance += this.bet
    this.bet = 0

    this.selectedOptions = {
    1: {
      selected: false,
      value: 0
    },
    2: {
      selected: false,
      value: 0
    },
    3: {
      selected: false,
      value: 0
    },
    4: {
      selected: false,
      value: 0
    },
    5: {
      selected: false,
      value: 0
    },
    6: {
      selected: false,
      value: 0
    }
  }
  }

  get totalSelected() {
    let num = Object.values(this.selectedOptions).filter( (a:any)=> a.selected == true)
    return num.length
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* HIDE RADIO */
[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
/* IMAGE STYLES */
[type="radio"] + img {
  cursor: pointer;
  width: 100%;
}
/* CHECKED STYLES */
[type="radio"]:checked + img {
  outline: 2px solid #f00;
}
button img {
  cursor: pointer;
  width: 100%;
}

.info {
  background-color: black;
  font-size: 5em;
  color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
}
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
    transform: skewY(22deg) rotate(-33deg);
    top: 52%;
  }

  &__chip {
    width: 6%;
    position: absolute;

    &--non-active {
      filter: saturate(0);
      opacity: 0.5;
    }
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
