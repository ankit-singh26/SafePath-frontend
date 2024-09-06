import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const MapComponent = () => {
  const mapRef = useRef(null); // Reference to the map container
  const leafletMapRef = useRef(null); // Reference to the Leaflet map instance
  const [userLocation, setUserLocation] = useState(null); // State to store user location

  useEffect(() => {
    // Initialize the Leaflet map only once
    if (!leafletMapRef.current) {
      leafletMapRef.current = L.map(mapRef.current).setView([0, 0], 2);

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(leafletMapRef.current);
    }

    // Function to fetch hospitals using Overpass API
    const fetchHospitals = async (latitude, longitude) => {
      const overpassQuery = `
        [out:json];
        node["amenity"="hospital"](around:1500,${latitude},${longitude});
        out;
      `;

      const overpassUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;

      try {
        const response = await axios.get(overpassUrl);
        const hospitals = response.data.elements;

        // Add markers for each hospital
        hospitals.forEach((hospital) => {
          const { lat, lon, tags } = hospital;
          L.marker([lat, lon])
            .addTo(leafletMapRef.current)
            .bindPopup(
              `<b>${tags.name || 'Unnamed Hospital'}</b><br>${tags.address || 'No address available'}`
            );
        });
      } catch (error) {
        console.error('Error fetching hospitals:', error);
        alert('Failed to fetch nearby hospitals. Please try again later.');
      }
    };

    // Get user's location and add marker
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLocation = [latitude, longitude];
          setUserLocation(userLocation); // Update state with user location

          // Set view to the user's location
          leafletMapRef.current.setView(userLocation, 15);

          // Add a marker for the user's location
          L.marker(userLocation)
            .addTo(leafletMapRef.current)
            .bindPopup('You are here!')
            .openPopup();

          // Fetch hospitals near the user's location
          fetchHospitals(latitude, longitude);
        },
        () => {
          alert('Unable to retrieve your location');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser');
    }

    // Cleanup function to remove map instance
    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove(); // Properly remove the map instance
        leafletMapRef.current = null;
      }
    };
  }, []); // Empty dependency array ensures this runs once

  return (
    <div className="flex flex-col h-full w-full rounded-lg shadow-lg">
      <div id="map" ref={mapRef} className="flex-grow rounded-t-lg"></div>
      {userLocation && (
        <div className="p-4 bg-white border-t border-gray-200 rounded-b-lg">
          <h2 className="text-xl font-bold mb-2">Your Location</h2>
          <p className="text-gray-700">Latitude: {userLocation[0]}</p>
          <p className="text-gray-700">Longitude: {userLocation[1]}</p>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
