"use client";

import { FormEvent, useMemo, useState } from "react";
import styles from "./ConsultationSection.module.css";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  careType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  careType: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!/^\+?[0-9\s()-]{7,20}$/.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.careType.trim()) {
    errors.careType = "Please select a care type.";
  }

  if (!values.message.trim()) {
    errors.message = "Please share a short message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export default function ConsultationSection() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<Record<keyof FormValues, boolean>>({
    fullName: false,
    email: false,
    phone: false,
    careType: false,
    message: false,
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const errors = useMemo(() => validate(values), [values]);
  const hasErrors = Object.keys(errors).length > 0;

  const handleChange = (
    field: keyof FormValues,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleBlur = (field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTouched({
      fullName: true,
      email: true,
      phone: true,
      careType: true,
      message: true,
    });

    if (hasErrors) return;

    setSubmitting(true);
    setSubmitError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        message?: string;
      };
      if (!response.ok || !data.ok) {
        setSubmitError(data.error ?? "Could not submit your request. Please try again.");
        return;
      }

      setSuccessMessage(
        data.message ?? "Thanks, your request has been received.",
      );
      setValues(initialValues);
      setTouched({
        fullName: false,
        email: false,
        phone: false,
        careType: false,
        message: false,
      });
    } catch {
      setSubmitError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldError = (field: keyof FormValues) => (touched[field] ? errors[field] : undefined);

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.left}>
          <h2>
            Get personalised
            <br />
            <span>home care</span> today
          </h2>
          <p>
            Begin your care journey with support tailored to your needs. We&apos;ll create a
            personalised plan and match you with a trusted carer so you feel safe and
            supported at home.
          </p>

          <div className={styles.photoStrip}>
            <div className={`${styles.photo} ${styles.photoOne}`} />
            <div className={`${styles.photo} ${styles.photoTwo}`} />
          </div>
        </div>

        <div className={styles.formCard}>
          <h3>✦ BOOK A FREE CONSULTATION ✦</h3>
          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="fullName">Full name</label>
              <input
                id="fullName"
                type="text"
                placeholder="eg. John Wick"
                value={values.fullName}
                onChange={(event) => handleChange("fullName", event)}
                onBlur={() => handleBlur("fullName")}
                aria-invalid={Boolean(fieldError("fullName"))}
              />
              {fieldError("fullName") && <p className={styles.error}>{fieldError("fullName")}</p>}
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="eg. john@example.com"
                value={values.email}
                onChange={(event) => handleChange("email", event)}
                onBlur={() => handleBlur("email")}
                aria-invalid={Boolean(fieldError("email"))}
              />
              {fieldError("email") && <p className={styles.error}>{fieldError("email")}</p>}
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                type="tel"
                placeholder="eg. +44 7123 456 789"
                value={values.phone}
                onChange={(event) => handleChange("phone", event)}
                onBlur={() => handleBlur("phone")}
                aria-invalid={Boolean(fieldError("phone"))}
              />
              {fieldError("phone") && <p className={styles.error}>{fieldError("phone")}</p>}
            </div>

            <div className={styles.field}>
              <label htmlFor="careType">Care type</label>
              <select
                id="careType"
                value={values.careType}
                onChange={(event) => handleChange("careType", event)}
                onBlur={() => handleBlur("careType")}
                aria-invalid={Boolean(fieldError("careType"))}
              >
                <option value="">Select service</option>
                <option value="home-care">Home care</option>
                <option value="live-in-care">Live-in care</option>
                <option value="respite-care">Respite care</option>
              </select>
              {fieldError("careType") && <p className={styles.error}>{fieldError("careType")}</p>}
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us what support you need"
                value={values.message}
                onChange={(event) => handleChange("message", event)}
                onBlur={() => handleBlur("message")}
                aria-invalid={Boolean(fieldError("message"))}
              />
              {fieldError("message") && <p className={styles.error}>{fieldError("message")}</p>}
            </div>

            <button type="submit" className={styles.submitBtn} disabled={submitting}>
              {submitting ? "Submitting..." : "Request Consultation"}
            </button>

            {submitError && <p className={styles.error}>{submitError}</p>}
            {successMessage && <p className={styles.success}>{successMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
