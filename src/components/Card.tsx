'use client'

export interface CardProps {
  number: number
  onFlipCard: () => void
  isActiveCard: boolean
}

export default function Card ({ number, onFlipCard, isActiveCard }: CardProps) {
  return (
    <button
      onClick={() => { onFlipCard() }}
      className={`${isActiveCard ? 'animate-flip-card' : ''} bg-main-light rounded font-black flex justify-center items-center p-4 aspect-square h-52 w-52 mx-auto text-main-light rotateY-180`}
    >
      <h2 className="text-6xl">{number}</h2>
    </button>
  )
}
