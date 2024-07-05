import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './LoginButton.module.css';

const LoginButton = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/profile');
  };

  return (
    <button className={styles.loginButton} onClick={handleLogin}>
      Ver perfil
    </button>
  );
};

export default LoginButton;
