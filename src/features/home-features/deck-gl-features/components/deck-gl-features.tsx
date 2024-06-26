import { MapboxOverlay } from "@deck.gl/mapbox";
import { $homeStore } from "@entities/home-entities/store/home-store";
import { useInitializeMap } from "@features/map-sdk";
import { useStore } from "@nanostores/react";
import { BitmapLayer, HexagonLayer, LineLayer } from "deck.gl";
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

type BikeRack = {
  ADDRESS: string;
  SPACES: number;
  COORDINATES: [longitude: number, latitude: number];
};

type BartSegment = {
  inbound: number;
  outbound: number;
  from: {
    name: string;
    coordinate: [longitude: number, latitude: number];
  };
  to: {
    name: string;
    coordinate: [longitude: number, latitude: number];
  };
};

export const DeckGLFeatures = () => {
  const { mapContainer } = useInitializeMap();
  const { mapSdk } = useStore($homeStore);

  useEffect(() => {
    if (mapSdk) {
      const deckLayer = new MapboxOverlay({
        layers: [
          new LineLayer<BartSegment>({
            id: "LineLayer",
            data: "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-segments.json",

            getColor: (d: BartSegment) => [
              Math.sqrt(d.inbound + d.outbound),
              140,
              0,
            ],
            getSourcePosition: (d: BartSegment) => d.from.coordinates,
            getTargetPosition: (d: BartSegment) => d.to.coordinates,
            getWidth: 12,
            pickable: true,
          }),
          new BitmapLayer({
            id: "BitmapLayer",
            bounds: [-122.519, 37.7045, -122.355, 37.829],
            image:
              "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-districts.png",
            pickable: true,
          }),
          new HexagonLayer<BikeRack>({
            id: "HexagonLayer",
            data: "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json",

            extruded: true,
            getPosition: (d: BikeRack) => d.COORDINATES,
            getColorWeight: (d: BikeRack) => d.SPACES,
            getElevationWeight: (d: BikeRack) => d.SPACES,
            elevationScale: 4,
            radius: 200,
            pickable: true,
          }),
        ],
      });

      mapSdk.on("load", () => {
        mapSdk.addControl(deckLayer);
        mapSdk.addControl(new mapboxgl.NavigationControl());
      });
    }
  }, [mapSdk]);

  return <div ref={mapContainer} className="w-full h-full" />;
};
