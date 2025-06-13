// app/thanks/page.tsx
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './thanks.module.css';

export default function ThanksPage() {
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

  // ダウンロード処理
  const handleDownload = () => {
    // PDFファイルのダウンロード
    const downloadUrl = '/document.pdf';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = '採用フルサポートONE_資料.pdf';
    link.click();
  };

  return (
    <section className={styles.thanksSection}>
      <div className={styles.thanksContainer}>
        {/* ヘッダー */}
        <div className={styles.thanksHeader}>
          <h1 className={`${styles.thanksTitle} ${styles.fadeIn}`}>
            3分でわかる採用フルサポートONE　資料ダウンロード
            <span className={styles.titleUnderline}></span>
          </h1>
        </div>

        {/* メインコンテンツ */}
        <div className={styles.thanksContent}>
          {/* 完了メッセージ */}
          <div className={`${styles.completeMessage} ${styles.fadeIn}`}>
            <h2 className={styles.completeTitle}>送信が完了いたしました。</h2>
          </div>

          {/* 補足メッセージ */}
          <div className={`${styles.thanksMessage} ${styles.fadeIn}`}>
            <p className={styles.messageText}>
              弊社の資料をダウンロード頂きありがとうございます。<br />
              資料は下記のボタン、またはメールよりダウンロードください。
            </p>
          </div>

          {/* ダウンロードボタン */}
          <div className={`${styles.buttonWrapper} ${styles.fadeIn}`}>
            <button 
              onClick={handleDownload}
              className={styles.downloadButton}
            >
              資料ダウンロード
            </button>
          </div>

          {/* TOPへ戻るリンク */}
          <div className={`${styles.linkWrapper} ${styles.fadeIn}`}>
            <Link href="/" className={styles.topLink}>
              TOPへ戻る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}