import Card from "@/components/Card";
import { createCardId } from "@/utils/crateCardId";

type CardGridProps = {
  order: number[]
}

export default function CardGrid({ order }: CardGridProps) {
  return (
    <section className="max-w-6xl mx-auto items-center justify-center grid grid-cols-2 lg:grid-cols-4 gap-14 mt-10">
      {order.map((numberCard) => {
        const id = createCardId()
        return <Card key={id} number={numberCard} id={id} />
      })}
    </section>
  )
}