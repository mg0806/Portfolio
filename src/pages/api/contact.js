import nodemailer from "nodemailer";

const requiredFields = ["name", "email", "phone", "message"];

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const missingConfig =
    !process.env.GMAIL_USER ||
    !process.env.GMAIL_APP_PASSWORD ||
    !process.env.CONTACT_RECEIVER_EMAIL;

  if (missingConfig) {
    return res.status(500).json({
      message: "Email service is not configured.",
    });
  }

  const body = req.body || {};
  const hasMissingField = requiredFields.some(
    (field) => !String(body[field] || "").trim()
  );

  if (hasMissingField) {
    return res.status(400).json({ message: "Please fill in every field." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const senderName = String(body.name).trim();
  const senderEmail = String(body.email).trim();
  const senderPhone = String(body.phone).trim();
  const message = String(body.message).trim();
  const safeName = escapeHtml(senderName);
  const safeEmail = escapeHtml(senderEmail);
  const safePhone = escapeHtml(senderPhone);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: senderEmail,
      subject: `New portfolio message from ${senderName}`,
      text: [
        `Name: ${senderName}`,
        `Email: ${senderEmail}`,
        `Phone: ${senderPhone}`,
        "",
        message,
      ].join("\n"),
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact email failed:", error);
    return res.status(500).json({
      message: "Unable to send your message right now.",
    });
  }
}
