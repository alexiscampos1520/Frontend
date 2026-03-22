"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [career, setCareer] = useState("")
  const [phone, setPhone] = useState("")
  const [bio, setBio] = useState("")
  const [error, setError] = useState("")

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.endsWith("@alumnos.udg.mx")) {
      setError("Debes usar un correo institucional de UDG")
      return
    }

    const user = {
      email,
      name,
      username,
      career,
      phone,
      bio
    }

    localStorage.setItem("user", JSON.stringify(user))

    router.push("/")
  }

  return (
    <div className="p-6 max-w-md mx-auto">

      <h1 className="text-2xl font-bold mb-4">
        Registro
      </h1>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleRegister} className="space-y-3">

        <input placeholder="Correo UDG"
          className="border p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input placeholder="Nombre completo"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input placeholder="Username"
          className="border p-2 w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input placeholder="Carrera"
          className="border p-2 w-full"
          value={career}
          onChange={(e) => setCareer(e.target.value)}
        />

        <input placeholder="Teléfono (opcional)"
          className="border p-2 w-full"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea placeholder="Biografía (opcional)"
          className="border p-2 w-full"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <button className="bg-black text-white px-4 py-2 rounded w-full">
          Registrarse
        </button>

      </form>
    </div>
  )
}