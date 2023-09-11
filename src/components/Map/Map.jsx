import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  Circle,
  LayerGroup,
  MapContainer,
  Marker,
  TileLayer,
  Tooltip,
} from "react-leaflet";

const Map = ({ height, lati, longi }) => {
  console.log("hotel latitude longitude test", lati, longi)
  // Initialize latitude and longitude with default values
  const [latitude, setLatitude] = useState(23.82321);
  const [longitude, setLongitude] = useState(90.41912);

  // Update latitude and longitude when lati and longi change
  useEffect(() => {
    if (lati !== undefined && longi !== undefined) {
      setLatitude(longi);
      setLongitude(lati);
    }
  }, [lati, longi]);

  return (
    <div className="border-2 border-[#F8F8F8] rounded-xl overflow-hidden">
      <div className="w-full">
        <MapContainer
          center={[latitude, longitude]}
          zoom={15}
          style={{ height: `${height}px`, width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LayerGroup>
            <Circle
              center={[latitude, longitude]}
              pathOptions={{ color: "green", fillColor: "green" }}
              radius={50}
            />
          </LayerGroup>
          <Marker position={[latitude, longitude]}>
            <Tooltip>Lati: {latitude} | Longi: {longitude}</Tooltip>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

Map.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  lati: PropTypes.number,
  longi: PropTypes.number,
};

export default Map;
