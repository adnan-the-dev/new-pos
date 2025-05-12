import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Testing() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    // Create a temporary form element for emailjs
    const tempForm = document.createElement('form');
    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement(key === 'message' ? 'textarea' : 'input');
      input.name = key;
      input.value = value;
      tempForm.appendChild(input);
    });

    try {
      await emailjs.sendForm('service_qevqx4p', 'template_s4r3ayr', tempForm, {
        publicKey: 'NEsZrN42ZsANldoBo',
      });

      toast.success('Email sent successfully!');
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error: any) {
      console.error('FAILED...', error);
      toast.error('Failed to send email. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <input type="submit" value={isSending ? 'Sending...' : 'Send'} disabled={isSending} />
      </form>

      {/* Toast container for showing notifications */}
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
}

export default Testing;
