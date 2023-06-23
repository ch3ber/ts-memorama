import CardGrid from "@/components/CardGrid";
import Footer from "@/components/Footer";
import { useshuffleCards } from "@/hook/useshuffleCards";
import { CardsContextProvider } from "@context";

export default function Home() {
  const orderOfCards = useshuffleCards()

  return (
    <>
      <main className="text-center px-3 md:px-0">
        <h1 className="mt-10 text-4xl font-bold">ch3ber - Memorama</h1>
        <header>
          <h2 className="mt-10 text-2xl font-bold">¿Cómo jugar?</h2>
          <ol className="mt-4 list-decimal list-inside">
            <li>Selecciona una tarjeta para voltearla</li>
            <li>Selecciona otra tarjeta para voltearla</li>
            <li>Si encuentras todos los pares, ¡ganas!</li>
          </ol>
        </header>
        <CardsContextProvider>
          <CardGrid order={orderOfCards} />
        </CardsContextProvider>
      </main>
      <Footer />
    </>
  )
}
