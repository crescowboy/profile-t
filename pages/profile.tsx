
import React from 'react';
import '../app/globals.css'
import Header from '../app/components/Header/Header';
import About from '../app/components/About/About';
import Interests from '../app/components/Interests/Interests';
import ContactForm from '../app/components/ContactForm/ContactForm';

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Interests />
        <ContactForm />
      </main>
    </div>
  );
};

export default ProfilePage;
