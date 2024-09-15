'use client';
import { useState } from 'react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  // Handle form input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission with typing for 'e'
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending your awesome message... 🚀');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Yay! Message sent successfully! 🎉');
        setFormData({ email: '', subject: '', message: '' }); // Reset form
      } else {
        setStatus('Oops! Something went wrong. 😕');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Uh-oh, couldn’t send the message. Try again later! 💻');
    }
  };

  return (
    <section id="contact" className="my-16">
      <div className="container mx-auto px-6">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800 dark:text-gray-200">
          Want to Connect?
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-md rounded bg-white p-6 shadow-lg dark:bg-gray-800"
        >
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-300">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded bg-[#c72c6c] px-4 py-2 text-white transition hover:bg-[#b4245a] dark:bg-[#b4245a] dark:hover:bg-[#a31f4f]"
          >
            Send Message
          </button>
          {status && (
            <p className="mt-4 text-center text-gray-800 dark:text-gray-200">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
