import React, { useState } from 'react';
import swal from 'sweetalert';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    swal('Mensaje enviado con éxito', {
      icon: 'success',
    });
    setFormData({ name: '', email: '', message: '' }); 
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
      </form>
    </section>
  );
};

export default ContactForm;
