import { CardsContext, CardsContextType } from "@context"
import { useContext } from "react"

export const useFlipAllCards = () => {
  const { activeCardsWithoutPair } = useContext(CardsContext) as CardsContextType

  const flipAllCards = () => {
    activeCardsWithoutPair.forEach(card => {
      card.setActive(false)
    })
  }

  return [flipAllCards]
}