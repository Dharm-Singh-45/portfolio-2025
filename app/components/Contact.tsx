'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) {
          return 'Name is required';
        }
        if (value.trim().length < 2) {
          return 'Name must be at least 2 characters';
        }
        if (value.trim().length > 50) {
          return 'Name must be less than 50 characters';
        }
        // Check for numbers or special characters (allow only letters, spaces, hyphens, and apostrophes)
        const nameRegex = /^[a-zA-Z\s'-]+$/;
        if (!nameRegex.test(value.trim())) {
          return 'Name should only contain letters, spaces, hyphens, and apostrophes';
        }
        return '';
      case 'email':
        if (!value.trim()) {
          return 'Email is required';
        }
        if (!validateEmail(value)) {
          return 'Please enter a valid email address';
        }
        return '';
      case 'message':
        if (!value.trim()) {
          return 'Message is required';
        }
        if (value.trim().length < 10) {
          return 'Message must be at least 10 characters';
        }
        if (value.trim().length > 1000) {
          return 'Message must be less than 1000 characters';
        }
        return '';
      default:
        return '';
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    // For name field, prevent numbers and most special characters (allow letters, spaces, hyphens, apostrophes)
    let filteredValue = value;
    if (name === 'name') {
      filteredValue = value.replace(/[^a-zA-Z\s'-]/g, '');
    }
    
    setFormData({
      ...formData,
      [name]: filteredValue,
    });

    // Validate field if it has been touched
    if (touched[name as keyof typeof touched]) {
      setErrors({
        ...errors,
        [name]: validateField(name, filteredValue),
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (newErrors.name || newErrors.email || newErrors.message) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - you'll need to set these up
      // Get these from: https://www.emailjs.com/
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Initialize EmailJS
      emailjs.init(publicKey);

      // Send email
      // Note: to_email is already configured in EmailJS template
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com/Dharm-Singh-45' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/dharm-singh-fullstack-web-developer/' },
    { name: 'LeetCode', icon: '🧮', url: 'https://leetcode.com/u/xuxJHHw3w5/' },
    { name: 'Email', icon: '📧', url: 'mailto:dharmsingh0602@gmail.com' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. <span className="font-semibold text-blue-600">Available for freelance work!</span>
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                <div className="space-y-4">
                  <a
                    href="mailto:dharmsingh0602@gmail.com"
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <span className="text-2xl mr-3">📧</span>
                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                      dharmsingh0602@gmail.com
                    </span>
                  </a>
                  <a
                    href="tel:+919462686862"
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <span className="text-2xl mr-3">📱</span>
                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                      +91 9462686862
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition text-gray-900 bg-white ${
                    errors.name && touched.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300'
                  }`}
                />
                {errors.name && touched.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition text-gray-900 bg-white ${
                    errors.email && touched.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300'
                  }`}
                />
                {errors.email && touched.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none text-gray-900 bg-white placeholder:text-gray-400 ${
                    errors.message && touched.message
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300'
                  }`}
                  placeholder="Type your message here..."
                ></textarea>
                {errors.message && touched.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
                <p className="mt-1 text-sm text-gray-500">
                  {formData.message.length}/1000 characters
                </p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                  ✓ Message sent successfully! I'll get back to you soon at dharmsingh0602@gmail.com
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
                  ✗ Failed to send message. Please try again or email me directly at dharmsingh0602@gmail.com
                </div>
              )}
            </form>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Connect with me
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                >
                  <span className="text-3xl mb-2">{link.icon}</span>
                  <span className="text-sm text-gray-700 font-medium group-hover:text-blue-600 transition-colors text-center">
                    {link.name}
                  </span>
                </a>
              ))}
              <a
                href="/Dharm-singh-fullstack-resume.pdf"
                download="Dharm_Singh_Resume.pdf"
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <span className="text-3xl mb-2">📄</span>
                <span className="text-sm text-gray-700 font-medium group-hover:text-blue-600 transition-colors text-center">
                  Resume
                </span>
              </a>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-6 text-center max-w-3xl mx-auto">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Let's work together!
              </h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                Whether you have a project in mind or just want to chat about
                technology, feel free to reach out. I'm always excited to
                connect with fellow developers and potential collaborators.
              </p>
              <p className="text-gray-700 font-semibold text-lg">
                💼 Open to freelance opportunities and remote projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

