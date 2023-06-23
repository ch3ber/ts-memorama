'use client'
import { createContext, ReactNode, useState } from "react"

export interface CardsContextType {
  cards: Card[]
  setCards: (fn: (cards: Card[]) => Card[]) => void
  totalActiveCards: number
  setTotalActiveCards: (fn: (number: number) => number) => void
}

export const CardsContext = createContext<undefined | CardsContextType>(undefined)

type CardsContextProviderProps = {
  children: ReactNode
}

interface Card {
  id: string
  number: number
}

export const CardsContextProvider = ({ children }: CardsContextProviderProps) => {
  const [cards, setCards] = useState<Card[]>([])
  const [totalActiveCards, setTotalActiveCards] = useState(0)

  return (
    <CardsContext.Provider value={{ cards, setCards, totalActiveCards, setTotalActiveCards }}>
      {children}
    </CardsContext.Provider>
  )
}
