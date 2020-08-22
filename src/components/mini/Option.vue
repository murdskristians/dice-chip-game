<template>
  <div>
    <button
      type="submit"
      style="border: 0; background: transparent"
      id="option__three"
      class="game__option"
      @click="emitValue(value)"
    >
      <img src="../assets/options/3.png" alt="submit" v-on:click="addBet()" />
    </button>
  </div>
</template>

<script lang="ts">
// import { Component, Prop, Vue } from "vue-property-decorator";

// @Component
// export default class Chip extends Vue {
//   @Prop()
//   value: number | null = null;

//   emitValue(value:number):void {
//     this.$emit('option-value-driving', value);
//     console.log(value);
//   }
// }
</script>