import { CardsContext, CardsContextType } from "@context"
import { useContext } from "react"

export const useFindSameCard = () => {
  const { activeCards } = useContext(CardsContext) as CardsContextType
  const find = (numberCard: number) => {
    const card = activeCards.find(card => card.number === numberCard)
    return card?.number || null
  }

  return [find]
}