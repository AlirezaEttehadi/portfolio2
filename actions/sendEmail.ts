"use server";

import { createElement } from "react";
import { render } from "@react-email/render";

import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resendServiceURLWithProxy =
  "https://corsproxy.io/?" +
  encodeURIComponent("https://api.resend.com/emails");

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const html = render(
    createElement(ContactFormEmail, {
      message,
      senderEmail,
    })
  );

  const body = {
    from: "Contact Form <onboarding@resend.dev>",
    to: "alireza.ettehadi9595@gmail.com",
    subject: "Message from contact form",
    reply_to: senderEmail,
    html,
  };

  let data;
  try {
    const response = await fetch(resendServiceURLWithProxy, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
    });
    data = await response.json();
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
