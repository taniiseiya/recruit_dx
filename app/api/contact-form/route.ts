// app/api/contact-form/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'; // 追加

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // --- メール送信処理 ---
    const transporter = nodemailer.createTransport({
      host: 'sv15051.xserver.jp', // XサーバーSMTP
      port: 587,
      secure: false, // 465ならtrue、587ならfalse
      auth: {
        user: 'info@bluetruck.jp',      // Xサーバーのメールアドレス
        pass: 'earn768GOER383',         // 上記メールのパスワード
      },
    });

    const mailOptions = {
      from: '"採用フルサポートONE" <info@bluetruck.jp>', // 差出人
      to: 'info@bluetruck.jp',                             // 受信先（必要に応じて複数やユーザー入力値に変更可）
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

    // 実際に送信
    await transporter.sendMail(mailOptions);

    // レスポンス
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
