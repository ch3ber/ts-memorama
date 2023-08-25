import { CardsContext, type CardsContextType } from '@context'
import { useContext } from 'react'

export const useFindSameCard = () => {
  const { activeCardsWithoutPair } = useContext(CardsContext) as CardsContextType
  const find = (numberCard: number) => {
    const card = activeCardsWithoutPair.find(card => card.number === numberCard)
    return card?.number ?? null
  }

  return [find]
}
