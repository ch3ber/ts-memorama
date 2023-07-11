'use client'

type CardProps = {
  number: number
  validation: () => void
  isActiveCard: boolean
}

export default function Card({ number, validation, isActiveCard }: CardProps) {
  return (
    <button
      onClick={() => validation()}
      className={`${isActiveCard ? 'animate-flip-card' : ''} bg-main-light rounded font-black flex justify-center items-center p-4 aspect-square h-52 w-52 mx-auto text-main-light rotateY-180`}
    >
      <h2 className="text-6xl">{number}</h2>
    </button>
  )
}
