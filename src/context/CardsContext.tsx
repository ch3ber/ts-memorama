'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export interface CardsContextType {
  activeCards: Card[]
  setActiveCards: Dispatch<SetStateAction<Card[]>>
  activeCardsWithoutPair: number
  setActiveCardsWithoutPair: Dispatch<SetStateAction<number>>
}

export const CardsContext = createContext<undefined | CardsContextType>(undefined)

export interface Card {
  id: string
  number: number
  isActive: boolean
  setActive: (value: boolean) => void
  hasPair: boolean
}

export const CardsContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeCards, setActiveCards] = useState<Card[]>([])
  const [activeCardsWithoutPair, setActiveCardsWithoutPair] = useState(0)

  return (
    <CardsContext.Provider value={{
      activeCards,
      setActiveCards,
      activeCardsWithoutPair,
      setActiveCardsWithoutPair
    }}>
      {children}
    </CardsContext.Provider>
  )
}
