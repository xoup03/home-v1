import React, { useState } from "react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // Replace with actual base URL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/public/queries/contact-us`,
        {
          method: "POST",
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit contact form");
      }

      // Reset form and show success message
      setFormData({ name: "", email: "", address: "" });
      setSuccess(true);

      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      console.error("Error submitting contact form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-12 " id="contact">
      <div className="max-w-2xl mx-auto  p-10 rounded-sm">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Connect with us
        </h2>
        <p className="text-center pb-4 text-gray-500 text-sm">
          Please share your details, Our team will contact you soon
        </p>
        {success && (
          <p className="text-green-500 text-center">
            Message sent successfully!
          </p>
        )}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Please Enter your name"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-sm focus:outline-none placeholder:text-sm"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Please Enter your email"
              className="w-full px-4 py-2 border bg-white border-gray-300 rounded-sm focus:outline-none placeholder:text-sm"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              name="address"
              placeholder="Please Enter your address"
              rows="3"
              className="w-full px-4 py-2 border bg-white border-gray-300 rounded-sm focus:outline-none placeholder:text-sm resize-none overflow-hidden"
              required
              value={formData.address}
              onChange={handleChange}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-8 mx-auto block py-3 bg-[#262424] text-white text-sm rounded-md hover:border border-[#0328BC] transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit & Get in touch"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
