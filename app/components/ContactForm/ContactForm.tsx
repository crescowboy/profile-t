// app/components/ContactForm/ContactForm.tsx
"use client";
import React, { useState } from 'react';
import swal from 'sweetalert';
import { useRouter } from 'next/navigation';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para la validación básica y el manejo del éxito del envío
    console.log(formData); // Solo para propósitos de demostración
    swal('Mensaje enviado con éxito', {
      icon: 'success',
    });
    setFormData({ name: '', email: '', message: '' }); // Reiniciar el formulario después del envío
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <section className={styles.contactForm}>
      <h2 className={styles.title}>Contacto</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
          rows={4}
          required
        ></textarea>
        <button type="submit" className={styles.button}>Enviar</button>
        <button type="button" onClick={handleBack} className={styles.buttonBack}>Regresar</button>
      </form>
    </section>
  );
};

export default ContactForm;
