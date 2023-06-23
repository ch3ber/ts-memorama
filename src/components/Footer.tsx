import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-main-dark p-10 flex justify-center gap-14 items-center">
      <h2>Hecho con 💙 por Eber Alejo</h2>
      <Link href={'/'} className="underline">Link del repo en GitHub</Link>
    </footer>
  )
}
