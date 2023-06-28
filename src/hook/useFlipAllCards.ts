import { CardsContext, CardsContextType } from "@context"
import { useContext } from "react"

export const useFlipAllCards = () => {
  const { activeCards } = useContext(CardsContext) as CardsContextType

  const flipAllCards = () => {
    activeCards.filter(card => {
      return card.isActive && card.hasPair === false
    }).forEach(card => {
      card.setActive(false)
    })
  }

  return [flipAllCards]
}