"use client";
import React from 'react';
import Image from 'next/image';
import LoginButton from './components/LoginButton/LoginButton';
import styles from './page.module.css';
import img from '../assets/foto.jpg';

const HomePage = () => {
  const user = {
    name: 'Wellington Crespo',
    photoUrl: img, 
    role: 'Desarrollador Web', 
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.profileCard}>
        <Image src={user.photoUrl} alt="Profile" className={styles.profilePhoto} />
        <h1 className={styles.profileName}>{user.name}</h1>
        <p className={styles.profileRole}>{user.role}</p> 
        <LoginButton />
      </div>
    </div>
  );
};

export default HomePage;
