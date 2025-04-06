import { Icon, LatLngTuple } from 'leaflet';
import {
  Marker,
  Polyline,
  Popup
} from 'react-leaflet';
import { AdminDemoDashboard } from "./admin-demo-dashboard";
import AdminStates from "./admin-states";

// Fix for missing marker icons in react-leaflet
// Without this, markers won't display properly
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ambulanceIcon from "/ambulance-icon.png";

function calculateIndiaCenter(src: LatLngTuple, dest: LatLngTuple): LatLngTuple {
  const minLat = 8.0, maxLat = 37.1;   // India's latitude range
  const minLon = 68.0, maxLon = 97.5;  // India's longitude range

  // Compute the average latitude and longitude
  let centerLat = (src[0] + dest[0]) / 2;
  let centerLon = (src[1] + dest[1]) / 2;

  // Ensure center remains within India's bounds
  centerLat = Math.max(minLat, Math.min(maxLat, centerLat));
  centerLon = Math.max(minLon, Math.min(maxLon, centerLon));

  return [centerLat, centerLon];
}

function generateRandomCoordinates(n: number): LatLngTuple[] {
  const minLat = 8.0;    // Southernmost point (Kanyakumari)
  const maxLat = 37.1;   // Northernmost point (Ladakh)
  const minLon = 68.0;   // Westernmost point (Gujarat)
  const maxLon = 97.5;   // Easternmost point (Arunachal Pradesh)

  return Array.from({ length: n }, () => ([
    parseFloat((Math.random() * (maxLat - minLat) + minLat).toFixed(5)), // Latitude in India
    parseFloat((Math.random() * (maxLon - minLon) + minLon).toFixed(5))  // Longitude in India
  ])) as LatLngTuple[];
}

export const AdminDashboard = () => {

  // Define source and destination locations
  const srcLocation: LatLngTuple = [21.25621, 81.69022];
  const destLocation: LatLngTuple = [22.38333, 82.13333];

  // Define waypoints (if needed)
  const waypoints: LatLngTuple[] = [];

  // Create the path including source, waypoints, and destination
  const pathPositions: LatLngTuple[] = [
    srcLocation,
    ...waypoints,
    destLocation
  ];

  // Calculate center point for the map
  // const center: LatLngTuple = [
  //   (srcLocation[0] + destLocation[0]) / 2,
  //   (srcLocation[1] + destLocation[1]) / 2
  // ];

  const exsrcLocation: LatLngTuple = [21.25621, 81.69022];  // Example source in India
  const exdestLocation: LatLngTuple = [22.38333, 82.13333]; // Example destination in India

  const center = calculateIndiaCenter(exsrcLocation, exdestLocation);

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
    iconUrl: ambulanceIcon,
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

  const srcLocations: LatLngTuple[] = generateRandomCoordinates(4)

  const destLocations: LatLngTuple[] = generateRandomCoordinates(2)

  const pathPositionss: LatLngTuple[][] = srcLocations.map((src, index) => [
    src,
    ...generateRandomCoordinates(1),
    destLocations[index] || src
  ]);

  return (
    <div className="map-container relative">
      <AdminStates />

      <AdminDemoDashboard center={center} zoom={4}>
        {/* Source Markers */}
        {srcLocations.map((val, index) => (
          <Marker key={`src-${index}`} position={val} icon={sourceIcon}>
            <Popup>
              Source Location <br />
              {val[0].toFixed(4)}, {val[1].toFixed(4)}
            </Popup>
          </Marker>
        ))}

        {/* Destination Markers */}
        {destLocations.map((val, index) => (
          <Marker key={`dest-${index}`} position={val} icon={destinationIcon}>
            <Popup>
              Destination Location <br />
              {val[0].toFixed(4)}, {val[1].toFixed(4)}
            </Popup>
          </Marker>
        ))}

        {/* Path between points */}

        {pathPositionss.map((val, index) => (
          <Polyline
            key={`poly-line-${index}`}
            positions={val}
            color="blue"
            weight={1}
            opacity={0.8}
          />
        ))}

      </AdminDemoDashboard>
    </div>
  );
};
