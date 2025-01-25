"use client";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!data.subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email format";
    }
    if (data.phone.trim() && !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(data.phone)) {
      errors.phone = "Invalid phone number format";
    }
    if (!data.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({});
    setIsSubmitting(true);
    setSubmissionMessage(null);

    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ fullName: "", subject: "", email: "", phone: "", message: "" });
        setSubmissionMessage("Message sent successfully!");
      } else {
        const errorData = await response.json();
        setSubmissionMessage(errorData?.message || "An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmissionMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
        {submissionMessage && (
          <div
            className={`mb-4 p-4 rounded-md ${
              submissionMessage.startsWith("An") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
            }`}
          >
            {submissionMessage}
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Address:</h3>
            <p className="text-gray-600 mb-4">IIT Ropar, Punjab-140001, INDIA</p>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Email:</h3>
            <p className="text-gray-600 mb-4">cvip2025@iitrpr.ac.in</p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.016335352778!2d76.52159071514138!3d30.97349788157777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39105799a7198757%3A0x2805908298372c0c!2siit%20ropar!5e0!3m2!1sen!2sin!4v1687259062085!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full border ${
                    formErrors.fullName ? "border-red-500" : "border-gray-300"
                  } rounded-md px-4 py-2 focus:outline-none focus:border-blue-500`}
                  required
                />
                {formErrors.fullName && <p className="text-red-500 text-xs mt-1">{formErrors.fullName}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full border ${
                    formErrors.subject ? "border-red-500" : "border-gray-300"
                  } rounded-md px-4 py-2 focus:outline-none focus:border-blue-500`}
                  required
                />
                {formErrors.subject && <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border ${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md px-4 py-2 focus:outline-none focus:border-blue-500`}
                  required
                />
                {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full border ${
                    formErrors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-md px-4 py-2 focus:outline-none focus:border-blue-500`}
                />
                {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full border ${
                    formErrors.message ? "border-red-500" : "border-gray-300"
                  } rounded-md px-4 py-2 focus:outline-none focus:border-blue-500`}
                  required
                ></textarea>
                {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
              </div>
              <button
                type="submit" href ="/"
                className={`w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 ${
                  isSubmitting && "opacity-50 cursor-not-allowed"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
