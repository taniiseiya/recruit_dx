// app/api/contact-form/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // 開発環境用：コンソールに出力
    console.log('お問い合わせ受信:', {
      会社名: data.companyName,
      お名前: `${data.lastName} ${data.firstName}`,
      Email: data.email,
      電話番号: data.phone,
      お問い合わせ種別: data.inquiryType,
      お問い合わせ内容: data.inquiry,
      送信日時: new Date().toLocaleString('ja-JP')
    });

    // メール送信処理（実装例）
    // 注意：実際のメール送信には以下のいずれかが必要です：
    // 1. Nodemailer + SMTPサーバー情報
    // 2. SendGrid APIキー
    // 3. AWS SES
    // 4. Resend API等

    // Nodemailerを使用する例（要インストール: npm install nodemailer @types/nodemailer）
    /*
    import nodemailer from 'nodemailer';

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: '"採用フルサポートONE" <noreply@bluetruck.jp>',
      to: 'info@bluetruck.jp',
      subject: '【お問い合わせ】採用フルサポートONE',
      text: `
お問い合わせを受信しました。

【お問い合わせ内容】
会社名: ${data.companyName}
お名前: ${data.lastName} ${data.firstName}
Email: ${data.email}
電話番号: ${data.phone}
お問い合わせ種別: ${data.inquiryType}

【内容】
${data.inquiry}

送信日時: ${new Date().toLocaleString('ja-JP')}
      `,
    };

    await transporter.sendMail(mailOptions);
    */

    // 開発環境では成功レスポンスを返す
    return NextResponse.json({
      success: true,
      message: '送信が完了しました',
      data: {
        timestamp: new Date().toISOString(),
        ...data
      }
    });

  } catch (error) {
    console.error('エラー発生:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'サーバーエラーが発生しました' 
      },
      { status: 500 }
    );
  }
}