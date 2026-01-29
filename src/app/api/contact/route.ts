import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, email, company, interests, message } = body;

    // Validate required fields
    if (!name || !email || !interests?.length || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Format interests for email
    const interestLabels: Record<string, string> = {
      "ai-products": "AI Products (Studio)",
      "business-systems": "Business Systems",
      "digital-growth": "Digital Growth",
      "lead-generation": "Lead Generation",
      "something-else": "Something else",
    };

    const formattedInterests = interests
      .map((i: string) => interestLabels[i] || i)
      .join(", ");

    // Build email content
    const emailHtml = `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 12px;">New Inquiry from ${name}</h2>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 8px 0; color: #666; width: 140px; vertical-align: top;">Name</td>
            <td style="padding: 8px 0; color: #333;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; vertical-align: top;">Email</td>
            <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #5B8A9A;">${email}</a></td>
          </tr>
          ${
            company
              ? `<tr>
            <td style="padding: 8px 0; color: #666; vertical-align: top;">Company</td>
            <td style="padding: 8px 0; color: #333;">${company}</td>
          </tr>`
              : ""
          }
          <tr>
            <td style="padding: 8px 0; color: #666; vertical-align: top;">Looking for</td>
            <td style="padding: 8px 0; color: #333;">${formattedInterests}</td>
          </tr>
        </table>

        <div style="background: #f9f9f9; padding: 16px; border-radius: 4px; margin-top: 20px;">
          <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">Message</p>
          <p style="margin: 0; color: #333; white-space: pre-wrap;">${message}</p>
        </div>

        <p style="margin-top: 24px; font-size: 12px; color: #999;">
          Sent from volumesystems.io contact form
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "Volume Systems <notifications@volumesystems.io>",
      to: "hello@volumesystems.io",
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
