import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';



function ContactForm() {

  const [errorMessage, setErrorMessage] = useState('');

  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, name: e.target.value })

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  console.log(formState);

  return (
    <section className='my-5 grid text-center'>
      <h1>Contact me</h1>
      <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
        <div className>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onChange={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )

}





export default ContactForm; 