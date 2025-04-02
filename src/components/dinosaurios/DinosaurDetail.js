import React from 'react';
import { useParams } from 'react-router-dom';

const DinosaurDetail = () => {
  const { name } = useParams();

  const dinosaurs = {
    elasmosaurus: {
      name: 'Elasmosaurus',
      description: 'El Elasmosaurus fue un género de plesiosaurio marino con un cuello extremadamente largo. Vivió durante el Cretácico Superior, hace 80 millones de años.',
      image: '../elasmosaurus.avif',
      length: '14 metros',
      diet: 'Carnívoro (alimentándose principalmente de peces pequeños).',
      funFact: 'Usaba su largo cuello para atrapar presas sin ser detectado.'
    },
    plesiosaurus: {
      name: 'Plesiosaurus',
      description: 'El Plesiosaurus fue un reptil marino con un cuerpo aerodinámico y aletas poderosas que le permitían nadar rápidamente en los océanos.',
      image: '../plesiosaurus.jpg',
      length: '12 metros',
      diet: 'Carnívoro (se alimentaba de peces y calamares).',
      funFact: 'El Plesiosaurus era excelente para maniobrar bajo el agua con sus aletas en forma de remo.'
    },
    mosasaurus: {
      name: 'Mosasaurus',
      description: 'El Mosasaurus fue un depredador marino gigante que gobernaba los océanos en el Cretácico. Tenía dientes afilados y una mandíbula poderosa.',
      image: '../mosasaurus.webp',
      length: '18 metros',
      diet: 'Carnívoro (se alimentaba de peces, calamares y reptiles).',
      funFact: 'Podía respirar aire y pasaba la mayor parte de su vida cerca de la superficie.'
    },
    kronosaurus: {
      name: 'Kronosaurus',
      description: 'El Kronosaurus era uno de los depredadores más grandes del Cretácico. Era conocido por su poderosa mordida y gran tamaño.',
      image: '../Kronosaurus.jpg',
      length: '10 metros',
      diet: 'Carnívoro (se alimentaba de otros reptiles marinos).',
      funFact: 'Tenía dientes enormes y era capaz de partir huesos con facilidad.'
    },
    tylosaurus: {
      name: 'Tylosaurus',
      description: 'El Tylosaurus fue un mosasáurido gigantesco, estrechamente relacionado con las serpientes modernas.',
      image: '../Tylosaurus.jpg',
      length: '15 metros',
      diet: 'Carnívoro (devoraba peces, aves y reptiles).',
      funFact: 'Era conocido por su habilidad para atacar tanto en el agua como en la superficie.'
    },
    ichthyosaurus: {
      name: 'Ichthyosaurus',
      description: 'El Ichthyosaurus fue un reptil marino con cuerpo hidrodinámico, similar al de un delfín moderno. Era uno de los nadadores más rápidos del Jurásico.',
      image: '../ichthyosaurus.jpg',
      length: '2 a 4 metros',
      diet: 'Carnívoro (se alimentaba de peces y calamares).',
      funFact: 'Era vivíparo, lo que significa que daba a luz crías vivas en lugar de poner huevos.',
    },
    liopleurodon: {
      name: 'Liopleurodon',
      description: 'El Liopleurodon era un pliosaurio con un cuerpo robusto y una cabeza grande con mandíbulas poderosas. Era uno de los depredadores más temibles de los océanos.',
      image: '../liopleurodon.jpg',
      length: '6 a 10 metros',
      diet: 'Carnívoro (depredador de peces y reptiles marinos).',
      funFact: 'Se cree que tenía un sentido del olfato agudo, capaz de detectar presas a larga distancia.',
    },
    metriorhynchus: {
      name: 'Metriorhynchus',
      description: 'El Metriorhynchus era un crocodiliforme adaptado al medio marino, con extremidades en forma de aletas y una cola similar a la de un pez.',
      image: '../metriorhynchus.jpg',
      length: '3 metros',
      diet: 'Carnívoro (comía peces y pequeños reptiles).',
      funFact: 'A diferencia de los cocodrilos actuales, estaba completamente adaptado a la vida en el mar y no necesitaba volver a tierra.',
    },
    ophthalmosaurus: {
      name: 'Ophthalmosaurus',
      description: 'El Ophthalmosaurus era un ictiosaurio famoso por sus enormes ojos, lo que le permitía cazar en aguas profundas con poca luz.',
      image: '../ophthalmosaurus.jpg',
      length: '5 a 6 metros',
      diet: 'Carnívoro (se alimentaba principalmente de peces y cefalópodos).',
      funFact: 'Sus ojos eran tan grandes que ocupaban casi un tercio de su cráneo, permitiéndole ver en la oscuridad total de las profundidades.',
    },
    nothosaurus: {
      name: 'Nothosaurus',
      description: 'Reptil semiacuático con extremidades adaptadas para nadar. Vivió en el Triásico.',
      image: '../nothosaurus.jpg',
      length: '4 metros',
      diet: 'Carnívoro (se alimentaba de peces).',
      funFact: 'Era un excelente nadador, pero también podía moverse en tierra.'
    },
    placodus: {
      name: 'Placodus',
      description: 'El Placodus era un reptil marino con un cuerpo robusto y dientes especializados para triturar conchas.',
      image: '../placodus.jpg',
      length: '2 metros',
      diet: 'Moluscos y crustáceos.',
      funFact: 'Usaba sus dientes frontales como pinzas para arrancar moluscos de las rocas.',
    },
    cymbospondylus: {
      name: 'Cymbospondylus',
      description: 'El Cymbospondylus fue un ictiosaurio temprano, con un cuerpo largo y flexible, adaptado para nadar en los mares del Triásico.',
      image: '../cymbospondylus.jpg',
      length: '10 metros',
      diet: 'Carnívoro (peces y cefalópodos).',
      funFact: 'Es uno de los primeros grandes ictiosaurios conocidos.',
    },
    tanystropheus: {
      name: 'Tanystropheus',
      description: 'El Tanystropheus era un reptil con un cuello extremadamente largo que constituía la mitad de su cuerpo.',
      image: '../tanystropheus.jpg',
      length: '6 metros',
      diet: 'Pequeños animales acuáticos.',
      funFact: 'Se debate si vivía principalmente en el agua o en tierra.',
    },
    mixosaurus: {
      name: 'Mixosaurus',
      description: 'Ictiosaurio primitivo con características intermedias entre reptiles y peces. Vivió durante el Triásico.',
      image: '../mixosaurus.jpg',
      length: '1 a 2 metros',
      diet: 'Carnívoro (peces).',
      funFact: 'Es uno de los ictiosaurios más antiguos conocidos.'
    },
    keichousaurus: {
      name: 'Keichousaurus',
      description: 'Pequeño reptil marino con extremidades en forma de aletas. Vivió en el Triásico.',
      image: '../keichousaurus.jpg',
      length: '0.5 metros',
      diet: 'Carnívoro (peces pequeños).',
      funFact: 'Es uno de los reptiles marinos más pequeños conocidos del Triásico.'
    },
    lariosaurus: {
      name: 'Lariosaurus',
      description: 'Nothosaurio de tamaño medio con adaptaciones para la vida acuática. Vivió en el Triásico.',
      image: '../lariosaurus.jpg',
      length: '1 metro',
      diet: 'Carnívoro (peces).',
      funFact: 'Poseía extremidades adaptadas para nadar en aguas poco profundas.'
    },
    askeptosaurus: {
      name: 'Askeptosaurus',
      description: 'Reptil marino con un cuerpo alargado y extremidades adaptadas para nadar. Vivió durante el Triásico.',
      image: '../askeptosaurus.jpg',
      length: '2 metros',
      diet: 'Carnívoro (peces).',
      funFact: 'Se cree que era un nadador ágil en aguas costeras.'
    },
    helveticosaurus: {
      name: 'Helveticosaurus',
      description: 'Reptil marino con una mezcla de características de nothosaurios y placodontos. Vivió en el Triásico.',
      image: '../helveticosaurus.jpg',
      length: '2 metros',
      diet: 'Carnívoro (peces).',
      funFact: 'Tenía adaptaciones únicas para capturar presas en ambientes marinos.'
    },
    muraenosaurus: {
      name: 'Muraenosaurus',
      description: 'Plesiosaurio de cuello largo y cuerpo esbelto. Vivió en el Jurásico.',
      image: '../muraenosaurus.jpg',
      length: '6 metros',
      diet: 'Carnívoro (peces).',
      funFact: 'Era un nadador lento que usaba su cuello largo para alcanzar presas.'
    },
    attenborosaurus: {
      name: 'Attenborosaurus',
      description: 'Pliosaurio con un cuello relativamente largo y mandíbulas alargadas. Vivió en el Jurásico.',
      image: '../attenborosaurus.jpg',
      length: '5 metros',
      diet: 'Carnívoro (peces).',
      funFact: 'Su nombre honra al famoso naturalista Sir David Attenborough.'
    },
    thalassiodracon: {
      name: 'Thalassiodracon',
      description: 'Pliosaurio pequeño con adaptaciones para la vida marina. Vivió en el Jurásico.',
      image: '../thalassiodracon.jpg',
      length: '2 metros',
      diet: 'Carnívoro (peces).',
      funFact: 'Es uno de los pliosaurios más antiguos conocidos.'
    },
    hydrotherosaurus: {
      name: 'Hydrotherosaurus',
      description: 'Reptil marino con un cuello largo, miembro de los elasmosaurios. Vivió en el Cretácico.',
      image: '../hydrotherosaurus.jpg',
      length: '11 metros',
      diet: 'Carnívoro (peces).',
      funFact: 'Utilizaba su largo cuello para alcanzar presas en aguas poco profundas.'
    },
    brachauchenius: {
      name: 'Brachauchenius',
      description: 'Pliosaurio de cuello corto que habitó en el océano. Vivió en el Cretácico.',
      image: '../brachauchenius.jpg',
      length: '7 metros',
      diet: 'Carnívoro (peces y otros reptiles).',
      funFact: 'Es uno de los últimos pliosaurios conocidos.'
    },
    clidastes: {
      name: 'Clidastes',
      description: 'Mosasaurio más pequeño, ágil y rápido. Vivió en el Cretácico.',
      image: '../clidastes.jpg',
      length: '4 metros',
      diet: 'Carnívoro (peces y pequeños reptiles).',
      funFact: 'Era conocido por su habilidad para nadar rápidamente en busca de presas.'
    },
    pachyrhizodus: {
      name: 'Pachyrhizodus',
      description: 'Pez depredador grande que coexistió con los mosasaurios. Vivió en el Cretácico.',
      image: '../pachyrhizodus.jpg',
      length: '3 metros',
      diet: 'Carnívoro (peces más pequeños).',
      funFact: 'Tenía un cuerpo ágil adaptado para nadar rápidamente.'
    },
    xiphactinus: {
      name: 'Xiphactinus',
      description: 'Pez depredador de gran tamaño, contemporáneo de los mosasaurios. Vivió en el Cretácico.',
      image: '../xiphactinus.jpg',
      length: '5 metros',
      diet: 'Carnívoro (peces).',
      funFact: 'Es conocido por restos fósiles que muestran otros peces grandes en su estómago.'
    },
    globidens: {
      name: 'Globidens',
      description: 'Mosasaurio con dientes redondeados, adaptado para triturar conchas. Vivió en el Cretácico.',
      image: '../globidens.jpg',
      length: '6 metros',
      diet: 'Carnívoro (moluscos y crustáceos).',
      funFact: 'Sus dientes le permitían triturar presas de caparazón duro.'
    },
    halisaurus: {
      name: 'Halisaurus',
      description: 'Mosasaurio de tamaño pequeño a mediano, con adaptaciones para la vida marina. Vivió en el Cretácico.',
      image: '../halisaurus.jpg',
      length: '4 metros',
      diet: 'Carnívoro (peces y pequeños reptiles).',
      funFact: 'Es uno de los mosasaurios más pequeños conocidos.'
    },
    pannoniasaurus: {
      name: 'Pannoniasaurus',
      description: 'Mosasaurio que habitó en ambientes de agua dulce. Vivió en el Cretácico.',
      image: '../pannoniasaurus.jpg',
      length: '6 metros',
      diet: 'Carnívoro (peces).',
      funFact: 'Fue uno de los pocos mosasaurios que vivió en agua dulce en lugar de en el mar.'
    },
    eonatator: {
      name: 'Eonatator',
      description: 'Mosasaurio pequeño con adaptaciones para la vida en aguas poco profundas. Vivió en el Cretácico.',
      image: '../eonatator.jpg',
      length: '3 metros',
      diet: 'Carnívoro (peces).',
      funFact: 'Era un nadador ágil que prefería las aguas costeras.'
    },
    plotosaurus: {
      name: 'Plotosaurus',
      description: 'Mosasaurio con adaptaciones para una natación rápida. Vivió en el Cretácico.',
      image: '../plotosaurus.jpg',
      length: '13 metros',
      diet: 'Carnívoro (peces y otros reptiles).',
      funFact: 'Tenía adaptaciones para una velocidad mayor en el agua.'
    },
    styxosaurus: {
      name: 'Styxosaurus',
      description: 'Elasmosaurio con un cuello muy largo y cuerpo esbelto. Vivió en el Cretácico.',
      image: '../styxosaurus.jpg',
      length: '11 metros',
      diet: 'Carnívoro (peces).',
      funFact: 'Su largo cuello le permitía capturar peces sin acercarse demasiado.'
    },
    futabasaurus: {
      name: 'Futabasaurus',
      description: 'Plesiosaurio encontrado en Japón, de tamaño mediano. Vivió en el Cretácico.',
      image: '../futabasaurus.jpg',
      length: '6 metros',
      diet: 'Carnívoro (peces).',
      funFact: 'Es uno de los pocos plesiosaurios descubiertos en Japón.'
    },
    nothronychus: {
      name: 'Nothronychus',
      description: 'Dinosaurio terópodo con adaptaciones para una dieta herbívora, que habitó en zonas costeras. Vivió en el Cretácico.',
      image: '../nothronychus.jpg',
      length: '6 metros',
      diet: 'Herbívoro.',
      funFact: 'Es uno de los pocos terópodos conocidos que se alimentaba de plantas.'
    },
    deinosuchus: {
      name: 'Deinosuchus',
      description: 'Cocodrilo prehistórico enorme, conocido por vivir en áreas de agua dulce y en las costas. Vivió en el Cretácico.',
      image: '../deinosuchus.jpg',
      length: '12 metros',
      diet: 'Carnívoro (peces y dinosaurios).',
      funFact: 'Podía cazar incluso a grandes dinosaurios cuando se acercaban al agua.'
    }
  };

  const dinosaur = dinosaurs[name.toLowerCase()];

  if (!dinosaur) {
    return <h1 style={styles.error}>Dinosaurio no encontrado</h1>;
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>{dinosaur.name}</h1>
        <img src={dinosaur.image} alt={dinosaur.name} style={styles.image} />
        <p style={styles.description}>{dinosaur.description}</p>
        <ul style={styles.infoList}>
          <li><strong>Longitud:</strong> {dinosaur.length}</li>
          <li><strong>Dieta:</strong> {dinosaur.diet}</li>
        </ul>
        {dinosaur.funFact && (
          <div style={styles.funFact}>
            <h2 style={styles.funFactTitle}>¿Sabías que...?</h2>
            <p style={styles.funFactText}>{dinosaur.funFact}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #141e30, #243b55)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(8px)',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '800px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#ffffff',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '15px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.3rem',
    lineHeight: '1.6',
    marginBottom: '20px',
    color: '#e0e0e0',
  },
  infoList: {
    listStyleType: 'none',
    padding: 0,
    margin: '20px 0',
    fontSize: '1.1rem',
    color: '#cfcfcf',
  },
  funFact: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: '10px',
    padding: '20px',
    marginTop: '30px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  funFactTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#ffdd57',
    marginBottom: '10px',
  },
  funFactText: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#f1f1f1',
  },
  error: {
    color: '#ff4c4c',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontFamily: "'Roboto', sans-serif",
    marginTop: '20px',
  },
};

export default DinosaurDetail;
