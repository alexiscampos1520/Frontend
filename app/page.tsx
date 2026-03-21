import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="p-8 space-y-6">
      
      <h1 className="text-3xl font-bold">
        UniSpace
      </h1>

      <p>
        Plataforma para crear y encontrar grupos de estudio dentro de CUCEI.
      </p>

      <div className="flex gap-4">

        <Link href="/groups">
          <Button>
            Ver grupos
          </Button>
        </Link>

        <Link href="/groups/create">
          <Button>
            Crear grupo de estudio
          </Button>
        </Link>

        <Link href="/schedule">
          <Button>
            Horario
          </Button>
        </Link>

      </div>

    </div>
  )
}