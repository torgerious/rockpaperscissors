'use strict'

export enum GameChoice {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSOR = 'scissor',
}

export enum GameOutcome {
  PS = 'paperscissor', // lose
  PR = 'paperrock', // win
  PP = 'paperpaper', // draw

  RP = 'rockpaper', // lose
  RS = 'rockscissor', // win
  RR = 'rockrock', // draw

  SR = 'scissorrock', // lose
  SP = 'scissorpaper', // win
  SS = 'scissorscissor', // draw
}
