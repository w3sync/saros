import { LatLngTuple } from "leaflet";
import { MapWithPath } from "./map-with-path";
import { OverlayModalBottomLeft, OverlayModalTopRight } from "./overlay-modal";

// Example usage component
export const UserDashboard: React.FC = () => {
    // Example coordinates (San Francisco to New York)
    const sanFrancisco: LatLngTuple = [21.25621000, 81.69022000];
    const newYork: LatLngTuple = [22.38333000, 82.13333000];
    // const waypoints: LatLngTuple[] = [
    //   [39.7392, -104.9903], // Denver
    //   [41.8781, -87.6298]   // Chicago
    // ];

    return (
        <div className="map-container relative">
            <OverlayModalBottomLeft />
            <OverlayModalTopRight />
            <MapWithPath
                srcLocation={sanFrancisco}
                destLocation={newYork}
                // waypoints={waypoints}
                zoom={8}
            />
        </div>
    );
};

export default UserDashboard;