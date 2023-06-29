import { CSSProperties } from 'react';

export const DEFAULT_MAP_OPTIONS: google.maps.MapOptions = {
  panControl: false,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: true,
  disableDoubleClickZoom: true,
  fullscreenControl: false,
};

export const CONTAINER_STYLE: CSSProperties = {
  width: '100%',
  height: '100%',
};
