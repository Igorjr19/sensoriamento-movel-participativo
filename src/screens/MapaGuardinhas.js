import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';

const MapaGuardinhas = () => {
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
      setUserLocation({latitude, longitude});
    })();
  }, []);

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: `
        <!DOCTYPE html>
        <html>
          <head>
            <title>OpenStreetMap in WebView</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <style>
              body { padding: 0; margin: 0; }
              html, body, #map { height: 100%; width: 100%; }
            </style>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
          </head>
          <body>
            <div id="map"></div>
            <script>
              var map = L.map('map').setView([${userLocation ? userLocation.latitude : 0}, ${userLocation ? userLocation.longitude : 0}], 13);
              L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
              }).addTo(map);
              L.marker([${userLocation ? userLocation.latitude : 0}, ${userLocation ? userLocation.longitude : 0}]).addTo(map);
            </script>
          </body>
        </html>
      ` }}
    />
  );
};

export default MapaGuardinhas;