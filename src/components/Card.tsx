'use client'
import { useState, useContext } from "react"
import { CardsContext, CardsContextType } from "@/context/CardsContext"
import { useFindSameCard } from "@/hook/useFindSameCard"

type CardProps = {
  number: number
  id: string
}

export default function Card({ number, id }: CardProps) {
  const { cards, setCards, totalActiveCards, setTotalActiveCards } = useContext(CardsContext) as CardsContextType
  const [findSameCard] = useFindSameCard()
  const [isActive, setIsActive] = useState(false)

  const onClickCard = () => {
    console.log(findSameCard(number))
    console.log(cards)
    if (cards.some(card => card.id === id)) return
    setIsActive(true)
    setCards(prev => (
      [
        ...prev,
        {
          id,
          number,
        }
      ]
    ))

    if (findSameCard(number) === undefined) {
      setIsActive(false)
    }

    if (findSameCard(number) !== undefined) {
      setIsActive(true)
    }

  }

  return (
    <button
      onClick={() => onClickCard()}
      className={`${isActive ? 'animate-flip-card' : ''} bg-main-light rounded font-black flex justify-center items-center p-4 aspect-square h-52 w-52 mx-auto text-main-light rotateY-180 `}
    >
      <h2 className="text-6xl">{number}</h2>
    </button>
  )
}