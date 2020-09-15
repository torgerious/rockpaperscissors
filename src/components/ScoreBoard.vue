<template>
   <div class="scoreboard">
    <div><p>👨 {{playerScore}}</p></div>
     <div><p>{{roundCount}} / 3</p></div>
     <div><p>💻 {{computerScore}}</p></div>
   </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component({
    components: {
    }
  })

export default class ScoreBoard extends Vue {
    @Prop({ default: 0 }) playerScore!: number
    @Prop({ default: 0 }) computerScore!: number
    @Prop({ default: 0 }) roundCount!: number
}
</script>

<style lang="scss" scoped>
  .scoreboard{
    width:400px;
    height: 40px;
    display: flex;
    background:#16020d;
    align-items: stretch;
    margin:59px auto 0 auto;
    box-shadow: -1px -7px 20px 4px #400020;
    div:nth-child(odd){
      flex-grow: 2;
      p{
        margin-top: 10px;
      }
    }
    div:nth-child(even){
      flex-grow: 8;
    }
  }

</style>
