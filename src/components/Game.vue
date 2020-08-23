<template>
  <!-- Game is made by Kristians Murds -->
  <div class="game">
    <div class="info">
      <!-- Info Panel for testing purposes-->
      <p>balance is: {{ this.balance }}</p>
      <p>Selected chip: {{ this.selectedChip }}</p>
      <p>Total bet: {{ this.bet }}</p> 
    </div>

    <img src="../assets/Background.png" class="game__background" />

  <!-- options -->
  <section>
    <Option
      :value="1"
      url="1.png"
      id="option__one"
      @option-value-driving="addBet(1)"
      :isSelected="selectedOptions[1].selected"
     />
    <Option
      :value="2"
      url="2.png"
      id="option__two"
      @option-value-driving="addBet(2)"
      :isSelected="selectedOptions[2].selected"
     />
    <Option
      :value="3"
      url="3.png"
      id="option__three"
      @option-value-driving="addBet(3)"
      :isSelected="selectedOptions[3].selected"
     />
    <Option
      :value="4"
      url="4.png"
      id="option__four"
      @option-value-driving="addBet(4)"
      :isSelected="selectedOptions[4].selected"
     />
    <Option
      :value="5"
      url="5.png"
      id="option__five"
      @option-value-driving="addBet(5)"
      :isSelected="selectedOptions[5].selected"
     />
    <Option
      :value="6"
      url="6.png"
      id="option__six"
      @option-value-driving="addBet(6)"
      :isSelected="selectedOptions[6].selected"
     />
  </section>
<!-- Chips -->
<section>
    <Chip
      :value="1"
      :totalbalance="balance"
      url="1.png"
      id="chip__1"
      @chip-value-driving="changeSelectedChip"
     />
    <Chip
      :value="5"
      :totalbalance="balance"
      url="5.png"
      id="chip__5"
      @chip-value-driving="changeSelectedChip"
     />
    <Chip
      :value="25"
      :totalbalance="balance"
      url="25.png"
      id="chip__25"
      @chip-value-driving="changeSelectedChip"
     />
    <Chip
      :value="100"
      :totalbalance="balance"
      url="100.png"
      id="chip__100"
      @chip-value-driving="changeSelectedChip"
     />
    <Chip
      :value="500"
      :totalbalance="balance"
      url="500.png"
      id="chip__500"
      @chip-value-driving="changeSelectedChip"
     />
    <Chip
      :value="1000"
      :totalbalance="balance"
      url="1000.png"
      id="chip__1000"
      @chip-value-driving="changeSelectedChip"
     />
</section> 

<!-- Buttons -->
    <ActionButton 
      url="Repeat.png"
      id="button__repeat"
      @button-pressed="repeatBet"
    />
    <ActionButton 
      url="Undo.png"
      id="button__undo"
      @button-pressed="undoBet"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Option from './mini/Option.vue';
import Chip from "./mini/Chip.vue";
import ActionButton from "./mini/Button.vue";

@Component({
  components: {
    Chip,
    Option,
    ActionButton,
  },
})
export default class Game extends Vue {
  balance: number = 5000;
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
  changeSelectedChip( value:number ):void  {
    this.selectedChip = value;
  }
  addBet( optionNr:number ):void  {
    //If not enough money to bet
    if (this.balance - this.selectedChip < 0) return;
    //If 2 options are already selected and want to select third
    if ( this.totalSelected >= 2 && this.selectedOptions[optionNr].selected === false ) return;

    this.selectedOptions[optionNr].selected = true;
    this.selectedOptions[optionNr].value += Number(this.selectedChip);
    
    this.balance -= Number(this.selectedChip);
    this.bet += Number(this.selectedChip);
  }

  repeatBet():void {
    if (this.balance - this.bet < 0) return;

    this.balance -= this.bet;
    this.bet *= 2
  }

  undoBet():void {
    this.balance += this.bet
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

  get totalSelected():number {
    let num = Object.values(this.selectedOptions).filter( (a:any)=> a.selected == true)
    return num.length
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info {
  background-color: black;
  font-size: 2.5em;
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
}
</style>
