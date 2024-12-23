import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function ContactUs () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mnyltad', 'template_2zg772v', form.current, {
        publicKey: '1eDteNJZfuNcSgtp-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className='formContactUs' ref={form} onSubmit={sendEmail}>
      <label>Nombre completo:</label>
      <input type="text" name="user_name" />
      <label>Email:</label>
      <input type="email" name="user_email" />
      <label>Mensaje o consulta:</label>
      <textarea name="message" />
      <input className='buttonForm' type="submit" value="Enviar" />
    </form>
  );
};

export default ContactUs;