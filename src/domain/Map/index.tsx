import React, { FC } from 'react';
import { Map as MapLibrary, Marker } from 'pigeon-maps';

export type TMap = {
  height?: number,
  defaultCenter?: [number, number],
  defaultZoom?: number,
  markerWidth?: number,
  anchor?: [number, number]
}

const Map: FC<TMap> = ({
  height = 300,
  defaultCenter = [50.879, 4.6997],
  defaultZoom = 11,
  markerWidth = 50,
  anchor = [50.879, 4.6997],
}) => (
  <MapLibrary height={height} defaultCenter={defaultCenter} defaultZoom={defaultZoom}>
    <Marker width={markerWidth} anchor={anchor} />
  </MapLibrary>
);

export default Map;
