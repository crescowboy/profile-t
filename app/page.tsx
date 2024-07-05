"use client";
import React from 'react';
import Image from 'next/image';
import LoginButton from './components/LoginButton/LoginButton';
import styles from './page.module.css';
import img from '../assets/foto.jpg';

const HomePage = () => {
  // Simulación de datos de usuario
  const user = {
    name: 'Wellington Crespo',
    photoUrl: '../assets/foto.jpg', // Ruta a la foto de perfil
    role: 'Desarrollador Web', // Nuevo campo para el rol
  };

  const handleLogin = () => {
    // Lógica para manejar el inicio de sesión
    console.log('Login clicked');
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.profileCard}>
        <Image src={img} alt="Profile" className={styles.profilePhoto} />
        <h1 className={styles.profileName}>{user.name}</h1>
        <p className={styles.profileRole}>{user.role}</p> {/* Nuevo elemento para el rol */}
        <LoginButton className={styles.loginButton} />
      </div>
    </div>
  );
};

export default HomePage;
