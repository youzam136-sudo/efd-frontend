import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function MapModal() {
  return (
    <Map
      center={{ lat: 34.75416585558409, lng: 126.44864093483892 }}
      className={`h-full w-full`}
    >
      <MapMarker position={{ lat: 34.75416585558409, lng: 126.44864093483892 }}></MapMarker>
    </Map>
  );
}
