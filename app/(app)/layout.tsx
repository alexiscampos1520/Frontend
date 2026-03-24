"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const session = localStorage.getItem("session")
    const storedUser = localStorage.getItem("user")

    if (!session) {
      router.push("/auth/login")
    } else {
      setUser(JSON.parse(storedUser || "{}"))
      setLoading(false)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem("session")
    router.push("/auth/login")
  }

  if (loading) return <p className="p-6">Cargando...</p>

  return (
    <div>

      {/* NAVBAR */}
      <div className="flex justify-between items-center p-4 border-b">

        <h1 className="font-bold">UniSpace</h1>

        <div className="flex items-center gap-4">

          <button
            onClick={() => router.push("/profile")}
            className="font-medium"
          >
            {user?.username || "Usuario"}
          </button>

          <button
            onClick={logout}
            className="text-red-500"
          >
            Cerrar sesión
          </button>

        </div>

      </div>

      {/* CONTENIDO */}
      <div className="p-4">
        {children}
      </div>

    </div>
  )
}