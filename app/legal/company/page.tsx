// app/legal/company/page.tsx
'use client';

import React, { useEffect } from 'react';
import styles from '../legal.module.css';

export default function CompanyPage() {
  useEffect(() => {
    // スクロールアニメーション
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(`.${styles.fadeIn}`);
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className={styles.legalSection}>
      <div className={styles.legalContainer}>
        {/* ヘッダー */}
        <div className={styles.legalHeader}>
          <h1 className={`${styles.legalTitle} ${styles.fadeIn}`}>
            会社概要
            <span className={styles.titleUnderline}></span>
          </h1>
        </div>

        {/* コンテンツ */}
        <div className={styles.legalContent}>
          {/* 会社基本情報 */}
          <div className={`${styles.companySection} ${styles.fadeIn}`}>
            <table className={styles.companyTable}>
              <tbody>
                <tr>
                  <th>会社名</th>
                  <td>ブルートラック株式会社</td>
                </tr>
                <tr>
                  <th>設立年月日</th>
                  <td>2022年2月3日</td>
                </tr>
                <tr>
                  <th>代表者</th>
                  <td>代表取締役　高桑 誠也</td>
                </tr>
                <tr>
                  <th>本社所在地</th>
                  <td>
                    〒160-0023<br />
                    東京都新宿区西新宿3丁目3番13号<br />
                    西新宿水間ビル2F
                  </td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td>
                    <a href="tel:050-3551-7393" className={styles.companyLink}>050-3551-7393</a>
                  </td>
                </tr>
                <tr>
                  <th>メールアドレス</th>
                  <td>
                    <a href="mailto:info@bluetruck.jp" className={styles.companyLink}>info@bluetruck.jp</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 事業内容 */}
          <div className={`${styles.section} ${styles.fadeIn}`}>
            <h2 className={styles.sectionTitle}>事業内容</h2>
            <div className={styles.businessContent}>
              <div className={styles.businessItem}>
                <div className={styles.businessIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.businessInfo}>
                  <h3 className={styles.businessTitle}>軽貨物配送事業</h3>
                  <p className={styles.businessDescription}>
                    迅速かつ確実な配送サービスを提供し、お客様の物流ニーズに応えます。
                  </p>
                </div>
              </div>

              <div className={styles.businessItem}>
                <div className={styles.businessIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.businessInfo}>
                  <h3 className={styles.businessTitle}>家電修理事業</h3>
                  <p className={styles.businessDescription}>
                    専門技術を活かした家電製品の修理・メンテナンスサービスを展開しています。
                  </p>
                </div>
              </div>

              <div className={styles.businessItem}>
                <div className={styles.businessIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.businessInfo}>
                  <h3 className={styles.businessTitle}>人材採用サポート事業</h3>
                  <p className={styles.businessDescription}>
                    企業の採用活動を総合的にサポートし、最適な人材獲得を実現します。
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* お問い合わせ */}
          <div className={`${styles.section} ${styles.fadeIn}`}>
            <h2 className={styles.sectionTitle}>お問い合わせ</h2>
            <div className={styles.contactContent}>
              <p>
                採用フルサポートONEに関するお問い合わせは、<br />
                下記までお気軽にご連絡ください。
              </p>
              <div className={styles.contactButtons}>
                <a href="tel:050-3551-7393" className={styles.contactButton}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" fill="white"/>
                  </svg>
                  電話で問い合わせる
                </a>
                <a href="/contact" className={styles.contactButton}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6l-10 7L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  フォームで問い合わせる
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}