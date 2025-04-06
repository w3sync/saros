import { Icon, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer
} from 'react-leaflet';

// Fix for missing marker icons in react-leaflet
// Without this, markers won't display properly
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ambulancecIcon from "/ambulance-icon.png"
import { useLocation } from 'react-router';

// Define interfaces for our props and state
export interface MapProps {
  srcLocation: LatLngTuple;
  destLocation: LatLngTuple;
  waypoints?: LatLngTuple[];
  zoom?: number;
  locations?: any;
}

export const MapWithPath: React.FC<MapProps> = ({
  srcLocation,
  destLocation,
  waypoints = [],
  zoom = 13
}) => {
  // Create the path including source, waypoints, and destination
  let pathPositions: LatLngTuple[] = [
    srcLocation,
    ...waypoints,
    destLocation
  ];

  // Calculate center point for the map
  const center: LatLngTuple = [
    (srcLocation[0] + destLocation[0]) / 2,
    (srcLocation[1] + destLocation[1]) / 2
  ];

  // Fix Leaflet's default icon paths
  const DefaultIcon = new Icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconRetinaUrl: iconRetina,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // Define marker icons
  const sourceIcon = new Icon({
    ...DefaultIcon.options,
    iconUrl: ambulancecIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    className: 'source-marker'
  });

  const destinationIcon = new Icon({
    ...DefaultIcon.options,
    iconUrl: icon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    className: 'destination-marker'
  });

  const { pathname } = useLocation();

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "calc(100vh - 80px)", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Source Marker */}
      <Marker position={srcLocation} icon={sourceIcon}>
        <Popup>
          Source Location <br />
          {srcLocation[0].toFixed(4)}, {srcLocation[1].toFixed(4)}
        </Popup>
      </Marker>

      {/* Destination Marker */}
      <Marker position={destLocation} icon={destinationIcon}>
        <Popup>
          Destination Location <br />
          {destLocation[0].toFixed(4)}, {destLocation[1].toFixed(4)}
        </Popup>
      </Marker>

      {

        (/^\/admin\//.test(pathname)) ? (
          <>
            {/* Source Marker */}
            <Marker position={srcLocation} icon={sourceIcon}>
              <Popup>
                Source Location <br />
                {srcLocation[0].toFixed(4)}, {srcLocation[1].toFixed(4)}
              </Popup>
            </Marker>

            {/* Destination Marker */}
            <Marker position={destLocation} icon={destinationIcon}>
              <Popup>
                Destination Location <br />
                {destLocation[0].toFixed(4)}, {destLocation[1].toFixed(4)}
              </Popup>
            </Marker>
          </>
        ) : null

      }

      {/* Waypoint Markers */}
      {waypoints.map((waypoint, index) => (
        <Marker key={`waypoint-${index}`} position={waypoint} icon={DefaultIcon}>
          <Popup>
            Waypoint {index + 1} <br />
            {waypoint[0].toFixed(4)}, {waypoint[1].toFixed(4)}
          </Popup>
        </Marker>
      ))}

      {/* Path between points */}
      <Polyline
        positions={pathPositions}
        color="blue"
        weight={3}
        opacity={0.7}
      />
    </MapContainer>
  );
};
