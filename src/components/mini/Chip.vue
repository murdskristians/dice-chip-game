<template>
  <div>
    <label
      :id="chipId"
      class="game__chip"
      @click="emitValue"
      :class="{ 'game__chip--non-active': validate }"
    >
      <input type="radio" name="test" :value="chipValue" />
      <img :src="require('@/assets/chips/' + imgName + '')" />
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Chip extends Vue {
  @Prop()
  value!: number;
  @Prop()
  totalBilance!: number;
  @Prop()
  url!: string;
  @Prop()
  id!: string;

  bilance: number = this.totalBilance;
  chipId: string = this.id;
  imgName: string = this.url;
  chipValue: number = this.value;

  emitValue(): void {
    this.$emit("chip-value-driving", this.chipValue);
  }
  get validate() {
    return this.totalBilance - this.chipValue < 0;
  }
}
</script>
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
  animation: select-chip 1s;
}
.game {
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
  @keyframes select-chip {
    0% {
      width: 100%;
    }
    10% {
      opacity: 1;
      transition-property: left, top, opacity;
      transition-duration: 0.7s, 0.7s, 0.15s;
      transition-timing-function: ease;
    }
    50% {
      width: 125%;
	  opacity: 0.5;
    }
    100% {
      width: 100%;
      opacity: 1;
      transition-property: left, top, opacity;
    }
  }

}
</style>
