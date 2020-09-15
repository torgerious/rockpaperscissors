<template>
<div>

  <img v-if="playerOutcome === '' " :class="classList()" src="../assets/strong.svg" alt="player-hand" class="hand-gesture">

  <!-- render gesture choice  -->
  <img v-if="playerOutcome === GameChoice.PAPER && player === PlayerType.user" :class="classList()" src="../assets/paper.svg" alt="player-hand" class="hand-gesture">
  <img v-if="playerOutcome === GameChoice.SCISSOR && player === PlayerType.user" :class="classList()" src="../assets/left-peace.svg" alt="player-hand" class="hand-gesture">
  <img v-if="playerOutcome === GameChoice.ROCK && player === PlayerType.user" :class="classList()" src="../assets/left-fist.svg" alt="player-hand" class="hand-gesture">
  <img v-if="computerOutcome === GameChoice.PAPER && player === PlayerType.computer" :class="classList()" src="../assets/paper.svg" alt="player-hand" class="hand-gesture">
  <img v-if="computerOutcome === GameChoice.SCISSOR && player === PlayerType.computer" :class="classList()" src="../assets/left-peace.svg" alt="player-hand" class="hand-gesture">
  <img v-if="computerOutcome === GameChoice.ROCK && player === PlayerType.computer" :class="classList()" src="../assets/left-fist.svg" alt="player-hand" class="hand-gesture">

</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { PlayerType } from '@/types/PlayerType'

  @Component({
    components: {
    }
  })
export default class HandGesture extends Vue {
    @Prop({ default: PlayerType.user }) player!: PlayerType;
    @Prop({ default: false }) isRunningAnimation!: boolean;
    @Prop({ default: '' }) playerOutcome!: string;
    @Prop({ default: '' }) computerOutcome!: string;

    classList (): string {
      const classList: Array<string> = []

      if (this.player === PlayerType.user) {
        classList.push('hand-gesture--' + 'user')
      } else {
        classList.push('hand-gesture--' + 'computer')
      }

      if (this.isRunningAnimation && this.player === PlayerType.user) {
        classList.push('hand-gesture--left-hand-animation')
      }

      if (this.isRunningAnimation && this.player === PlayerType.computer) {
        classList.push('hand-gesture--right-hand-animation')
      }
      return classList.join(' ')
    }
}
</script>

<style lang="scss" scoped>

  img{
    transition: 0.1s;
  }

  .hand-gesture{
    height:70px;
    margin:45px 18px;
    &--computer{
      transform: scaleX(-1);
    }
    &--left-hand-animation{
      animation-name: left;
      animation-duration: 2s;
      animation-fill-mode:forwards;

    }
    &--right-hand-animation{
      animation-name: right;
      animation-duration: 2s;
      animation-fill-mode:forwards;
    }
  }

  @keyframes left {
    0% { transform: rotate(0deg);}
    20%  { transform: rotate(42deg);}
    40%  { transform: rotate(0deg);}
    60% { transform: rotate(42deg);}
    80% { transform: rotate(0deg);}
    100% { transform: rotate(42deg);}

  }

  @keyframes right {
    0% { transform: rotate(0deg) scaleX(-1);}
    20%  { transform: rotate(-42deg) scaleX(-1);}
    40%  { transform: rotate(0deg) scaleX(-1);}
    60% { transform: rotate(-42deg) scaleX(-1);}
    80% { transform: rotate(0deg) scaleX(-1);}
    100% { transform: rotate(-42deg) scaleX(-1);}

  }

</style>
