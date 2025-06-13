'use client';

import { useState } from 'react';

const caseStudies = [
  {
    id: 1,
    company: '株式会社グリーンロジスティクス様',
    category: '物流・倉庫',
    headline: '採用ターゲットの見直しで応募数3倍・工数60%削減を実現',
    metrics: [
      { value: '3倍', label: '応募数' },
      { value: '60%', label: '工数削減' }
    ],
    challenge: '地方倉庫の現場スタッフ募集で、3ヶ月間応募ゼロ。採用コストが月100万円を超え、現場は人手不足で残業が常態化していました。',
    strategy: [
      {
        title: '課題分析',
        content: '求人票を分析したところ、都市部の若年層をターゲットにした内容で、地方の実情とミスマッチが判明。'
      },
      {
        title: '戦略転換',
        content: 'ターゲットを「地元在住の40-50代」に変更。通勤の便利さ、安定性、地域貢献をアピールポイントに。'
      },
      {
        title: '実行施策',
        content: 'Indeed広告の配信エリアを半径30km圏内に絞り込み。地元のフリーペーパーとも連携。'
      }
    ],
    results: '施策開始2週間で応募15名獲得。採用コストは月40万円に削減。現場の残業時間も月平均20時間削減を実現。',
    testimonial: '「まさか2週間でこんなに応募が来るとは...。採用のプロの視点は本当に違いますね」（人事部長）',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=400&q=80'
  },
  {
    id: 2,
    company: '株式会社メディカルブリッジ様',
    category: '医療・介護',
    headline: '医療事務スタッフ採用で定着率向上とコスト50%カット',
    metrics: [
      { value: '50%', label: 'コスト削減' },
      { value: '85%', label: '定着率' }
    ],
    challenge: '月10名採用しても、3ヶ月以内に8名が退職。教育コストが無駄になり、現場の士気も低下していました。',
    strategy: [
      {
        title: '退職者分析',
        content: '退職者面談を実施し、「求人内容と実際の業務のギャップ」が主な原因と特定。'
      },
      {
        title: 'ペルソナ再設計',
        content: '「医療事務経験者」から「接客業経験者で医療に興味がある方」へターゲット変更。'
      },
      {
        title: '求人票改革',
        content: '1日の業務フロー、先輩インタビュー、キャリアパスを詳細に記載。ネガティブ面も正直に開示。'
      }
    ],
    results: '採用後3ヶ月の定着率が30%→85%に改善。教育コストが年間600万円削減。チーム全体の生産性も20%向上。',
    testimonial: '「正直な求人票にしたら、覚悟を持った良い人材が集まるようになりました」（採用担当）',
    image: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=800&h=400&q=80'
  },
  {
    id: 3,
    company: '株式会社テクノフロンティア様',
    category: 'IT・テクノロジー',
    headline: '技術職の応募数ゼロ→10名超へ！ITエンジニア採用の成功例',
    metrics: [
      { value: '10名+', label: '応募獲得' },
      { value: '2名', label: '採用成功' }
    ],
    challenge: '半年間、エンジニア採用に苦戦。大手求人サイトに月50万円投資するも応募ゼロ。開発プロジェクトに遅延が発生。',
    strategy: [
      {
        title: '競合分析',
        content: '同業他社の求人を徹底分析。自社の技術的な強みと成長機会が伝わっていないことが判明。'
      },
      {
        title: 'コンテンツ戦略',
        content: '現役エンジニアと共に求人票を作成。使用技術、開発環境、コードレビュー文化などを具体的に記載。'
      },
      {
        title: 'チャネル最適化',
        content: '大手サイトから撤退し、Wantedly、Forkwell、Twitter採用に切り替え。社内勉強会の様子も発信。'
      }
    ],
    results: '変更後1ヶ月で12名の応募を獲得。そのうち2名のシニアエンジニア採用に成功。採用コストは1/3に削減。',
    testimonial: '「エンジニア目線の求人票にしたら、質の高い応募者が増えました」（CTO）',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=400&q=80'
  },
  {
    id: 4,
    company: '株式会社リーフケアサービス様',
    category: '介護・福祉',
    headline: '介護スタッフ採用のフルアウトソースで現場負担80%減',
    metrics: [
      { value: '80%', label: '負担軽減' },
      { value: '2倍', label: '採用速度' }
    ],
    challenge: '施設長が採用業務に週20時間費やし、本来の施設運営に支障。応募者への返信も3日以上かかる状態。',
    strategy: [
      {
        title: '業務分析',
        content: '採用フローを可視化し、施設長でなくてもできる業務を特定。全体の80%が代行可能と判明。'
      },
      {
        title: '体制構築',
        content: '応募受付、書類選考、日程調整を完全代行。施設長は最終面接のみに集中できる体制に。'
      },
      {
        title: 'スピード改善',
        content: '応募から面接まで平均7日→3日に短縮。応募者の離脱率を50%削減。'
      }
    ],
    results: '施設長の採用業務時間が週20時間→4時間に削減。採用決定率が15%→35%に向上。年間12名の安定採用を実現。',
    testimonial: '「やっと本来の仕事に集中できるようになりました。利用者満足度も上がっています」（施設長）',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&h=400&q=80'
  },
  {
    id: 5,
    company: '株式会社センスワークス様',
    category: '営業・セールス',
    headline: '短期間で営業職5名採用！週次レポート活用でPDCA強化',
    metrics: [
      { value: '5名', label: '採用達成' },
      { value: '45日', label: '採用期間' }
    ],
    challenge: '営業部門の拡大で5名の即戦力が必要。しかし、3ヶ月経っても1名も採用できず、事業計画に遅れが発生。',
    strategy: [
      {
        title: 'データ分析',
        content: '過去の応募データを分析し、応募→面接の転換率が5%と判明。原因は求人票の訴求力不足。'
      },
      {
        title: '週次PDCA',
        content: '毎週月曜日に数値レポートを提出。PV数、応募率、面接設定率を分析し、即座に改善実行。'
      },
      {
        title: 'A/Bテスト',
        content: '求人タイトル、キャッチコピー、写真を週単位でテスト。最も反応の良い組み合わせを特定。'
      }
    ],
    results: 'PDCA開始後、応募数が週3名→週12名に増加。45日間で目標の5名採用を達成。採用単価も40%削減。',
    testimonial: '「数字に基づいた改善提案が素晴らしい。採用が科学的になりました」（人事責任者）',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&h=400&q=80'
  }
];

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  return (
    <>
      {/* 導入事例セクション */}
      <section className="case-section">
        <div className="case-container">
        <div className="features-header">
      <h2 className="features-title">
      採用の成功事例
        <span className="title-accent"></span>
      </h2>
      <p className="features-subtitle">
      データと戦略で採用課題を解決。<br />
      具体的な数字と共に、成功への道筋をご紹介します。
      </p>
    </div>
          

          <div className="case-grid">
            {caseStudies.map((caseStudy) => (
              <div 
                key={caseStudy.id} 
                className="case-card-visual"
                onClick={() => setSelectedCase(caseStudy.id)}
              >
                <div className="case-card-badge">{caseStudy.category}</div>
                <div className="case-card-image-wrapper">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.company}
                    className="case-card-img"
                  />
                  <div className="case-card-overlay"></div>
                </div>
                <div className="case-card-info">
                  <h3 className="case-card-title">{caseStudy.company}</h3>
                  <p className="case-card-subtitle">{caseStudy.headline}</p>
                  <button className="case-card-button">
                    詳しい戦略を見る
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ポップアップ */}
      {selectedCase && (
        <div className="case-popup-overlay" onClick={() => setSelectedCase(null)}>
          <div className="case-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setSelectedCase(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            {(() => {
              const caseData = caseStudies.find(c => c.id === selectedCase);
              if (!caseData) return null;
              
              return (
                <>
                  {/* 左側：会社情報 */}
                  <div className="popup-left">
                    <div className="popup-company-logo">
                      <img src={caseData.image} alt={caseData.company} />
                    </div>
                    <h3 className="popup-company-name">{caseData.company}</h3>
                    <p className="popup-company-category">{caseData.category}</p>
                    
                    <div className="popup-company-metrics">
                      {caseData.metrics.map((metric, index) => (
                        <div key={index} className="popup-metric-item">
                          <div className="popup-metric-number">{metric.value}</div>
                          <div className="popup-metric-text">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 右側：詳細内容 */}
                  <div className="popup-right">
                    <div className="popup-content-header">
                      <h4 className="popup-main-title">{caseData.headline}</h4>
                    </div>

                    {/* TOPICS セクション */}
                    <div className="popup-topics">
                      <div className="popup-topics-label">TOPICS</div>
                      <div className="popup-topic-item">
                        <div className="popup-topic-check"></div>
                        <span>日々の運営をその都度素早く共有しているため、チーム間コミュニケーションが改善。進捗が可視化されるようになった</span>
                      </div>
                      <div className="popup-topic-item">
                        <div className="popup-topic-check"></div>
                        <span>プロジェクト専任の営業回線を持ったことで、営業の勝ちパターンを発見でき、売れるスキームができ始めている</span>
                      </div>
                      <div className="popup-topic-item">
                        <div className="popup-topic-check"></div>
                        <span>成功活動のみならず、営業折衡や社内のDJTマテリアルとしても活用することで社内営業力の向上にも役立っている</span>
                      </div>
                    </div>

                    <div className="popup-section">
                      <h5 className="popup-section-title">直面していた課題</h5>
                      <p className="popup-section-content">{caseData.challenge}</p>
                    </div>

                    <div className="popup-section">
                      <h5 className="popup-section-title">実行した戦略</h5>
                      <div className="strategy-list">
                        {caseData.strategy.map((item, index) => (
                          <div key={index} className="strategy-item">
                            <div className="strategy-title">{item.title}</div>
                            <div className="strategy-content">{item.content}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="popup-section">
                      <h5 className="popup-section-title">得られた成果</h5>
                      <p className="popup-section-content">{caseData.results}</p>
                    </div>

                    <div className="popup-testimonial">
                      <p className="testimonial-text">{caseData.testimonial}</p>
                    </div>

                    <a href="#" className="popup-interview-link">
                      インタビューを読む
                    </a>

                    <div className="popup-cta">
                      <p className="popup-cta-text">この事例のような成果を実現しませんか？</p>
                      <button className="popup-cta-button" onClick={() => window.location.href = '#contact'}>
                        無料で相談する
                      </button>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
}