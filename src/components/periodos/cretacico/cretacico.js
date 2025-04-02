import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Necesario para Leaflet

function Cretacico() {
  const dinosaurs = [
    { name: 'Elasmosaurus', image: '../elasmosaurus.avif' },
    { name: 'Plesiosaurus', image: '../plesiosaurus.jpg' },
    { name: 'Mosasaurus', image: '../mosasaurus.webp' },
    { name: 'Kronosaurus', image: '../Kronosaurus.jpg' },
    { name: 'Tylosaurus', image: '../Tylosaurus.jpg' },
  ];

  const fossilLocations = [
    { name: 'Fósil de T-Rex', lat: 44.68, lng: -103.46 },
    { name: 'Fósil de Triceratops', lat: 46.87, lng: -113.99 },
    { name: 'Fósil de Velociraptor', lat: 43.93, lng: 12.45 },
  ];

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.title}>Período Cretácico</h1>
      <p style={styles.description}>
        El Cretácico fue la última era de los dinosaurios, con muchas especies icónicas acuáticas.
      </p>

      {/* Galería de dinosaurios */}
      <div style={styles.gallery}>
        {dinosaurs.map((dino, index) => (
          <div key={index} style={styles.dinoCard}>
            <Link to={`/dinosaurio/${dino.name.toLowerCase()}`}>
              <img src={dino.image} alt={dino.name} style={styles.dinoImage} />
            </Link>
            <h3>
              <Link to={`/dinosaurio/${dino.name.toLowerCase()}`} style={styles.dinoLink}>
                {dino.name}
              </Link>
            </h3>
          </div>
        ))}
      </div>

      {/* Mapa */}
      <h2 style={styles.mapTitle}>Mapa de Ubicaciones de Fósiles</h2>
      <MapContainer center={[44.68, -103.46]} zoom={4} style={styles.map}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {fossilLocations.map((location, index) => (
          <Marker key={index} position={[location.lat, location.lng]}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

const styles = {
  pageContainer: {
    marginTop: '70px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    fontFamily: "'Roboto', sans-serif",
    color: '#333',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '20px',
    marginTop: '20px',
  },
  description: {
    fontSize: '1.5rem',
    color: '#7f8c8d',
    marginBottom: '40px',
    lineHeight: '1.6',
  },
  gallery: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '40px',
  },
  dinoCard: {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    textAlign: 'center',
    width: '200px',
  },
  dinoCardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  dinoImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  dinoLink: {
    textDecoration: 'none',
    color: '#3498db',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    transition: 'color 0.3s',
  },
  dinoLinkHover: {
    color: '#1abc9c',
  },
  mapTitle: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#34495e',
    marginBottom: '20px',
  },
  map: {
    height: '400px',
    width: '100%',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default Cretacico;
