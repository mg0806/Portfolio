import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Message failed to send.");
      }

      setForm(initialForm);
      setStatus({ type: "success", message: data.message });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong.",
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/80 px-4 py-8 backdrop-blur-md dark:bg-light/20">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close contact form"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.96 }}
        className="relative z-10 w-full max-w-xl rounded-lg border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark sm:p-5"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-solid border-dark text-dark transition-colors hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark"
          aria-label="Close"
        >
          <span className="block h-0.5 w-5 rotate-45 rounded-sm bg-current" />
          <span className="absolute block h-0.5 w-5 -rotate-45 rounded-sm bg-current" />
        </button>

        <h2 className="pr-12 text-3xl font-bold text-dark dark:text-light sm:text-2xl">
          Let&apos;s work together
        </h2>
        <p className="mt-2 text-sm font-medium text-dark/70 dark:text-light/70">
          Send a quick note and I&apos;ll reply as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md border border-solid border-dark/30 bg-light p-3 text-dark outline-none transition-colors focus:border-primary dark:border-light/40 dark:bg-dark dark:text-light"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
            <div>
              <label htmlFor="email" className="mb-2 block font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-solid border-dark/30 bg-light p-3 text-dark outline-none transition-colors focus:border-primary dark:border-light/40 dark:bg-dark dark:text-light"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block font-semibold">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-md border border-solid border-dark/30 bg-light p-3 text-dark outline-none transition-colors focus:border-primary dark:border-light/40 dark:bg-dark dark:text-light"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-md border border-solid border-dark/30 bg-light p-3 text-dark outline-none transition-colors focus:border-primary dark:border-light/40 dark:bg-dark dark:text-light"
              required
            />
          </div>

          {status.message ? (
            <p
              className={`text-sm font-semibold ${
                status.type === "error"
                  ? "text-red-600"
                  : "text-primary dark:text-primaryDark"
              }`}
            >
              {status.message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status.type === "loading"}
            className="w-full rounded-lg border border-solid border-dark bg-dark px-6 py-3 text-lg font-semibold text-light transition-colors hover:bg-light hover:text-dark disabled:cursor-not-allowed disabled:opacity-70 dark:border-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light"
          >
            {status.type === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactModal;
