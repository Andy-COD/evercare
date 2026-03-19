import { NextResponse } from "next/server";
import { Resend } from "resend";
import ConsultationEmail from "@/components/emails/ConsultaionTemplate";

type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  careType: string;
  message: string;
};

type ApiResponse = {
  ok: boolean;
  error?: string;
  message?: string;
  sent?: boolean;
};

function isContactPayload(value: unknown): value is ContactPayload {
  if (!value || typeof value !== "object") {
    return false;
  }

  const payload = value as Record<string, unknown>;
  return (
    typeof payload.fullName === "string" &&
    typeof payload.email === "string" &&
    typeof payload.phone === "string" &&
    typeof payload.careType === "string" &&
    typeof payload.message === "string"
  );
}

function validatePayload(payload: ContactPayload) {
  if (!payload.fullName.trim()) return "Full name is required.";
  if (!payload.email.trim()) return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email))
    return "Invalid email address.";
  if (!payload.phone.trim()) return "Phone number is required.";
  if (!/^\+?[0-9\s()-]{7,20}$/.test(payload.phone))
    return "Invalid phone number.";
  if (!payload.careType.trim()) return "Care type is required.";
  if (!payload.message.trim() || payload.message.trim().length < 10)
    return "Message is too short.";
  return null;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as unknown;
    if (!isContactPayload(payload)) {
      return NextResponse.json<ApiResponse>(
        { ok: false, error: "Invalid request body." },
        { status: 400 },
      );
    }

    const body = {
      fullName: payload.fullName.trim(),
      email: payload.email.trim(),
      phone: payload.phone.trim(),
      careType: payload.careType.trim(),
      message: payload.message.trim(),
    };

    const error = validatePayload(body);
    if (error) {
      return NextResponse.json<ApiResponse>({ ok: false, error }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;
    const contactFromEmail =
      process.env.CONTACT_FROM_EMAIL ?? "Ever Care <onboarding@resend.dev>";

    if (!resendApiKey || !contactToEmail) {
      console.warn("Contact email delivery is not configured.", {
        fullName: body.fullName,
        email: body.email,
        phone: body.phone,
        careType: body.careType,
      });

      return NextResponse.json<ApiResponse>({
        ok: true,
        sent: false,
        message:
          "Your request has been received. Email delivery is not configured yet, so the team should review submissions from the server logs.",
      });
    }

    const resend = new Resend(resendApiKey);

    const { error: resendError } = await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      subject: `New Consultation Request from ${body.fullName}`,
      replyTo: body.email,
      react: ConsultationEmail({
        providerName: process.env.PROVIDER_NAME ?? "Dr. Linda S.",
        fullName: body.fullName,
        email: body.email,
        phone: body.phone,
        careType: body.careType,
        message: body.message,
        companyName: process.env.COMPANY_NAME ?? "Ever Care",
      }),
    });

    if (resendError) {
      console.error("Failed to send consultation email.", resendError);
      return NextResponse.json<ApiResponse>(
        { ok: false, error: "We could not send your request right now. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json<ApiResponse>({
      ok: true,
      sent: true,
      message: "Thanks, your consultation request has been sent successfully.",
    });
  } catch {
    return NextResponse.json<ApiResponse>(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }
}
