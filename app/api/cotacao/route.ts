import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { nome, email, empresa, telefone, equipamento, mensagem, type } = body;

  if (!nome || !email || !empresa || !equipamento || !telefone) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
  }

  const isLocacao = type === "locacao";
  const subjectLabel = isLocacao ? "Nova solicitação de locação" : "Nova solicitação de compra";
  const titleLabel = isLocacao ? "Nova Solicitação de Locação" : "Nova Solicitação de Compra";

  try {
    await resend.emails.send({
      from: "Site Multylog <luispenna@multylog.com.br>",
      to: ["admcomercial@multylog.com.br", "luispenna@multylog.com.br"],
      replyTo: email,
      subject: `${subjectLabel} — ${nome} (${empresa})`,
      html: `
        <h2 style="color:#CC0000;font-family:sans-serif;">${titleLabel}</h2>
        <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%;max-width:520px;">
          <tr><td style="padding:8px 0;color:#888;width:140px;">Nome</td><td style="padding:8px 0;font-weight:600;">${nome}</td></tr>
          <tr><td style="padding:8px 0;color:#888;">Empresa</td><td style="padding:8px 0;font-weight:600;">${empresa}</td></tr>
          <tr><td style="padding:8px 0;color:#888;">E-mail</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#888;">Telefone</td><td style="padding:8px 0;">${telefone}</td></tr>
          <tr><td style="padding:8px 0;color:#888;">Equipamento</td><td style="padding:8px 0;">${equipamento}</td></tr>
          ${mensagem ? `<tr><td style="padding:8px 0;color:#888;vertical-align:top;">Mensagem</td><td style="padding:8px 0;">${mensagem}</td></tr>` : ""}
        </table>
        <hr style="margin:24px 0;border:none;border-top:1px solid #eee;">
        <p style="font-family:sans-serif;font-size:13px;color:#aaa;">Enviado via formulário em multylog.com.br</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("RESEND ERROR:", JSON.stringify(err, null, 2));
    return NextResponse.json({ error: "Erro ao enviar e-mail.", detail: String(err) }, { status: 500 });
  }
}
