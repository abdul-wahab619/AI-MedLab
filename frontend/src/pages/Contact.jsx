import React, { useState } from "react";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Email Send Successfully");
      } else {
        toast.error("Try Again...!");
      }
    } catch (error) {
      toast.error("Error submitting form:", error);
    }
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-18 font-light text-center text__para">
          Got a technical issue? want to send feedback about a beta feature? Let
          us know.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com "
              className="form__input mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Let us know about the issue... "
              className="form__input mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="form__label">
              Message
            </label>
            <textarea
              rows={6}
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              id="message"
              placeholder="write the details message here... "
              className="form__input mt-1"
              required
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
