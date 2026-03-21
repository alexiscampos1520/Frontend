"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { groups } from "@/lib/groupStore"

export default function CreateGroupPage() {

  const router = useRouter()

  const [name, setName] = useState("")
  const [topic, setTopic] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("PUBLIC")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const data = {
      name,
      topic,
      description,
      status,
      members: []
    }

    groups.push(data)

    console.log("Grupo guardado:", groups)

    setName("")
    setTopic("")
    setDescription("")
    setStatus("PUBLIC")

    router.push("/groups")
  }

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-4">
        Crear grupo de estudio
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block mb-1">Nombre</label>
          <input
            className="border p-2 w-full"
            maxLength={50}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre del grupo"
          />
        </div>

        <div>
          <label className="block mb-1">Tema</label>
          <select
            className="border p-2 w-full"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="">Selecciona un tema</option>
            <option value="Matemáticas">Matemáticas</option>
            <option value="Programación">Programación</option>
            <option value="Física">Física</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Descripción</label>
          <textarea
            className="border p-2 w-full"
            maxLength={100}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripción del grupo"
          />
        </div>

        <div>
          <label className="block mb-1">Status</label>
          <select
            className="border p-2 w-full"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="PUBLIC">Público</option>
            <option value="PRIVATE">Privado (solicitud o invitación)</option>
            <option value="SECRET">Secreto (solo invitación)</option>
          </select>
        </div>

        <button
          className="bg-black text-white px-4 py-2 rounded"
          type="submit"
        >
          Crear grupo
        </button>

      </form>
    </div>
  )
}