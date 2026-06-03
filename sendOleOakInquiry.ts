import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));
    const { name, email, phone, message } = body;

    await base44.email.send({
      to: "peri@triplepVenture.com",
      subject: `🌳 New Investment Inquiry — Ole Oak Village${name ? ` from ${name}` : ""}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f6; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #1a3c2a, #2d6a4f); padding: 28px; border-radius: 10px; text-align: center; margin-bottom: 28px;">
            <h1 style="color: white; margin: 0; font-size: 1.5rem;">🌳 New Investment Inquiry</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-family: sans-serif;">Ole Oak Village — Belleview, FL</p>
          </div>
          <div style="background: white; border-radius: 10px; padding: 24px; margin-bottom: 20px;">
            <p style="margin: 0 0 12px; font-family: sans-serif;"><strong>Name:</strong> ${name || "Not provided"}</p>
            <p style="margin: 0 0 12px; font-family: sans-serif;"><strong>Email:</strong> ${email || "Not provided"}</p>
            <p style="margin: 0 0 12px; font-family: sans-serif;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
          </div>
          ${message ? `
          <div style="background: white; border-left: 4px solid #2d6a4f; padding: 20px 24px; border-radius: 8px;">
            <p style="margin: 0 0 8px; font-weight: bold; color: #2d6a4f; font-family: sans-serif;">Message:</p>
            <p style="margin: 0; color: #333; line-height: 1.7; font-family: sans-serif;">${message}</p>
          </div>` : ""}
          <p style="color: #aaa; font-size: 0.8rem; margin-top: 24px; text-align: center; font-family: sans-serif;">Sent from the Ole Oak Village investment page</p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});
