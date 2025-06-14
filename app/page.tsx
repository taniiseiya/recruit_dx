// 変更後（相対パスに変更）
import CaseStudies from './components/CaseStudies';


import { Plus, Check } from "lucide-react";
export default function Home() {
  return (
    <div>
      {/* ファーストビュー */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center py-24 px-4 bg-[#1666e2]">
  <p className="text-white text-lg md:text-xl mb-4 text-center font-semibold tracking-wide pop-fade-in pop-fade-in-delay-1">
    ワンストップで"採用担当1人分"を丸ごとサポート
  </p>
  <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-8 leading-tight pop-fade-in pop-fade-in-delay-2">
    採用フルサポートONE
  </h1>
  <div className="h-24 w-0.5 bg-white mx-auto my-6 relative overflow-hidden pop-fade-in pop-fade-in-delay-3">
    <div className="absolute top-0 left-0 w-full h-full bg-white animate-vertical-line"></div>
  </div>
  <div className="flex items-center gap-2 mt-8 mb-4 pop-fade-in pop-fade-in-delay-3">
    <span className="text-white flex items-center gap-2 text-xl">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M2 30C8 23 17 19 34 19C26 22 19 26 14 34" stroke="#fff" strokeWidth="2" />
      </svg>
      <span className="font-bold">ブルートラック株式会社</span>
    </span>
  </div>
</section>

<section className="challenges-section">
  <div className="challenges-container">
    {/* タイトル */}
    <div className="challenges-title-wrapper">
      <h2 className="challenges-title">
      こんなお悩み、<br className="sp-only" />
      まだ抱えていませんか？
      </h2>
      <span className="challenges-title-underline"></span>
    </div>

    <div className="challenges-grid">
      {/* --- 1 --- */}
      <div className="challenge-card">
        {/* 上：課題枠 */}
        <div className="challenge-problem">
          <div className="challenge-problem-text">
            ダイレクトリクルーティングを強化したいが、うまく運用できていない
          </div>
          <img
            src="/jpg/1_3.png"
            alt="悩む女性"
            className="challenge-image"
          />
        </div>
        <div className="challenge-arrow"></div> {/* ← ここが三角形 */}
        {/* 下：アンサー枠 */}
        <div className="challenge-solution">
          豊富なスカウト運用実績と業界データを活かし、
          各企業様の採用課題に合わせた最適な媒体選定・運用体制をご提案可能です。<br />
          スカウト送信ノウハウや最新トレンドもご提供します。
        </div>
      </div>

      {/* --- 2 --- */}
      <div className="challenge-card">
        <div className="challenge-problem">
          <div className="challenge-problem-text">
            急に上がった採用目標に対して、採用メンバーが足りていない
          </div>
          <img
            src="/jpg/1_2.png"
            alt="困る男性"
            className="challenge-image"
          />
        </div>
        <div className="challenge-arrow"></div> {/* ← ここが三角形 */}
        <div className="challenge-solution">
          急な体制強化や追加募集にも柔軟に対応。<br />
          採用プロジェクトの設計から日々のオペレーションまで、
          専門チームがスピーディーに伴走し、採用活動の手間を大幅に削減します。
        </div>
      </div>

      {/* --- 3 --- */}
      <div className="challenge-card">
        <div className="challenge-problem">
          <div className="challenge-problem-text">
            採用担当者がおらず、社長・役員が採用をしている
          </div>
          <img
            src="/jpg/1_1.png"
            alt="社長・パソコン操作"
            className="challenge-image"
          />
        </div>
        <div className="challenge-arrow"></div> {/* ← ここが三角形 */}
        <div className="challenge-solution">
          自社内に専任の採用担当がいない場合もご安心ください。<br />
          経験豊富なプロが、設計・運用・改善まで一括サポート。<br />
          経営層の負担を減らし、採用活動を安定して推進します。
        </div>
      </div>
    </div>
  </div>
</section>


{/* サービスの特徴セクション */}
<section className="service-features">
  <div className="features-container">
    {/* タイトル部分 */}
    <div className="features-header">
      <h2 className="features-title">
        サービスの特徴
        <span className="title-accent"></span>
      </h2>
      <p className="features-subtitle">
      採用フルサポートONEは、成長企業向けの「月額制の採用チーム」です。<br />
        設計から運用・改善までほぼすべての業務を代行できます。
      </p>
    </div>

    {/* 3つの特徴カード */}
    <div className="features-grid">
      {/* 設計 */}
      <div className="feature-card">
        <div className="card-header">
          <h3 className="card-title">設計</h3>
        </div>
        <div className="card-content">
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">📝</div>
              <div className="feature-text">
                <span className="feature-label">要件定義</span>
                <span className="feature-label">ペルソナ設定</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✏️</div>
              <div className="feature-text">
                <span className="feature-label">募集文・</span>
                <span className="feature-label">スカウト文の作成</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🗂️</div>
              <div className="feature-text">
                <span className="feature-label">募集媒体の選定</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🏗️</div>
              <div className="feature-text">
                <span className="feature-label">構築</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔍</div>
              <div className="feature-text">
                <span className="feature-label">訴求ポイントの</span>
                <span className="feature-label">洗い出し</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📧</div>
              <div className="feature-text">
                <span className="feature-label">スカウト送信</span>
                <span className="feature-label">スケジュールの提案</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 実行 */}
      <div className="feature-card">
        <div className="card-header">
          <h3 className="card-title">実行</h3>
        </div>
        <div className="card-content">
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">📄</div>
              <div className="feature-text">
                <span className="feature-label">書類選考</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📋</div>
              <div className="feature-text">
                <span className="feature-label">スカウト対象者</span>
                <span className="feature-label">選定と送付</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📅</div>
              <div className="feature-text">
                <span className="feature-label">日程調整</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤝</div>
              <div className="feature-text">
                <span className="feature-label">エージェント</span>
                <span className="feature-label">マネジメント</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📩</div>
              <div className="feature-text">
                <span className="feature-label">応募者からの</span>
                <span className="feature-label">問い合わせ対応</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 振り返り・改善 */}
      <div className="feature-card">
        <div className="card-header">
          <h3 className="card-title">振り返り・改善</h3>
        </div>
        <div className="card-content">
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">💻</div>
              <div className="feature-text">
                <span className="feature-label">オンライン</span>
                <span className="feature-label">定例MTG</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <div className="feature-text">
                <span className="feature-label">数値分析</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💡</div>
              <div className="feature-text">
                <span className="feature-label">改善策の提案</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <div className="feature-text">
                <span className="feature-label">ターゲット見直し</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📝</div>
              <div className="feature-text">
                <span className="feature-label">募集文・</span>
                <span className="feature-label">スカウト文リライト</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




{/* 導入までの流れセクション */}
<section className="flow-section">
  <div className="flow-container">
  <div className="features-header">
      <h2 className="features-title">
      導入までの流れ
        <span className="title-accent"></span>
      </h2>
      <p className="features-subtitle">
      最短で5営業日から支援開始できます！
      </p>
    </div>

    <div className="flow-timeline">
      {/* STEP1 */}
      <div className="flow-step">
        <div className="step-content">
          <div className="step-number">
            <span>STEP</span>
            <span>1</span>
          </div>
          <div className="step-info">
            <h3 className="step-title">プラン確認・お申込み</h3>
            <p className="step-description">
              内容や運用方法の確認後、担当コンサルタントにて対応します。
            </p>
          </div>
        </div>
      </div>

      {/* STEP2 */}
      <div className="flow-step">
        <div className="step-content">
          <div className="step-number">
            <span>STEP</span>
            <span>2</span>
          </div>
          <div className="step-info">
            <h3 className="step-title">スケジュール等のご確認</h3>
            <p className="step-description">
              ご利用開始までの全体スケジュール・各工程の流れをご案内します。システムのログイン情報やご担当者様との連絡方法も確認します。
            </p>
          </div>
        </div>
      </div>

      {/* STEP3 */}
      <div className="flow-step">
        <div className="step-content">
          <div className="step-number">
            <span>STEP</span>
            <span>3</span>
          </div>
          <div className="step-info">
            <h3 className="step-title">基本情報のご提供</h3>
            <p className="step-description">
              ご担当者様に会社情報や求人情報をご記載・ご提出。ご不明点、ご要望は専任コンサルタントにご記入いただけます。その後、内容をもとにEntry Pocket側で初期設定作業を進行します。
            </p>
          </div>
        </div>
      </div>

      {/* STEP4 */}
      <div className="flow-step">
        <div className="step-content">
          <div className="step-number">
            <span>STEP</span>
            <span>4</span>
          </div>
          <div className="step-info">
            <h3 className="step-title">デザイン・求人票公開ご確認</h3>
            <p className="step-description">
              初期設定が完了したら、求人票・スカウトメッセージ・デザインなどの最終チェックを実施し、ご要望に応じて修正・調整を行います。
            </p>
          </div>
        </div>
      </div>

      {/* STEP5 */}
      <div className="flow-step flow-step-last">
        <div className="step-content">
          <div className="step-number step-number-complete">
            <span>STEP</span>
            <span>5</span>
          </div>
          <div className="step-info">
            <h3 className="step-title">ご利用開始</h3>
            <p className="step-description">
              全ての準備が完了しましたら、いよいよご利用開始となります。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="flow-footer-notes">
      <p>※ご支援開始日については、お客様とご相談の上で決定します。</p>
      <p>※お受けできるプロジェクト数には限りがございます。</p>
    </div>
  </div>
</section>


{/* 導入事例セクション */}
<CaseStudies />



    <section className="bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="features-header">
      <h2 className="features-title">
      プラン
        <span className="title-accent"></span>
      </h2>
      <p className="features-subtitle">
      「人件費、採用コスト、育成コスト、マネジメントコスト、離職コスト…」社内人事を雇うことで発生するこれらのコストはすべて無し！
      </p>
    </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto">
          <div className="bg-blue-400 rounded-t-3xl px-8 py-6">
            <h2 className="text-white text-2xl font-bold text-center">
              採用フルサポートONE
            </h2>
          </div>
          <div className="bg-white rounded-b-3xl border-4 border-blue-400 border-t-0 px-8 py-8">
            <div className="text-center mb-8">
              <div className="mb-6">
                <div className="flex items-end justify-center gap-2">
                  <span className="bg-blue-400 text-white rounded-md px-4 py-2 text-lg font-bold">月額</span>
                  <span className="text-5xl font-bold text-gray-900">5</span>
                  <span className="text-2xl font-bold text-gray-900">万円</span>
                  <span className="text-base text-gray-500 ml-2">(税別)</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-700 bg-gray-50 rounded-lg py-3 px-4 inline-flex">
                <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <Plus className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-medium">初期費用 5万円</span>
                <span className="text-gray-600 text-sm">(税別)</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  成功報酬は1人採用につき稼働3ヶ月目で3万円
                </span>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  ご請求は1ヶ月単位で、月末締め・翌月末支払い。初月のみ日割り計算となります。
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="button-container">
      {/* 左側のボタン */}
      <div className="button-wrapper">
        <div className="label label-light-blue">3分で「採用フルサポートONE」がわかる!!</div>
        <a href="/document-request" className="button button-dark-blue">
          <div className="thumbnail">
            <div className="thumbnail-placeholder"></div>
          </div>
          <span className="button-text">資料をダウンロード</span>
          <span className="arrow">＞</span>
        </a>
      </div>

      {/* 右側のボタン */}
      <div className="button-wrapper">
        <div className="label label-navy">相談無料！採用のお悩みを伺います！</div>
        <a href="https://timerex.net/s/taniseiya613/1d840290" className="button button-bright-blue">
          <span className="button-text">オンライン採用相談</span>
          <span className="arrow">＞</span>
        </a>
      </div>
    </div>
    </section>

{/* Contact Header Section */}
<section className="contact-header">
  <div className="contact-container">
    <div className="phone-section">
      <div className="phone-label">電話</div>
      <a href="tel:050-1722-0368" className="phone-number">
        <svg className="phone-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" fill="white"/>
        </svg>
        050-1722-0368
      </a>
      <div className="phone-hours">10:00－18:00</div>
    </div>
    <div className="email-section">
      <div className="email-label">メール</div>
      <a href="/contact" className="email-button">
        <svg className="email-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#0099cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 6l-10 7L2 6" stroke="#0099cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        問い合わせフォーム
      </a>
      <div className="email-note">年中受付</div>
    </div>
  </div>
    {/* フッターメニュー */}
    <div className="footer-menu">
  <a href="/legal/privacy" className="footer-menu-link">個人情報保護</a>
  <span className="footer-menu-separator">｜</span>
  <a href="/legal/privacy-policy" className="footer-menu-link">プライバシーポリシー</a>
  <span className="footer-menu-separator">｜</span>
  <a href="/legal/company" className="footer-menu-link">会社概要</a>
</div>
</section>

{/* フッターセクション */}
<footer className="footer-section">
  <div className="footer-container">
    <p className="footer-copyright">© 2024 採用フルサポートONE. All rights reserved.</p>
  </div>
</footer>




    </div>
  );
}
