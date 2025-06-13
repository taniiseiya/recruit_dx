// app/contact/thanks/page.tsx
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './thanks.module.css';

export default function ContactThanksPage() {
  // ページロード時のアニメーション
  useEffect(() => {
    // フェードインアニメーション用のクラスを追加
    const elements = document.querySelectorAll(`.${styles.fadeIn}`);
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add(styles.visible);
      }, index * 200);
    });
  }, []);

  return (
    <section className={styles.thanksSection}>
      <div className={styles.thanksContainer}>
        {/* ヘッダー */}
        <div className={styles.thanksHeader}>
          <h1 className={`${styles.thanksTitle} ${styles.fadeIn}`}>
            お問い合わせありがとうございます
            <span className={styles.titleUnderline}></span>
          </h1>
        </div>

        {/* メインコンテンツ */}
        <div className={styles.thanksContent}>
          {/* 完了メッセージ */}
          <div className={`${styles.completeMessage} ${styles.fadeIn}`}>
            <div className={styles.iconWrapper}>
              <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2"/>
                <path d="M8 12l2 2 4-4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className={styles.completeTitle}>送信が完了いたしました</h2>
          </div>

          {/* 補足メッセージ */}
          <div className={`${styles.thanksMessage} ${styles.fadeIn}`}>
            <p className={styles.messageText}>
              お問い合わせいただきありがとうございます。<br />
              担当者より2営業日以内にご連絡させていただきます。
            </p>
            <p className={styles.subMessage}>
              お急ぎの場合は、お電話にてお問い合わせください。<br />
              <span className={styles.phoneInfo}>TEL: 050-1722-0368（平日 10:00-18:00）</span>
            </p>
          </div>

          {/* 追加情報 */}
          <div className={`${styles.additionalInfo} ${styles.fadeIn}`}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>採用フルサポートONEについて</h3>
              <p className={styles.infoText}>
                詳しいサービス内容は、資料ダウンロードページからご確認いただけます。
              </p>
              <Link href="/document-request" className={styles.documentLink}>
                資料ダウンロードはこちら
              </Link>
            </div>
          </div>

          {/* ボタンエリア */}
          <div className={`${styles.buttonArea} ${styles.fadeIn}`}>
            <Link href="/" className={styles.topButton}>
              トップページへ戻る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}