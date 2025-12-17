import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);




    try {
      const form = e.target;
      const data = new FormData(form);

      await fetch("/", {
        method: "POST",
        body: data,
      });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-950" ref={ref}>
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className={`text-4xl font-bold text-center mb-12 text-white ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`} style={{ '--animation-delay': '0s' }}>
          Let's <span className="text-emerald-400">Connect</span>
        </h2>
        <div className={`bg-gray-800 p-8 md:p-12 rounded-xl shadow-xl border border-emerald-500/30 ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`} style={{ '--animation-delay': '0.2s' }}>
          <form onSubmit={handleSubmit} className="space-y-6 " name="contact"
            method="POST"
            data-netlify="true">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
              <input
                type="name"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 
                               focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent 
                               transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 
                               focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent 
                               transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 
                                  focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent 
                                  transition-all duration-200"></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 
                                             text-white font-semibold py-3 px-10 rounded-full text-lg 
                                             transition-all duration-300 shadow-lg shadow-emerald-500/20 
                                             hover:scale-105 disabled:opacity-50 disabled:cursor-wait"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>


            {submitStatus === 'success' && (
              <p className="text-center text-emerald-400 mt-4">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-center text-red-400 mt-4">
                Something went wrong. Please try again later.
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;