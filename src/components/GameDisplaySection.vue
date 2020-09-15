<template>
<div class="game-display-section">
  <slot>
  <!-- content -->
  </slot>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: {
    }
  })
export default class GameDisplaySection extends Vue {

}
</script>

<style lang="scss" scoped>

.game-display-section{
  width: 400px;
  height: 200px;
  /*background: #4d082a;*/
  background:linear-gradient(0deg, rgba(241, 0, 255, 0.8), rgba(255, 10, 132, 0.8)),  url("../assets/background1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover ;
  margin: 0 auto 33px auto;
  display: flex;
  justify-content: center;

}
</style>
