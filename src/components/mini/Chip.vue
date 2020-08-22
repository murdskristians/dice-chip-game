<template>
  <div>
    <label
      id="chip__1000"
      class="game__chip"
      :class="{ 'game__chip--non-active': this.bilance - this.value < 0 }"
    >
      <input type="radio" name="test" value=this.value v-model="selectedChip" />
      <img src="../assets/chips/1000.png" />
    </label>
  </div>
</template>

<script lang="ts">
// import { Component, Prop, Vue } from "vue-property-decorator";

// @Component
// export default class Chip extends Vue {
//   @Prop()
//   value: number | null = null;
//   bilance: number | null = null;

//   emitValue(value:number):void {
//     this.$emit('chip-value-driving', value);
//     console.log(value);
//   }
// }
</script>