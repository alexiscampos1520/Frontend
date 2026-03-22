"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {

  const router = useRouter()
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    const user = localStorage.getItem("user")

    if (!user) {
      setError("No existe usuario, regístrate primero")
      return
    }

    const parsed = JSON.parse(user)

    if (parsed.email !== email) {
      setError("Correo incorrecto")
      return
    }

    localStorage.setItem("session", "active")

    router.push("/")
  }

  return (
    <div className="p-6 max-w-md mx-auto">

      <h1 className="text-2xl font-bold mb-4">
        Iniciar sesión
      </h1>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleLogin} className="space-y-3">

        <input
          placeholder="Correo UDG"
          className="border p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="bg-black text-white px-4 py-2 rounded w-full">
          Iniciar sesión
        </button>

      </form>
    </div>
  )
}