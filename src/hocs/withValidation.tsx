'use client'
import { FC, useContext, useState } from "react"
import { UUID } from "crypto"

import { Card, CardsContext, CardsContextType } from "@context"

import { useFindSameCard } from "@/hook/useFindSameCard"
import { useFlipAllCards } from "@/hook/useFlipAllCards"
import { useSetCardPair } from "@/hook/useSetCardPair"

export const withValidation = (Component: FC, id: UUID, number: number) => {
  // eslint-disable-next-line react/display-name
  return function (props: any) {
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

    const validation = () => {
      console.log({ activeCards })
      const areClickOnTheSameCard = activeCards.some(card => card.id === id)
      if (areClickOnTheSameCard) return

      const haveSameCard = (activeCardsWithoutPair === 1) && (findSameCard(number) === number)
      if (haveSameCard) {
        console.log('has encontrado un par!!')
        setActiveCard(true)
        setActiveCardsWithoutPair(0)
        setActiveCards(prev => ([
          ...prev,
          {
            id,
            number,
            isActive: true,
            setActive: (value: boolean) => setActiveCard(value),
            hasPair: true
          }
        ]))
        setCardPair()

        flipAllCards()
        return
      }

      setActiveCard(true)
      setActiveCards((prev: Card[]) => ([
        ...prev,
        {
          id,
          number,
          isActive: true,
          setActive: (value: boolean) => setActiveCard(value),
          hasPair: false
        }
      ]
      ))

      setActiveCardsWithoutPair(prev => prev + 1)
    }

    return <Component {...props} validation={validation} isActiveCard={isActiveCard} />
  }
}