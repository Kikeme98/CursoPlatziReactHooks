import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const Map = ({ data }) => {

  const styles = {
    height: '50vh',
    width: '100%',
  };

  console.log(data);

  const defaultCenter = {
    lat: data.latitude,
    lng: data.longitude,
  };

  return (
    <LoadScript googleMapsApiKey='AIzaSyC0Mzgcoi3tI8iU6oL1ER4uZpf3qVdy4MU'>
      <GoogleMap
        mapContainerStyle={styles}
        zoom={17}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}


export default Map;