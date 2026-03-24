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

  useEffect(() => {
    const session = localStorage.getItem("session")

    if (!session) {
      router.push("/auth/login")
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return <p className="p-6">Cargando...</p>
  }

  return (
    <div>
      {children}
    </div>
  )
}