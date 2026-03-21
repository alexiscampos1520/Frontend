import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function RegisterPage() {
  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold">Registro</h1>

      <Input placeholder="Nombre completo" />
      <Input placeholder="Correo institucional" />
      <Input placeholder="Carrera" />
      <Input placeholder="Semestre" />
      <Input type="password" placeholder="Contraseña" />

      <Button className="w-full">Crear cuenta</Button>
    </div>
  )
}
