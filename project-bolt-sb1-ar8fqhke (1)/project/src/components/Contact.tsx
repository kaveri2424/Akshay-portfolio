import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader, Lightbulb, Wrench, Users, Settings } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        event_date: formData.eventDate || 'Not specified',
        event_type: formData.eventType || 'Not specified',
        message: formData.message,
        to_email: emailjsConfig.technicianEmail
      };

      // Send email via EmailJS
      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventDate: '',
          eventType: '',
          message: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send quote request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-red-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to make your event unforgettable? Let's discuss your vision and create something amazing together.
          </p>
        </div>

        {/* Professional Services Highlight - Full Width Above Everything */}
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-8 md:p-12 text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Professional Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            {[
              { icon: Lightbulb, title: 'Lighting Design', color: 'text-yellow-400' },
              { icon: Wrench, title: 'Rigging Services', color: 'text-blue-400' },
              { icon: Users, title: 'Manpower Assistance', color: 'text-green-400' },
              { icon: Settings, title: 'Technical Support', color: 'text-purple-400' }
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-gray-800 p-4 md:p-6 rounded-xl mb-3 md:mb-4 hover:bg-gray-700 transition-colors duration-200">
                  <service.icon className={`h-8 w-8 md:h-12 md:w-12 ${service.color}`} />
                </div>
                <span className="text-white font-semibold text-sm md:text-lg text-center leading-tight">{service.title}</span>
              </div>
            ))}
          </div>
          <p className="text-xl md:text-2xl text-gray-200 font-medium">
            If you want us to reach you, please fill the quote - we will contact you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: 'Phone',
                    info: '+97431046668',
                    subtitle: 'Available 24/7 for emergencies'
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    info: 'akshaylightingpro@gmail.com',
                    subtitle: 'We respond within 2 hours'
                  },
                  {
                    icon: MapPin,
                    title: 'Location',
                    info: 'Doha, Qatar',
                    subtitle: 'Serving Qatar and surrounding regions'
                  },
                  {
                    icon: Clock,
                    title: 'Business Hours',
                    info: 'Mon - Sun: 8:00 AM - 10:00 PM',
                    subtitle: 'Emergency support available 24/7'
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-750 transition-colors duration-200">
                    <div className="bg-red-500/20 p-3 rounded-lg">
                      <contact.icon className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{contact.title}</h4>
                      <p className="text-gray-300 font-medium">{contact.info}</p>
                      <p className="text-sm text-gray-400">{contact.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">Emergency Support</h4>
              <p className="text-gray-300 mb-3">
                Need immediate technical assistance during your event? Our emergency support team is standing by.
              </p>
              <a
                href="tel:+97431046668"
                className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call +974 3104 6668
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Request a Quote</h3>
            
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <CheckCircle className="h-16 w-16 text-green-400" />
                    <Mail className="h-8 w-8 text-green-400 absolute -bottom-1 -right-1 bg-gray-900 rounded-full p-1" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Quote Request Sent!</h4>
                <p className="text-gray-300 mb-2">
                  Your request has been sent to akshaylightingpro@gmail.com
                </p>
                <p className="text-sm text-gray-400">
                  You'll receive a response within 2 hours during business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-red-400 font-medium mb-1">Error Sending Request</h4>
                      <p className="text-red-300 text-sm">{errorMessage}</p>
                      <p className="text-red-300 text-xs mt-1">
                        Please try again or contact us directly.
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                      placeholder="+974 XXXX XXXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-300 mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-300 mb-2">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                  >
                    <option value="">Select Event Type</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="wedding">Wedding</option>
                    <option value="concert">Concert/Performance</option>
                    <option value="conference">Conference</option>
                    <option value="festival">Festival</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Event Details & Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50"
                    placeholder="Please describe your event, venue size, expected attendance, and specific lighting/technical requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="h-5 w-5 animate-spin" />
                      Sending Email...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Quote Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}