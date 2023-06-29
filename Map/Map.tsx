import { memo, useState } from 'react';
import cn from 'classnames';
import { useMapIsLoaded } from '@/providers/GoogleMapProvider';
import { Skeleton } from '@/shared/ui/Skeleton';
import { GoogleMap, Marker } from '@react-google-maps/api';
import MarkerIcon from '@/shared/assets/images/marker.png';
import styles from './Map.module.scss';
import { CONTAINER_STYLE, DEFAULT_MAP_OPTIONS } from './config';

type Coords = {
  lat: number;
  lng: number;
}

interface MapProps {
  className?: string;
  center: Coords;
  options?: Partial<google.maps.MapOptions>;
  markers?: Coords[];
}

export const Map = memo(({
  center,
  markers,
  options,
  className,
}: MapProps) => {
  const { isLoaded } = useMapIsLoaded();
  const [, setMap] = useState<google.maps.Map | null>(null);
  const onLoad = (map: google.maps.Map) => {
    setMap(map);
  };
  const onUnmount = () => {
    setMap(null);
  };
  if (!isLoaded) return <Skeleton className={className} width="100%" height="100%" radius={2} />;
  return (
    <div className={cn(styles.root, className)}>
      <GoogleMap
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{ ...DEFAULT_MAP_OPTIONS, ...options }}
        mapContainerStyle={CONTAINER_STYLE}
      >
        {markers && markers.map(
          // eslint-disable-next-line react/no-array-index-key
          (marker, idx) => <Marker icon={MarkerIcon.src} key={idx} position={marker} />,
        )}
      </GoogleMap>
    </div>
  );
});
