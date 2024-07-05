import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import img from '../../../assets/foto.jpg'; // Ruta a tu imagen

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={img} alt="Profile Picture" width={200} height={200} />
      <div>
        <h1>Wellington Crespo</h1>
        <p>@wcrespo</p>
      </div>
    </header>
  );
};

export default Header;
