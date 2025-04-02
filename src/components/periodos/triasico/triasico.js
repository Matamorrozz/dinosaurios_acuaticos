import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Necesario para Leaflet

function Triasico() {
  const reptilesMarinos = [
    { name: 'Nothosaurus', image: '../nothosaurus.jpg' },
    { name: 'Placodus', image: '../placodus.jpg' },
    { name: 'Cymbospondylus', image: '../cymbospondylus.jpg' },
    { name: 'Tanystropheus', image: '../tanystropheus.jpg' },
  ];

  const fossilLocations = [
    { name: 'Fósil de Nothosaurus', lat: 50.1, lng: 8.6 },
    { name: 'Fósil de Placodus', lat: 47.6, lng: 10.3 },
    { name: 'Fósil de Cymbospondylus', lat: 42.7, lng: 12.5 },
    { name: 'Fósil de Tanystropheus', lat: 46.5, lng: 9.8 },
  ];

  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <h1 style={styles.title}>Período Triásico</h1>
        <p style={styles.description}>
          El Triásico fue un período clave para la evolución de los reptiles marinos, dando origen a algunos de los primeros depredadores oceánicos.
        </p>
      </header>

      {/* Galería de reptiles marinos */}
      <section style={styles.gallerySection}>
        <h2 style={styles.galleryTitle}>Reptiles Marinos Destacados</h2>
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
      </section>

      <section style={styles.mapSection}>
        <h2 style={styles.mapTitle}>Mapa de Ubicaciones de Fósiles</h2>
        <MapContainer center={[47.0, 9.0]} zoom={5} style={styles.map}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {fossilLocations.map((location, index) => (
            <Marker key={index} position={[location.lat, location.lng]}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>
    </div>
  );
}

const styles = {
  pageContainer: {
    backgroundColor: '#f8fafc',
    fontFamily: "'Roboto', sans-serif",
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    marginTop: '20px',
  },
  title: {
    fontSize: '3rem',
    color: '#2c3e50',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.6',
  },
  gallerySection: {
    width: '100%',
    maxWidth: '1200px',
    textAlign: 'center',
  },
  galleryTitle: {
    fontSize: '2rem',
    color: '#34495e',
    marginBottom: '20px',
  },
  gallery: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
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
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  mapSection: {
    width: '100%',
    maxWidth: '1200px',
    textAlign: 'center',
  },
  mapTitle: {
    fontSize: '2rem',
    color: '#34495e',
    marginBottom: '20px',
  },
  map: {
    height: '400px',
    width: '100%',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default Triasico;
