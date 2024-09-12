"use client";

import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  number: string;
  subject: string;
  text: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can send formData to your backend or do whatever you want with it
    console.log(formData);
    // Optionally, you can clear the form after submission
    setFormData({
      name: "",
      email: "",
      number: "",
      subject: "",
      text: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <input
              type="text"
              name="number"
              placeholder="Phone number"
              className="form-control"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="form-control"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-lg-12 col-md-12">
          <div className="form-group">
            <textarea
              name="text"
              cols={30}
              rows={6}
              placeholder="Write your message..."
              className="form-control"
              value={formData.text}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-lg-12 col-sm-12">
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

