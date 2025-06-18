"use client";

import { useState } from "react";
import { FeedbackFormData } from "../model/types";
import styles from "./FeedbackForm.module.css";

export function FeedbackForm() {
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const [isSending, setIsSending] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch(
        "https://api.test.cyberia.studio/api/v1/feedbacks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.error("Ошибка валидации:", result.errors);
        alert("Ошибка при отправке:\n" + JSON.stringify(result.errors));
        return;
      }

      alert("Форма успешно отправлена!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        agree: false,
      });
    } catch (error) {
      console.error("Ошибка сети:", error);
      alert("Произошла ошибка при отправке формы.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className={styles.formSection}>
      <div className={styles.aboutForm}>
        <img
          src="\logo\Group_1347.png"
          alt="about_Project"
          className={styles.imgForm}
        />
        <p className={styles.formTitle}>
          Расскажите
          <br />о вашем проекте:
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя*"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            autoComplete="email"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон*"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            autoComplete="tel"
          />
        </div>

        <textarea
          name="message"
          placeholder="Сообщение*"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
        />

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                agree: e.target.checked,
              }))
            }
          />
          Согласие на обработку персональных данных
        </label>

        <button
          type="submit"
          className={styles.submit}
          disabled={isSending || !formData.agree}
        >
          {isSending ? "Отправка..." : "Обсудить проект"}
        </button>
      </form>
    </div>
  );
}
