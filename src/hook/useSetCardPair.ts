import { CardsContext, type CardsContextType } from '@context'
import { useContext } from 'react'

export const useSetCardPair = () => {
  const { activeCardsWithoutPair, setActiveCards } = useContext(CardsContext) as CardsContextType

  const setCardPair = () => {
    activeCardsWithoutPair.forEach(card => {
      card.hasPair = true
    })
  }

  return [setCardPair]
}
