import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";
import { contactSchema, type ContactFormData } from "../schemas/contactSchema";

type Status = "idle" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(data: ContactFormData) {
    console.log("Contact form submitted:", data);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setStatus("success");
        reset();
        resolve();
      }, 800);
    });
  }

  function onError() {
    setStatus("error");
    setTimeout(() => setStatus("idle"), 3000);
  }

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:bg-slate-800 dark:text-white";

  return (
    <>
      <Helmet>
        <title>Contact Us | nexus-app</title>
        <meta name="description" content="Get in touch with the nexus-app team. We'd love to hear from you." />
      </Helmet>

      <div className="flex-1 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-lg">
          <SectionTitle
            title="Contact Us"
            subtitle="Have a question? We'd love to hear from you."
          />

          {status === "success" ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-800 dark:bg-emerald-950/50">
              <svg className="mx-auto mb-3 h-12 w-12 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">
                Message sent successfully!
              </p>
              <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-500">
                We will get back to you soon.
              </p>
              <Button variant="outline" size="sm" className="mt-5" onClick={() => setStatus("idle")}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit, onError)} className="flex flex-col gap-5">
              {status === "error" && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/50 dark:text-red-400">
                  Please fix the errors below and try again.
                </div>
              )}

              {/* Name */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-900 dark:text-slate-200">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("name")}
                  className={`${inputBase} ${
                    errors.name ? "border-red-400 focus:border-red-500 dark:border-red-600" : "border-slate-200 focus:border-violet-500 dark:border-slate-700"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 dark:text-red-400">
                    <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-900 dark:text-slate-200">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  {...register("email")}
                  className={`${inputBase} ${
                    errors.email ? "border-red-400 focus:border-red-500 dark:border-red-600" : "border-slate-200 focus:border-violet-500 dark:border-slate-700"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 dark:text-red-400">
                    <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-900 dark:text-slate-200">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  {...register("subject")}
                  className={`${inputBase} ${
                    errors.subject ? "border-red-400 focus:border-red-500 dark:border-red-600" : "border-slate-200 focus:border-violet-500 dark:border-slate-700"
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 dark:text-red-400">
                    <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-900 dark:text-slate-200">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us more about your inquiry..."
                  {...register("message")}
                  className={`${inputBase} resize-none ${
                    errors.message ? "border-red-400 focus:border-red-500 dark:border-red-600" : "border-slate-200 focus:border-violet-500 dark:border-slate-700"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 dark:text-red-400">
                    <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full mt-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
