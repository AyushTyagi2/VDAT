"use client";
import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log(formData); // For demonstration
    alert("Message sent successfully!"); // Simple alert for now
    setFormData({
        fullName: '',
        subject: '',
        email: '',
        phone: '',
        message: '',
      });
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Address:</h3>
            <p className="text-gray-600 mb-4">IIT Ropar, Punjab-140001, INDIA</p>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Email:</h3>
            <p className="text-gray-600 mb-4">cvip2025@iitrpr.ac.in</p>

            {/* You can add a Google Map embed here if needed */}
            <div className="mt-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.893155798251!2d79.0514131149292!3d21.11894178592923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4a08237976527%3A0x86738994a5959908!2sVisvesvaraya%20National%20Institute%20of%20Technology%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1701168170066!5m2!1sen!2sin" width="100%" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name *</label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject *</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required></textarea>
              </div>
              <button type="submit" className="w-full bg-purple-500 text-white rounded-md py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;