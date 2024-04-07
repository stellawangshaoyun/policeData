import mapboxgl, { Map } from "mapbox-gl";
import React, { useEffect, useRef } from "react";
import.meta.env.MAPBOXGL_TOKEN;
mapboxgl.accessToken = process.env.MAPBOXGL_TOKEN
  ? process.env.MAPBOXGL_TOKEN
  : "";
interface MapProps {
  center: [number, number];
  zoom: number;
  markers: [number, number][];
}
const CrimeMap: React.FC<MapProps> = ({ center, zoom, markers }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);
  useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainerRef.current!,
        style: "mapbox://styles/mapbox/standard",
        center,
        zoom,
      });
    }
  }, [center, zoom, markers]);

  useEffect(() => {
    if (map.current) {
      map.current.setCenter(center);
      map.current.setZoom(zoom);
      markers.forEach((marker: [number, number]) => {
        const newMarker = new mapboxgl.Marker();
        newMarker.setLngLat(marker);
        newMarker.addTo(map.current!);
      });
    }
  }, [center, zoom, markers]);
  return <div ref={mapContainerRef} className="w-scrren h-screen" />;
};
export default CrimeMap;
