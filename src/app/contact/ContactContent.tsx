"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { VUMeterDivider } from "@/components/VUMeterDivider";

const interestOptions = [
  { id: "ai-products", label: "AI Products (Studio)" },
  { id: "business-systems", label: "Business Systems" },
  { id: "digital-growth", label: "Digital Growth" },
  { id: "lead-generation", label: "Lead Generation" },
  { id: "something-else", label: "Something else" },
];

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interests: [] as string[],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleInterestChange = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter((i) => i !== id)
        : [...prev.interests, id],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Nav />
      <main className="pt-20 pb-32">
        {/* Hero */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-text-primary mb-6">
                Start a Conversation
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="text-lg md:text-xl text-text-secondary"
              >
                Tell us what you&apos;re building.
              </motion.p>
            </div>
          </div>
        </section>

        <VUMeterDivider />

        {/* Form Section */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <div className="max-w-xl">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="py-12"
                >
                  <h2 className="text-2xl md:text-3xl font-medium text-text-primary mb-4">
                    Thanks for reaching out.
                  </h2>
                  <p className="text-lg text-text-secondary">
                    We&apos;ll be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
                  className="space-y-6"
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm text-text-secondary mb-2">
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-bg-elevated border border-bg-subtle rounded-sm px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-text-secondary mb-2">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-bg-elevated border border-bg-subtle rounded-sm px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors duration-200"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm text-text-secondary mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-bg-elevated border border-bg-subtle rounded-sm px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors duration-200"
                    />
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="block text-sm text-text-secondary mb-3">
                      What are you looking for? <span className="text-accent">*</span>
                    </label>
                    <div className="space-y-2">
                      {interestOptions.map((option) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <div
                            className={`w-5 h-5 rounded-sm border flex items-center justify-center transition-colors duration-200 ${
                              formData.interests.includes(option.id)
                                ? "bg-accent border-accent"
                                : "border-bg-subtle group-hover:border-text-tertiary"
                            }`}
                          >
                            {formData.interests.includes(option.id) && (
                              <svg
                                className="w-3 h-3 text-bg-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(option.id)}
                            onChange={() => handleInterestChange(option.id)}
                            className="sr-only"
                          />
                          <span className="text-text-primary">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm text-text-secondary mb-2">
                      Tell us more <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="What's the problem? What does success look like?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-bg-elevated border border-bg-subtle rounded-sm px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                    />
                  </div>

                  {/* Error Message */}
                  {status === "error" && (
                    <p className="text-red-400 text-sm">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading" || formData.interests.length === 0}
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent text-bg-primary font-medium rounded-sm hover:bg-accent-hover transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </motion.form>
              )}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <hr className="border-t border-bg-subtle opacity-30" />
        </div>

        {/* Email Alternative */}
        <section className="py-16 md:py-20 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <div className="max-w-xl">
              <p className="text-text-secondary mb-2">Prefer email?</p>
              <a
                href="mailto:hello@volumesystems.io"
                className="text-accent hover:text-accent-hover transition-colors duration-200 text-lg"
              >
                hello@volumesystems.io
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
