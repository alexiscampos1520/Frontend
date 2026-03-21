"use client"

import { useParams } from "next/navigation"
import { groups } from "@/lib/groupStore"
import { sessions } from "@/lib/sessionStore"
import { members } from "@/lib/memberStore"
import { useState } from "react"

export default function GroupPage() {

  const params = useParams()
  const id = Number(params.groupId)

  const group = groups[id]

  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [place, setPlace] = useState("")

  if (!group) {
    return <div className="p-6">Grupo no encontrado</div>
  }

  const groupSessions = sessions.filter(
    (session) => session.groupId === id
  )

  const groupMembers = members.filter(
    (member) => member.groupId === id
  )

  const joinGroup = () => {

    const newMember = {
      groupId: id,
      name: "Alex"
    }

    members.push(newMember)

    console.log("Miembros:", members)
  }

  const createSession = (e: React.FormEvent) => {
    e.preventDefault()

    const newSession = {
      groupId: id,
      date,
      time,
      place
    }

    sessions.push(newSession)

    setDate("")
    setTime("")
    setPlace("")
  }

  return (
    <div className="p-6 max-w-2xl">

      <h1 className="text-3xl font-bold mb-2">
        {group.name}
      </h1>

      <p className="text-gray-500 mb-4">
        Tema: {group.topic}
      </p>

      <p className="mb-6">
        {group.description}
      </p>

      <button
        onClick={joinGroup}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        Unirse al grupo
      </button>

      <h2 className="text-xl font-bold mb-3">
        Miembros
      </h2>

      {groupMembers.length === 0 && (
        <p className="mb-4">Nadie se ha unido todavía.</p>
      )}

      <div className="space-y-2 mb-6">
        {groupMembers.map((member, index) => (
          <div key={index} className="border p-2 rounded">
            {member.name}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-3">
        Sesiones de estudio
      </h2>

      {groupSessions.length === 0 && (
        <p className="mb-4">No hay sesiones todavía.</p>
      )}

      <div className="space-y-2 mb-6">
        {groupSessions.map((session, index) => (
          <div key={index} className="border p-3 rounded">
            📅 {session.date} - {session.time} <br/>
            📍 {session.place}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-3">
        Crear sesión
      </h2>

      <form onSubmit={createSession} className="space-y-3">

        <input
          type="date"
          className="border p-2 w-full"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          className="border p-2 w-full"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <input
          placeholder="Lugar (ej: Biblioteca CUCEI)"
          className="border p-2 w-full"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />

        <button className="bg-black text-white px-4 py-2 rounded">
          Crear sesión
        </button>

      </form>

    </div>
  )
}