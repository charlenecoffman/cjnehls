import React, { useState } from 'react';
import { ContactForm } from '../domain/ContactForm';
import { sendContactUsEmail } from '../clients/EmailClient';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendContactUsEmail({message: form.message, name: form.name, email: form.email} as ContactForm);
    setEmailSent(true);
  };

  return (
    <section id="contact" className="w-full px-4 py-12 pt-52 relative z-10 text-white">
      {emailSent && <div>Email was sent!</div>}
      {!emailSent && (
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#FFB966] hover:bg-[#e0a652] text-black font-semibold py-2 px-6 rounded-md transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
      )}
    </section>
  );
};
