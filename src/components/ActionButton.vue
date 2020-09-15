<template>
  <button @click="clickHandler" :class="{disabled: disabled}" class="choice-button">
    {{buttonText}}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component({})
export default class ActionButton extends Vue {
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: 'text' }) buttonText!: boolean;

  clickHandler (event: any): void{
    this.$emit('action-click', event)
  }
}
</script>

<style lang="scss" scoped>
.choice-button{
  background: #AA076B;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #61045F, #AA076B);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #61045F, #AA076B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  margin: 5px;
  border: none;
  padding: 5px 18px;
  border-radius: 2px;
  box-shadow: 4px -4px 0px 0px #4d082a;
  text-shadow: black;
  color: #ff1a8f;
  letter-spacing: 2px;
  cursor: pointer;
}

  .disabled{
    opacity: 0.5;
    pointer-events: none;
  }
</style>
