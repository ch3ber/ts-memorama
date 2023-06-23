import { CardsContext, CardsContextType } from "@/context/CardsContext"
import { useContext } from "react"

export const useFindSameCard = () => {
  const { cards } = useContext(CardsContext) as CardsContextType

  const find = (number: number) => {
    return cards.find(card => card.number === number)
  }

  return [find]
}