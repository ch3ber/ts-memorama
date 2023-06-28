import Card from "@/components/Card";
import { createCardId } from "@/utils/createCardId";

type CardGridProps = {
  order: number[]
}

export default function CardGrid({ order }: CardGridProps) {
  return (
    <section className="max-w-6xl mx-auto items-center justify-center grid grid-cols-2 lg:grid-cols-4 gap-14 mt-10">
      {order.map((numberCard) => {
        const cardId = createCardId()
        return <Card key={cardId} number={numberCard} id={cardId} />
      })}
    </section>
  )
}