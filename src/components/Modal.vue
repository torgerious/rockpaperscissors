<template>
    <div class="layer" v-if="isShowing">
      <div class="modal">
        <div class="modal__header">
        <h2>{{message}}</h2>
        </div>

        <div class="modal__action">
          <action-button @action-click="clickHandler" :button-text="'New game'"></action-button>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ActionButton from '@/components/ActionButton.vue'

  @Component({
    components: { ActionButton }
  })
export default class Modal extends Vue {
    @Prop({ default: false }) isShowing!: boolean;
    @Prop({ default: '' }) message!: string;

    clickHandler (event: any): void{
      this.$emit('action-click', event)
    }
}
</script>

<style lang="scss" scoped>

  .layer{
    position: fixed;
    background: rgba(44,61,109,.49);
    box-shadow: 0 0 2px #333;
    width: 100%;
    height: 100vh;
    margin: 0;
    z-index: 22;
    top: 0;
    left: 0;
    .modal{
      width: 50%;
      margin: 250px 25%;
      box-shadow: 0 0 11px 2px #79005f;
      min-height: 300px;
      background: #27003c;
      h2{
        font-family: 'Saira Stencil One', cursive;
        text-shadow: 3px 0px 20px #ff1a8f;
        color: #ffffff;
        padding-top: 67px;
      }
      button{
        margin-top: 90px;
      }
    }
  }

</style>
