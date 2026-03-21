import Link from "next/link"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="border-b">
        <div className="flex items-center justify-between p-4">
          <h1 className="font-bold text-lg">Nombre Chingon</h1>

          <nav className="flex gap-4 text-sm">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
            <Link href="/groups" className="hover:underline">
              Grupos
            </Link>
            <Link href="/schedule" className="hover:underline">
              Horario
            </Link>
            <Link href="/map" className="hover:underline">
              Mapa
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENIDO */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
