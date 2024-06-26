import { $homeStore } from "@entities/home-entities/store/home-store";
import { useStore } from "@nanostores/react";
import mapboxgl from "mapbox-gl";
import { useCallback, useEffect, useState } from "react";
import PlantProfileJson from "../../../home-features/list-plant-profile/lib/helpers/plant-profile.json";

export const useInitializeMarker = () => {
  const [check, setCheck] = useState(false);
  const { mapSdk } = useStore($homeStore);

  const initializeMarker = useCallback(
    (lngLat: number[], markerId: string) => {
      new mapboxgl.Marker({
        id: markerId,
      })
        .setLngLat(lngLat)
        .addTo(mapSdk);
    },
    [mapSdk]
  );

  useEffect(() => {
    if (mapSdk === null && !check) {
      return;
    }

    PlantProfileJson.features.forEach((plantProfile) => {
      const lngLat = plantProfile.geometry.coordinates;
      const markerId = plantProfile.id;

      initializeMarker(lngLat, markerId.toString());
    });
    setCheck(true);
  }, [check, initializeMarker, mapSdk]);
};
