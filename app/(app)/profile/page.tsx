"use client"

import { useEffect, useState } from "react"
import { groups } from "@/lib/groupStore"
import { members } from "@/lib/memberStore"
import { chats } from "@/lib/chatStore"
import { useRouter } from "next/navigation"

export default function ProfilePage() {

  const router = useRouter()

  const [user, setUser] = useState<any>(null)
  const [search, setSearch] = useState("")
  const [activeChat, setActiveChat] = useState<any>(null)
  const [message, setMessage] = useState("")

  useEffect(() => {
    const stored = localStorage.getItem("user")
    setUser(JSON.parse(stored || "{}"))
  }, [])

  const userGroups = members.filter(
    (m) => m.name === user?.username
  )

  // 🔍 iniciar chat
  const startChat = () => {
    const email = search + "@alumnos.udg.mx"

    let existing = chats.find(
      (c) =>
        c.users.includes(user.username) &&
        c.users.includes(email)
    )

    if (!existing) {
      existing = {
        users: [user.username, email],
        messages: []
      }
      chats.push(existing)
    }

    setActiveChat(existing)
    setSearch("")
  }

  // ✉️ enviar mensaje
  const sendMessage = () => {
    if (!message || !activeChat) return

    activeChat.messages.push({
      sender: user.username,
      text: message
    })

    setMessage("")
  }

  return (
    <div className="flex h-[80vh]">

      {/* IZQUIERDA */}
      <div className="w-1/3 border-r p-4 space-y-4 overflow-y-auto">

        <h2 className="text-xl font-bold">Perfil</h2>

        <p><b>Nombre:</b> {user?.name}</p>
        <p><b>Email:</b> {user?.email}</p>
        <p><b>Username:</b> {user?.username}</p>
        <p><b>Carrera:</b> {user?.career}</p>

        <h3 className="font-bold mt-4">Mis grupos</h3>

        {userGroups.map((g, i) => (
          <div
            key={i}
            className="border p-2 rounded cursor-pointer hover:bg-gray-100"
            onClick={() => router.push(`/groups/${g.groupId}`)}
          >
            {groups[g.groupId]?.name}
          </div>
        ))}

      </div>

      {/* DERECHA */}
      <div className="w-2/3 flex flex-col">

        {/* BUSCAR */}
        <div className="p-4 border-b flex gap-2">
          <input
            placeholder="Buscar usuario (ej: juan)"
            className="border p-2 flex-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={startChat}
            className="bg-black text-white px-4 rounded"
          >
            Chat
          </button>
        </div>

        {/* CHAT */}
        {activeChat ? (
          <>
            {/* MENSAJES */}
            <div className="flex-1 p-4 overflow-y-auto space-y-2">

              {activeChat.messages.map((msg: any, i: number) => (
                <div
                  key={i}
                  className={`p-2 rounded max-w-xs ${
                    msg.sender === user.username
                      ? "bg-black text-white ml-auto"
                      : "bg-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

            </div>

            {/* INPUT */}
            <div className="p-4 border-t flex gap-2">
              <input
                className="border p-2 flex-1"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe un mensaje..."
              />
              <button
                onClick={sendMessage}
                className="bg-black text-white px-4 rounded"
              >
                Enviar
              </button>
            </div>

          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Selecciona o inicia un chat
          </div>
        )}

      </div>

    </div>
  )
}