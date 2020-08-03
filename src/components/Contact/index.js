// Dependencies
import React from 'react';
// Externals
import SocialMediaIcons from '../SocialMediaIcons';
// Internals
import ContactForm from './components/ContactForm';
import './index.css';

const Contact = () => (
  <div className='container contact-page center'>
    <div class='row center'>
      <ContactForm />
    </div>
    <SocialMediaIcons />
  </div>
);

export default Contact;
