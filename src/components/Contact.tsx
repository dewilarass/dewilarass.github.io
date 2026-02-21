import React, { useState, FormEvent, ChangeEvent } from "react";
import { contactInfo, socialLinks } from "../data";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormData = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialForm);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData(initialForm);
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-neo-yellow border-y-[3px] border-neo-black"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="neo-badge bg-white mb-4 inline-block">Get In Touch</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-4">
            Let's Work Together!
          </h2>
          <p className="text-gray-800 mt-4 text-lg max-w-2xl mx-auto">
            I'm always excited to collaborate on projects, events, and programs
            that create meaningful impact. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="neo-card p-6 sm:p-8 bg-white">
            <h3 className="font-heading font-bold text-xl mb-6">
              Send me a message
            </h3>
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-heading font-bold mb-2 text-sm" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="neo-input"
                  />
                </div>
                <div>
                  <label className="block font-heading font-bold mb-2 text-sm" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="neo-input"
                  />
                </div>
              </div>
              <div>
                <label className="block font-heading font-bold mb-2 text-sm" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="neo-input"
                />
              </div>
              <div>
                <label className="block font-heading font-bold mb-2 text-sm" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or just say hello!"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="neo-input resize-none"
                />
              </div>
              <button
                type="submit"
                className="neo-btn bg-neo-pink w-full text-center justify-center text-lg"
              >
                Send Message 🚀
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="neo-card p-6 bg-white">
              <h3 className="font-heading font-bold text-xl mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center gap-4 p-4 border-2 border-neo-black rounded-lg hover:bg-neo-yellow/20 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-neo-blue border-2 border-neo-black rounded-lg flex items-center justify-center text-2xl shadow-neo-hover group-hover:shadow-none group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="neo-card p-6 bg-white">
              <h3 className="font-heading font-bold text-xl mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`neo-btn !px-4 !py-3 ${social.color}`}
                    title={social.label}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
