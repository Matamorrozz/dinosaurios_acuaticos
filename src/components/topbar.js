import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const closeDropdown = () => setShowDropdown(false);

  return (
    <nav style={styles.navBar}>
      <Link to="/" style={styles.logoContainer}>
        <img src="../maxidinos.png" alt="Logo" style={styles.logo} />
        <h1 style={styles.siteTitle}>MaxiDinos</h1>
      </Link>
      <ul style={styles.navList}>
        <li>
          <Link to="/" style={styles.navItem}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/sobre-nosotros" style={styles.navItem}>
            Sobre Nosotros
          </Link>
        </li>
        <li style={styles.dropdownContainer}>
          <span style={styles.navItem} onClick={toggleDropdown}>
            Periodos ▼
          </span>
          {showDropdown && (
            <ul style={styles.dropdownMenu}>
              <li>
                <Link
                  to="/periodo-triasico"
                  style={styles.dropdownItem}
                  onClick={closeDropdown}
                >
                  Triásico
                </Link>
              </li>
              <li>
                <Link
                  to="/periodo-jurasico"
                  style={styles.dropdownItem}
                  onClick={closeDropdown}
                >
                  Jurásico
                </Link>
              </li>
              <li>
                <Link
                  to="/periodo-cretacico"
                  style={styles.dropdownItem}
                  onClick={closeDropdown}
                >
                  Cretácico
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navBar: {
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(10px)",
    padding: "15px 30px",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    transition: "background 0.3s ease",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  logo: {
    height: "60px",
    width: "auto",
    marginRight: "15px",
  },
  siteTitle: {
    color: "#f1f1f1",
    fontSize: "1.8rem",
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
  },
  navList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    gap: "25px",
  },
  navItem: {
    color: "#f1f1f1",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "500",
    cursor: "pointer",
    position: "relative",
    transition: "color 0.3s ease",
  },
  dropdownContainer: {
    position: "relative",
  },
  dropdownMenu: {
    position: "absolute",
    top: "120%",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    listStyleType: "none",
    padding: "10px 0",
    margin: 0,
    borderRadius: "8px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    animation: "fadeIn 0.3s ease",
  },
  dropdownItem: {
    padding: "10px 20px",
    textDecoration: "none",
    color: "#f1f1f1",
    display: "block",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "1rem",
    transition: "background-color 0.3s ease, color 0.3s ease",
    cursor: "pointer",
  },
};

export default TopBar;
