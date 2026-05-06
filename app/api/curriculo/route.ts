import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.formData();

  const nome = data.get("nome") as string;
  const email = data.get("email") as string;
  const telefone = data.get("telefone") as string;
  const cargo = data.get("cargo") as string;
  const mensagem = data.get("mensagem") as string;
  const file = data.get("curriculo") as File | null;

  if (!nome || !email || !telefone || !file) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    await resend.emails.send({
      from: "Site Multylog <onboarding@resend.dev>",
      to: "luispenna18@gmail.com",
      replyTo: email,
      subject: `Novo currículo — ${nome}${cargo ? ` (${cargo})` : ""}`,
      html: `
        <h2 style="color:#CC0000;font-family:sans-serif;">Novo Envio de Currículo</h2>
        <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%;max-width:520px;">
          <tr><td style="padding:8px 0;color:#888;width:140px;">Nome</td><td style="padding:8px 0;font-weight:600;">${nome}</td></tr>
          <tr><td style="padding:8px 0;color:#888;">E-mail</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#888;">Telefone</td><td style="padding:8px 0;">${telefone}</td></tr>
          ${cargo ? `<tr><td style="padding:8px 0;color:#888;">Cargo de interesse</td><td style="padding:8px 0;">${cargo}</td></tr>` : ""}
          ${mensagem ? `<tr><td style="padding:8px 0;color:#888;vertical-align:top;">Mensagem</td><td style="padding:8px 0;">${mensagem}</td></tr>` : ""}
        </table>
        <hr style="margin:24px 0;border:none;border-top:1px solid #eee;">
        <p style="font-family:sans-serif;font-size:13px;color:#aaa;">Currículo anexado. Enviado via formulário em multylog.com.br</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("RESEND ERROR:", JSON.stringify(err, null, 2));
    return NextResponse.json({ error: "Erro ao enviar e-mail.", detail: String(err) }, { status: 500 });
  }
}
