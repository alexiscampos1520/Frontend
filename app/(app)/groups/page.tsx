"use client"

import Link from "next/link"
import { groups } from "@/lib/groupStore"

export default function GroupsPage() {

  if (groups.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">
          Grupos de estudio
        </h1>
        <p>No hay grupos creados todavía.</p>
      </div>
    )
  }

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Grupos de estudio
      </h1>

      <div className="grid gap-4 md:grid-cols-2">

        {groups.map((group, index) => (

          <div
            key={index}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >

            <h2 className="text-lg font-bold">
              {group.name}
            </h2>

            <p className="text-gray-600">
              Tema: {group.topic}
            </p>

            <p className="text-sm mt-1">
              Miembros: {group.members?.length || 0} miembros
            </p>

            <p className="text-sm mt-2">
              {group.description}
            </p>

            <Link href={`/groups/${index}`}>
              <button className="mt-4 bg-black text-white px-3 py-2 rounded">
                Ver grupo
              </button>
            </Link>

          </div>

        ))}

      </div>

    </div>
  )
}