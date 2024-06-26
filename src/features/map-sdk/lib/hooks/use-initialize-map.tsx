import { updateMapSdk } from "@entities/home-entities/store/home-store";
import { environment } from "@shared/config/environment";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { MapStyle } from "../../enums/map-style.enum";

mapboxgl.accessToken = environment.MAPBOX_ACCESS_TOKEN;

const sanFran: [number, number] = [-122.402, 37.79];
const defaultZoom = 8;
const defaultStyle = MapStyle.STREETS;

export const useInitializeMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mapBoxInstance = new mapboxgl.Map({
      container: mapContainer.current as HTMLDivElement,
      style: defaultStyle,
      center: sanFran,
      zoom: defaultZoom,
      bearing: 0,
      pitch: 30,
    });

    updateMapSdk(mapBoxInstance);
  }, []);

  return { mapContainer };
};
