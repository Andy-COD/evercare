import { NextResponse } from "next/server";

type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  careType: string;
  message: string;
};

function validatePayload(payload: ContactPayload) {
  if (!payload.fullName?.trim()) return "Full name is required.";
  if (!payload.email?.trim()) return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email))
    return "Invalid email address.";
  if (!payload.phone?.trim()) return "Phone number is required.";
  if (!payload.careType?.trim()) return "Care type is required.";
  if (!payload.message?.trim() || payload.message.trim().length < 10)
    return "Message is too short.";
  return null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const error = validatePayload(body);
    if (error) {
      return NextResponse.json({ ok: false, error }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ?? "Ever Care <onboarding@resend.dev>";

    if (apiKey && toEmail) {
      const emailBody = `
New Consultation Request

Name: ${body.fullName}
Email: ${body.email}
Phone: ${body.phone}
Care type: ${body.careType}

Message:
${body.message}
      `.trim();

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          subject: `New consultation request from ${body.fullName}`,
          text: emailBody,
        }),
      });

      if (!response.ok) {
        const details = await response.text();
        return NextResponse.json(
          { ok: false, error: "Email provider failed.", details },
          { status: 502 },
        );
      }

      return NextResponse.json({ ok: true, sent: true });
    }

    console.info("Contact form (no email provider configured):", body);
    return NextResponse.json({
      ok: true,
      sent: false,
      message:
        "Request received. Configure RESEND_API_KEY and CONTACT_TO_EMAIL to send mail.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }
}
