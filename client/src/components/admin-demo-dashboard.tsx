import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { ReactNode } from 'react';
import {
    MapContainer,
    TileLayer
} from 'react-leaflet';

// Fix for missing marker icons in react-leaflet
// Without this, markers won't display properly

// Define interfaces for our props and state
export interface MapProps {
    srcLocation?: LatLngTuple;
    destLocation?: LatLngTuple;
    waypoints?: LatLngTuple[];
    zoom?: number;
    locations?: any;
    children?: ReactNode;
    center: LatLngTuple;
}

export const AdminDemoDashboard: React.FC<MapProps> = ({
    zoom = 13,
    center,
    children
}) => {
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

            {children}
        </MapContainer>
    );
};
