
<template>
  <div class="home">
    <modal
      :isShowing="isShowingModal"
      @action-click="resetGameData"
      :message="endResultGameMessage">
    </modal>

    <h1>ROCK <br> PAPER <br> SCISSORS</h1>

    <score-board
      :playerScore="playerScore"
      :computerScore="computerScore"
      :roundCount="roundCount">
    </score-board>

    <game-display-section>
      <hand-gesture :playerOutcome="playerOutcome" :computerOutcome="computerOutcome"  :isRunningAnimation="isRunningAnimation" :player="PlayerType.user"></hand-gesture>
      <hand-gesture :playerOutcome="playerOutcome" :computerOutcome="computerOutcome"  :isRunningAnimation="isRunningAnimation" :player="PlayerType.computer"></hand-gesture>
      <span v-if="currentGameResultMessage !== ''">{{currentGameResultMessage}}</span>
    </game-display-section>

    <action-button
      @action-click="onClickGameStarter(choices)"
      :key="i"
      v-for="(choices, i) in gameChoices"
      :disabled="isRunningAnimation"
      :buttonText="choices">
    </action-button>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { GameChoice, GameOutcome } from '@/types/GameChoice'
import GameDisplaySection from '@/components/GameDisplaySection.vue'
import HandGesture from '@/components/HandGesture.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import ActionButton from '@/components/ActionButton.vue'
import Modal from '@/components/Modal.vue'

@Component({
  components: {
    Modal,
    ActionButton,
    ScoreBoard,
    HandGesture,
    GameDisplaySection
  }
})
export default class Game extends Vue {
    gameChoices: Array<GameChoice> = [GameChoice.PAPER, GameChoice.ROCK, GameChoice.SCISSOR];
    isRunningAnimation = false;
    isGameOver = false;
    playerOutcome = '';
    computerOutcome = '';
    roundCount = 0;
    playerScore = 0;
    computerScore = 0;
    currentGameResultMessage = '';
    endResultGameMessage = '';
    isShowingModal = false;

    generateComputerChoice (): GameChoice {
      let computerChoice: GameChoice = GameChoice.SCISSOR
      const randomChoice: number = Math.floor(Math.random() * 3)

      if (randomChoice === 0) {
        computerChoice = GameChoice.ROCK
      }
      if (randomChoice === 1) {
        computerChoice = GameChoice.PAPER
      }
      if (randomChoice === 2) {
        computerChoice = GameChoice.SCISSOR
      }

      return computerChoice
    }

    runGameLoop (playerChoice: GameChoice, computerChoice: GameChoice, gameResult: string): void{
      this.isRunningAnimation = true

      setTimeout(() => {
        this.isRunningAnimation = false
        this.playerOutcome = playerChoice
        this.computerOutcome = computerChoice
        this.updateScore(gameResult)
        this.checkForEndGameLoop()
      }, 2000)
    }

    checkForEndGameLoop (): void{
      this.roundCount = this.roundCount + 1
      if (this.roundCount === 3) {
        this.isShowingModal = true
        if (this.playerScore > this.computerScore) {
          this.endResultGameMessage = 'YOU WON'
        } else if (this.playerScore === this.computerScore) {
          this.endResultGameMessage = 'DRAW!'
        } else {
          this.endResultGameMessage = 'YOU LOST!'
        }
      }
    }

    updateScore (gameResult: string): void{
      if (gameResult === GameOutcome.PR || gameResult === GameOutcome.RS || gameResult === GameOutcome.SP) {
        this.currentGameResultMessage = 'You won!'
        this.playerScore = this.playerScore + 1
      } else if (gameResult === GameOutcome.PP || gameResult === GameOutcome.RR || gameResult === GameOutcome.SS) {
        this.currentGameResultMessage = 'Draw!'
        this.playerScore = this.playerScore + 1
        this.computerScore = this.computerScore + 1
      } else {
        this.currentGameResultMessage = 'You loose!'
        this.computerScore = this.computerScore + 1
      }
    }

    onClickGameStarter (playerChoice: GameChoice): void {
      // reset previous outcome
      this.playerOutcome = ''
      this.computerOutcome = ''
      this.currentGameResultMessage = ''

      const computerChoice: GameChoice = this.generateComputerChoice()
      const gameResult: string = playerChoice + computerChoice

      this.runGameLoop(playerChoice, computerChoice, gameResult)
    }

    resetGameData (): void{
      this.isRunningAnimation = false
      this.isGameOver = false
      this.playerOutcome = ''
      this.computerOutcome = ''
      this.roundCount = 0
      this.playerScore = 0
      this.computerScore = 0
      this.currentGameResultMessage = ''
      this.isShowingModal = false
    }
}
</script>

<style lang="scss">
  h1{
    font-family: 'Saira Stencil One', cursive;
    text-shadow: 3px 0px 20px #ff1a8f;
    color: #000000;
    line-height: 21px;
  }

  span{
    position: absolute;
    margin-top: 13px;
    background: #16020d;
    padding: 2px 7px;
    border-radius: 11px;
    color: white;
    box-shadow: 0px 0px 20px 0px #1bd3ff;
  }
</style>
