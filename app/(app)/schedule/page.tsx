"use client"

import { sessions } from "@/lib/sessionStore"
import { groups } from "@/lib/groupStore"

export default function SchedulePage() {

  if (sessions.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Horario de estudio</h1>
        <p>No hay sesiones programadas todavía.</p>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-2xl">

      <h1 className="text-2xl font-bold mb-6">
        Horario de estudio
      </h1>

      <div className="space-y-4">

        {sessions.map((session, index) => {

          const group = groups[session.groupId]

          return (
            <div key={index} className="border p-4 rounded">

              <h2 className="font-bold text-lg">
                {group?.name}
              </h2>

              <p>📅 {session.date}</p>

              <p>⏰ {session.time}</p>

              <p>📍 {session.place}</p>

            </div>
          )
        })}

      </div>

    </div>
  )
}