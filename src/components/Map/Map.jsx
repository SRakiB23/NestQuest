import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Map = () => {
  return (
    <div className="map-container bg-slate-100">
      <h3 className="text-4xl py-4 text-center font-bold">Find Us</h3>
      <MapContainer
        center={[23.7461, 90.3742]}
        zoom={14}
        scrollWheelZoom={true}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[23.7461, 90.3742]}></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
