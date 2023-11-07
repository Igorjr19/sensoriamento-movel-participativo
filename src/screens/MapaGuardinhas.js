import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import ORS_API_KEY from '../config';

const MapaGuardinhas = () => {
  const [initialRegion, setInitialRegion] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const response = await fetch(`https://api.openrouteservice.org/geocode/reverse?api_key=${ORS_API_KEY}&point.lon=${longitude}&point.lat=${latitude}`);
      
      if (!response.ok) {
        console.error('Failed to fetch data from Openrouteservice API');
        const errorData = await response.text();
        console.error('Error data:', errorData);
        return;
      }

      const locationResponse = await response.json();
      console.log(locationResponse);

      setUserLocation({ latitude, longitude });
      setInitialRegion({
        latitude: locationResponse.features[0].geometry.coordinates[1],
        longitude: locationResponse.features[0].geometry.coordinates[0],
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {initialRegion && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={initialRegion}
        >
          <Marker coordinate={userLocation} />
        </MapView>
      )}
    </View>
  );
};

export default MapaGuardinhas;