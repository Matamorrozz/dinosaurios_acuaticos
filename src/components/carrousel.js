import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DinosaurCarousel = ({ imageLinks }) => {
  // Selecciona 10 imágenes aleatorias de la lista
  const randomImages = imageLinks.sort(() => 0.5 - Math.random()).slice(0, 10);

  return (
    <div style={styles.carouselContainer}>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        dynamicHeight={false}
        style={styles.carousel}
        showArrows={true}
      >
        {randomImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Dinosaurio ${index + 1}`} style={styles.carouselImage} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const styles = {
  carouselContainer: {
    width: '80%', // Ajusta el ancho total del contenedor del carrusel
    margin: '0 auto', // Centrar el carrusel en la página
    padding: '20px 0',
  },
  carouselImage: {
    height: '400px',
    borderRadius:'20px', // Ajusta la altura de las imágenes
    objectFit: 'cover', // Mantener la proporción de las imágenes
  },
};

export default DinosaurCarousel;
