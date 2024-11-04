import Link from "next/link";

export default function Avisos() {
  return (
    <div className="m-4">
      <h1>Avisos</h1>

      <Link href="/avisos/new/step-9">
        Novo Aviso (step 9)
      </Link>
    </div>
  )
}