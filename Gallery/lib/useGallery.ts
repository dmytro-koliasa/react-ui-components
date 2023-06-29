import { useContext } from 'react';
import { GalleryContext } from '../context/GalleryContext';

export const useGallery = () => useContext(GalleryContext);
