<template>
  <div>
    <button
      type="submit"
      style="border: 0; background: transparent"
      :id="optionId"
      class="game__option"
      @click="emitValue"
    >
      <img
        :src="require('@/assets/options/' + imgName + '')"
        alt="submit"
        :class="{ 'game__option--active': optionSelected }"
      />
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Option extends Vue {
  @Prop()
  value!: number;
  @Prop()
  url!: string;
  @Prop()
  id!: string;
  @Prop()
  isSelected!: boolean;

  imgName: string = this.url;
  optionId: string = this.id;
  optionValue: number = this.value;

  emitValue(): void {
    this.$emit("option-value-driving", this.optionValue);
  }

  get optionSelected() {
    return this.isSelected;
  } 
}
</script>
<style scoped lang="scss">
.game {
  &__option {
    filter: brightness(1);
    position: absolute;
    width: 4%;

    & > img {
      width: 100%;
    }
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
  &__option--active {
    background: url(../../assets/chips/chips.png)  no-repeat center;
    background-color: green;
    background-size: 100%;
  }
}
</style>
