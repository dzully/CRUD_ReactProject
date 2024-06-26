import { $homeStore } from "@entities/home-entities/store/home-store";
import { useInitializeMarker } from "@features/map-sdk/lib/hooks/use-initialize-marker";
import { useStore } from "@nanostores/react";
import { useState } from "react";
import PlantProfileJson from "../lib/helpers/plant-profile.json";

export const ListPlantProfile = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const { mapSdk } = useStore($homeStore);
  useInitializeMarker();

  const handleSelectedLocation = (lngLat: number[], id: number) => () => {
    mapSdk.flyTo({
      center: lngLat,
      essential: true,
      zoom: 15,
    });

    setSelectedProfile(id);
  };

  return (
    <div className="absolute top-0 left-0 bottom-0">
      <div className="flex flex-col m-2 rounded-lg h-[580px] w-[250px] p-1">
        <div className="mb-2 bg-[#00000080] w-full h-fit rounded-lg p-2">
          <span className="text-white text-center flex justify-center">
            Plant Profile
          </span>
        </div>

        <ul className="w-full h-full rounded-lg">
          {PlantProfileJson.features.map((plantProfile) => (
            <li
              key={plantProfile.id}
              className={`mb-2 cursor-pointer rounded-lg ${
                selectedProfile === plantProfile.id ? "bg-gray-800" : ""
              }`}
              onClick={handleSelectedLocation(
                plantProfile.geometry.coordinates,
                plantProfile.id
              )}
            >
              <div className="flex gap-2 items-center w-full min-h-20 justify-between rounded-md bg-[#22202080] px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 shadow-sm hover:bg-gray-200">
                <span className="text-blue-900">
                  {plantProfile.properties.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
