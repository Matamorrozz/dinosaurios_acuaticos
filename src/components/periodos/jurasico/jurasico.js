import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Necesario para Leaflet

function Jurasico() {
  const reptilesMarinos = [
    { name: 'Ichthyosaurus', image: '../ichthyosaurus.jpg' },
    { name: 'Liopleurodon', image: '../liopleurodon.jpg' },
    { name: 'Metriorhynchus', image: '../metriorhynchus.jpg' },
    { name: 'Ophthalmosaurus', image: '../ophthalmosaurus.jpg' },
  ];

  const fossilLocations = [
    { name: 'Fósil de Ichthyosaurus', lat: 47.5, lng: -3.5 },
    { name: 'Fósil de Liopleurodon', lat: 49.5, lng: -1.5 },
    { name: 'Fósil de Metriorhynchus', lat: 46.8, lng: 2.3 },
    { name: 'Fósil de Ophthalmosaurus', lat: 50.6, lng: -1.9 },
  ];

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.title}>Período Jurásico</h1>
        <p style={styles.description}>
          Durante el período Jurásico, los océanos estaban llenos de impresionantes reptiles marinos que dominaban las aguas.
        </p>
      </div>

      {/* Galería de reptiles marinos */}
      <div style={styles.gallery}>
        {reptilesMarinos.map((reptil, index) => (
          <div key={index} style={styles.card}>
            <Link to={`/dinosaurio/${reptil.name.toLowerCase()}`}>
              <img src={reptil.image} alt={reptil.name} style={styles.cardImage} />
            </Link>
            <h3 style={styles.cardTitle}>
              <Link to={`/dinosaurio/${reptil.name.toLowerCase()}`} style={styles.cardLink}>
                {reptil.name}
              </Link>
            </h3>
          </div>
        ))}
      </div>

      <div style={styles.mapSection}>
        <h2 style={styles.mapTitle}>Mapa de Ubicaciones de Fósiles</h2>
        <MapContainer center={[47.0, -2.0]} zoom={5} style={styles.map}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {fossilLocations.map((location, index) => (
            <Marker key={index} position={[location.lat, location.lng]}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    padding: '20px',
    fontFamily: "'Roboto', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
  },
  header: {
    textAlign: 'center',
    maxWidth: '800px',
    marginTop: '20px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.6',
  },
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    maxWidth: '1200px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '220px',
    textAlign: 'center',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  cardImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  cardTitle: {
    margin: '10px 0',
    fontSize: '1.2rem',
    color: '#333',
  },
  cardLink: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
  cardLinkHover: {
    color: '#0056b3',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  mapSection: {
    width: '100%',
    maxWidth: '1200px',
  },
  mapTitle: {
    fontSize: '1.8rem',
    color: '#2c3e50',
    marginBottom: '20px',
    textAlign: 'center',
  },
  map: {
    height: '400px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default Jurasico;
