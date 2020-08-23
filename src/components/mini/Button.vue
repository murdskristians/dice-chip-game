<template>
  <div>
    <button
      type="submit"
      style="border: 0; background: transparent"
      :id="buttonId"
      class="game__button"
      @click="emitValue"
    >
      <img :src="require('@/assets/buttons/' + imgName + '')" alt="submit" />
    </button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Option extends Vue {
  @Prop()
  url!: string;
  @Prop()
  id!: string;

  imgName: string = this.url;
  buttonId: string = this.id;

  emitValue(): void {
    this.$emit("button-pressed");
  }
}
</script>
<style lang="scss" scoped>
.game {
  &__button {
    top: 71%;
    width: 6%;
    position: absolute;
  }
  img {
    cursor: pointer;
    width: 100%;

    &:hover {
        animation: select-chip 0.3s;
    }
  }
  #button__repeat {
    left: 19%;
  }
  #button__undo {
    left: 77%;
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
      width: 120%;
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
