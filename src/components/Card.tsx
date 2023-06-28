'use client'
import { Card, CardsContext, CardsContextType } from "@context"
import { useFindSameCard } from "@/hook/useFindSameCard"
import { useFlipAllCards } from "@/hook/useFlipAllCards"
import { useSetCardPair } from "@/hook/useSetCardPair"
import { useContext, useState } from "react"

type CardProps = {
  id: string
  number: number
}

export default function Card({ number, id }: CardProps) {
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

  const onClickCard = () => {
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

  return (
    <button
      onClick={() => onClickCard()}
      className={`${isActiveCard ? 'animate-flip-card' : ''} bg-main-light rounded font-black flex justify-center items-center p-4 aspect-square h-52 w-52 mx-auto text-main-light rotateY-180`}
    >
      <h2 className="text-6xl">{number}</h2>
    </button>
  )
}