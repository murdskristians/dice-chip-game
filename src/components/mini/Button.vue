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
  }
  #button__repeat {
    left: 19%;
  }
  #button__undo {
    left: 77%;
  }
}
</style>
