import React from 'react';
import DinosaurCarousel from '../components/carrousel.js';

const imageLinks = [
  // Aquí van tus enlaces de imágenes de dinosaurios
  "http://fc02.deviantart.net/fs70/i/2012/063/d/f/shanag_ashile_by_teratophoneus-d4ro06p.jpg",
  "http://fc05.deviantart.net/fs71/i/2011/219/7/1/shanag_ashile_by_teratophoneus-d45qqi4.jpg",
  "http://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/shanag.jpg",
  "http://4.bp.blogspot.com/-V9fOI9vdRag/UTWdHs-fBAI/AAAAAAAAElM/lFV4-FZ7UjU/s1600/Shanag+reloaded.jpg",
  // Gasosaurus y otros dinosaurios
  "http://fc05.deviantart.net/fs70/f/2013/106/c/4/gasosaurus_by_gregoryferreira-d61ylq8.jpg",
  "http://3.bp.blogspot.com/-Uj4Nm-uqsx0/UIIJL3HVIiI/AAAAAAAAAsU/M8LYKFBp82g/s1600/Gasosaurus_20121019_1.jpg",
  "http://images.fineartamerica.com/images-medium-large/enhanced-image-of-a-gasosaurus-dinosaur-fossil-mehau-kulyk.jpg",
  "https://lh3.googleusercontent.com/-2SzxBoJd87M/UAxGk7Tj10I/AAAAAAAAAtM/h7NiwxKtWAg/s1152/Gasosaurus-Aardonyx-scale%252Bhuman.png",
  "http://fc05.deviantart.net/fs71/i/2013/125/e/5/the_skeleton_of_gasosaurus_by_darcygagnon-d6499f4.jpg",
  "http://upload.wikimedia.org/wikipedia/commons/1/13/Barapasaurus_DB.jpg",
  // ...más enlaces si los requieres
];

const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>🌍 Enciclopedia de Dinosaurios</h1>
        <p style={styles.tagline}>Descubre el fascinante mundo de los dinosaurios</p>
      </header>
      <main style={styles.mainContent}>
        <DinosaurCarousel imageLinks={imageLinks} />
      </main>
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          🚀 Diseñado para los amantes de los dinosaurios | © 2024 MaxiDinos
        </p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Poppins', sans-serif",
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    padding: '60px 20px',
    color: '#fff',
  },
  mainTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    margin: '0 0 10px',
    textShadow: '3px 3px 15px rgba(0,0,0,0.6)',
  },
  tagline: {
    fontSize: '1.5rem',
    margin: 0,
    textShadow: '2px 2px 10px rgba(0,0,0,0.5)',
  },
  mainContent: {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px',
    width: '100%',
    maxWidth: '1200px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
    marginBottom: '40px',
  },
  footer: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    padding: '20px',
    fontSize: '0.9rem',
  },
  footerText: {
    margin: 0,
  },
};

export default Home;
