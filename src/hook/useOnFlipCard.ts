import { useContext, useState } from 'react'

import { type Card, CardsContext, type CardsContextType } from '@context'

import { useFindSameCard } from '@/hook/useFindSameCard'
import { useFlipAllCards } from '@/hook/useFlipAllCards'
import { useSetCardPair } from '@/hook/useSetCardPair'
import { config } from '@config'

interface OnFlipCardT {
  id: string
  number: number
}

export const useOnFlipCard = ({ id, number }: OnFlipCardT) => {
  const {
    activeCards,
    setActiveCards,
    activeCardsWithoutPair,
    setActiveCardsWithoutPair
  } = useContext(CardsContext) as CardsContextType

  const [isActiveCard, setActiveCard] = useState(false)
  const [findSameCard] = useFindSameCard()
  const [flipAllCards] = useFlipAllCards()
  const [setCardPair] = useSetCardPair()

  const onFlipCard = () => {
    const areClickOnTheSameCard =
          activeCards.some(card => card.id === id) || activeCardsWithoutPair.some(card => card.id === id)

    if (areClickOnTheSameCard) return

    const haveSameCard = (activeCardsWithoutPair.length === 1) && (findSameCard(number) === number)
    if (haveSameCard) {
      setActiveCard(true)
      setCardPair()
      const activeCardWithPairInfo = {
        id,
        number,
        isActive: true,
        setActive: (value: boolean) => { setActiveCard(value) },
        hasPair: true
      }

      const cardsWithPair = activeCardsWithoutPair.filter(card => {
        return card.isActive && card.hasPair
      })

      setActiveCards(prev => [...prev, ...cardsWithPair, activeCardWithPairInfo])
      setActiveCardsWithoutPair([])

      const CARDS_BEFORE_DISPATCH_ACTIVE_CARDS = 2
      const allCardsAreActive = activeCards.length === config.numberOfCards - CARDS_BEFORE_DISPATCH_ACTIVE_CARDS
      if (allCardsAreActive) {
        console.log('ganaste!')
      }
      return
    }

    const thereAreMoreThanTwoActiveCards = activeCardsWithoutPair.length >= 2
    if (thereAreMoreThanTwoActiveCards) {
      flipAllCards()
      setActiveCardsWithoutPair([])
    }

    const activeCardWithoutPairInfo = {
      id,
      number,
      isActive: true,
      setActive: (value: boolean) => { setActiveCard(value) },
      hasPair: false
    }
    setActiveCard(true)
    setActiveCardsWithoutPair((prev: Card[]) => [...prev, activeCardWithoutPairInfo])
  }

  return [onFlipCard, isActiveCard]
}