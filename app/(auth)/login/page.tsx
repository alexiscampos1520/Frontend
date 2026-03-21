import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
    <div className="p-6 max-w-sm mx-auto space-y-4">
      <h1 className="text-xl font-bold">Iniciar sesión</h1>

      <Input placeholder="Correo institucional" />
      <Input type="password" placeholder="Contraseña" />

      <Button className="w-full">Entrar</Button>
    </div>
  )
}
