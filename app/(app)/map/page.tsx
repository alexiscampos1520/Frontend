"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function MapPage() {

  const position: [number, number] = [20.654, -103.325] // CUCEI aprox

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Lugares para estudiar
      </h1>

      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "500px", width: "100%" }}
      >

        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            Biblioteca CUCEI
          </Popup>
        </Marker>

      </MapContainer>

    </div>
  )
}