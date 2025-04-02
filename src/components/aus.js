import React from 'react';

const SobreNosotros = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Sobre Nosotros</h1>
        <p style={styles.paragraph}>
          Bienvenidos a nuestra enciclopedia digital sobre <strong>dinosaurios acuáticos</strong>. Aquí podrás encontrar información fascinante sobre estas criaturas prehistóricas que dominaron los océanos hace millones de años.
        </p>
        <p style={styles.paragraph}>
          Nuestro equipo se ha dedicado a recopilar y organizar datos, imágenes y descripciones para ofrecerte la información más precisa y detallada sobre estos increíbles animales. Nos apasiona la paleontología y esperamos que disfrutes explorando esta plataforma tanto como nosotros disfrutamos creándola.
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  container: {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '60px',
    maxWidth: '800px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
  },
  title: {
    fontSize: '3rem',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: '30px',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: '700',
  },
  paragraph: {
    fontSize: '1.3rem',
    color: '#f0f0f0',
    lineHeight: '1.8',
    textAlign: 'justify',
    marginBottom: '20px',
    fontFamily: "'Roboto', sans-serif",
  },
};

export default SobreNosotros;
