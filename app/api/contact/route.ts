// app/api/contact/route.ts
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
// メール送信設定（Xserver用）
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'sv15051.xserver.jp',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'info@bluetruck.jp',
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    console.log('===== デバッグ情報 =====');
    console.log('SMTP_HOST:', process.env.SMTP_HOST);
    console.log('SMTP_USER:', process.env.SMTP_USER);
    console.log('SMTP_TO:', process.env.SMTP_TO);
    console.log('受信データ:', data);

    // バリデーション
    if (!data.companyName || !data.email || !data.phone) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // 検討時期の表示を変換
    const getPeriodText = (period: string) => {
      const periodMap: { [key: string]: string } = {
        'immediate': 'すぐに導入したい',
        '1month': '1ヶ月以内',
        '3months': '3ヶ月以内',
        '6months': '6ヶ月以内',
        'undecided': '未定'
      };
      return periodMap[period] || '未選択';
    };

    // 管理者向けメール（シンプル版）
    const adminContent = `
資料ダウンロード申込

会社名: ${data.companyName}
お名前: ${data.lastName} ${data.firstName}
メール: ${data.email}
電話: ${data.phone}
検討時期: ${getPeriodText(data.considerationPeriod)}
相談希望: ${data.consultationRequest === 'yes' ? 'はい' : 'いいえ'}
問い合わせ: ${data.inquiry || 'なし'}

送信時刻: ${new Date().toLocaleString('ja-JP')}
`;

    console.log('管理者向けメール送信開始...');
    console.log('送信先:', process.env.SMTP_TO || 'info@bluetruck.jp');
    
    // 管理者向けメール
    const adminResult = await transporter.sendMail({
      from: 'info@bluetruck.jp',
      to: 'info@bluetruck.jp',
      subject: `資料DL申込 ${data.companyName}`,
      text: adminContent,
    });
    
    console.log('管理者メール送信結果:', adminResult);

    // ダウンロードURLとメール内容の設定
    const downloadUrl = `${request.headers.get('origin')}/download/recruitment-support-one-guide.pdf`;
    const meetingUrl = 'https://timerex.net/s/taniseiya613/20ef2bc3';
    
    // ユーザー向け自動返信メール（デザイン性重視・簡潔版）
    const autoReplyContent = `
${data.lastName} ${data.firstName} 様

資料請求ありがとうございます。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
　📄 資料ダウンロード
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

▼ 今すぐダウンロード
${downloadUrl}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
　🎯 こんなお悩みありませんか？
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

　☑ 採用コストが高すぎる
　☑ 良い人材が集まらない  
　☑ すぐに離職されてしまう

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
　💡 無料相談で解決できます
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${data.companyName}様の採用課題を
30分の無料相談で診断します。

▼ 相談予約はこちら（残り3枠）
${meetingUrl}

【相談後の成果】
✅ 採用コスト40%削減
✅ 応募数2.5倍増加
✅ 定着率60%改善

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

*********************************
ブルートラック株式会社
高桑　誠也
〒160-0023
東京都新宿区西新宿3丁目3番13号西新宿水間ビル2F
TEL ： 050-1722-0368
Mail info@bluetruck.jp
*********************************
    `;

    // ユーザー向けメール送信
    console.log('ユーザー向けメール送信開始...');
    const userResult = await transporter.sendMail({
      from: '"ブルートラック株式会社" <info@bluetruck.jp>',
      to: data.email,
      subject: `【${data.companyName}様】採用課題を解決する資料をお送りします`,
      text: autoReplyContent,
      html: autoReplyContent.replace(/\n/g, '<br>'),
    });
    
    console.log('ユーザーメール送信結果:', userResult);

    return NextResponse.json({
      success: true,
      message: '送信が完了しました',
    });

  } catch (error) {
    console.error('エラー詳細:', error);
    return NextResponse.json(
      { error: 'メール送信に失敗しました' },
      { status: 500 }
    );
  }
}