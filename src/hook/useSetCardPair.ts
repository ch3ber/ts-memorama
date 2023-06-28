import { CardsContext, CardsContextType } from "@context"
import { useContext } from "react"

export const useSetCardPair = () => {
  const { activeCards, setActiveCards } = useContext(CardsContext) as CardsContextType

  const setCardPair = () => {
    const activeCardsToSetPair = activeCards.filter(card => {
      return card.isActive && card.hasPair === false
    })

    activeCardsToSetPair.forEach(card => {
      card.hasPair = true
    })

    setActiveCards(activeCardsToSetPair)
  }

  return [setCardPair]
}