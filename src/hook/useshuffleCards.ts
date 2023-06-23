import { config } from "@config"

export const useshuffleCards = () => {
  let shuffledCards: number[] = []

  const CARD_DUPLICATOR = 2
  const numberOfCards = config.numberOfCards / CARD_DUPLICATOR

  for (let i = 1; i <= numberOfCards; i++) {
    shuffledCards.push(i)
    shuffledCards.push(i)
  }

  return [...shuffledCards].sort((a, b) => 0.5 - Math.random())
}
