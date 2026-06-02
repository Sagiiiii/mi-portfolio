export const prerender = false;

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'Faltan campos requeridos.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const smtpUser = import.meta.env.SMTP_USER;
    const smtpPass = import.meta.env.SMTP_PASS;
    const contactTo = import.meta.env.CONTACT_TO || smtpUser || 'sagitaforever64@gmail.com';

    if (!smtpUser || !smtpPass) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Configuración de correo no disponible.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"Portfolio Sagiii.dev" <${smtpUser}>`,
      to: contactTo,
      replyTo: email,
      subject: `[Sagiii.dev] ${subject || 'Nuevo mensaje de contacto'}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#1E1E1E;color:#EFEFEF;border-radius:12px;overflow:hidden">
          <div style="background:#E8651A;padding:20px 24px">
            <h2 style="margin:0;color:#fff;font-size:18px">🦊 Nuevo mensaje desde Sagiii.dev</h2>
          </div>
          <div style="padding:24px">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#E8651A">${email}</a></p>
            <p><strong>Asunto:</strong> ${subject || '(sin asunto)'}</p>
            <hr style="border-color:#333;margin:16px 0"/>
            <p><strong>Mensaje:</strong></p>
            <p style="white-space:pre-wrap;background:#252525;padding:16px;border-radius:8px;border-left:3px solid #E8651A">${message}</p>
          </div>
          <div style="background:#141414;padding:12px 24px;font-size:12px;color:#999">
            Enviado desde sagiii.dev · ${new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' })}
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[contact API]', err);
    return new Response(JSON.stringify({ ok: false, error: 'Error al enviar el mensaje.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
