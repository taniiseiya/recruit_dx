// app/legal/privacy/page.tsx
'use client';

import React, { useEffect } from 'react';
import styles from '../legal.module.css';

export default function PrivacyPage() {
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
            個人情報保護方針
            <span className={styles.titleUnderline}></span>
          </h1>
        </div>

        {/* コンテンツ */}
        <div className={styles.legalContent}>
          <div className={`${styles.introText} ${styles.fadeIn}`}>
            <p>
              ブルートラック株式会社（以下「当社」といいます。）は、お客様の個人情報保護の重要性について認識し、
              個人情報の保護に関する法律（以下「個人情報保護法」といいます。）を遵守すると共に、
              以下のとおり個人情報保護方針（以下「本方針」といいます。）を定め、お客様の個人情報の保護に努めます。
            </p>
          </div>

          {/* 1. 個人情報の定義 */}
          <div className={`${styles.section} ${styles.fadeIn}`}>
            <h2 className={styles.sectionTitle}>1. 個人情報の定義</h2>
            <div className={styles.sectionContent}>
              <p>
                本方針において「個人情報」とは、個人情報保護法に規定される「個人情報」を指すものとし、
                生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、
                メールアドレスその他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、
                及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
              </p>
            </div>
          </div>

          {/* 2. 個人情報の収集方法 */}
          <div className={`${styles.section} ${styles.fadeIn}`}>
            <h2 className={styles.sectionTitle}>2. 個人情報の収集方法</h2>
            <div className={styles.sectionContent}>
              <p>
                当社は、お客様がサービスの利用を申し込まれた際、お問い合わせをされた際、
                その他当社がサービスを提供するうえで必要と判断した際に、お客様から個人情報をご提供いただく場合があります。
              </p>
            </div>
          </div>

          {/* 3. 個人情報を収集・利用する目的 */}
          <div className={`${styles.section} ${styles.fadeIn}`}>
            <h2 className={styles.sectionTitle}>3. 個人情報を収集・利用する目的</h2>
            <div className={styles.sectionContent}>
              <p>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
              <ul className={styles.list}>
                <li>当社サービスの提供・運営のため</li>
                <li>お客様からのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                <li>お客様に当社サービスに関するご案内をお送りするため</li>
                <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                <li>利用規約に違反したお客様や、不正・不当な目的でサービスを利用しようとするお客様の特定をし、ご利用をお断りするため</li>
                <li>お客様にご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                <li>上記の利用目的に付随する目的</li>
              </ul>
            </div>
          </div>

          {/* 4. 利用目的の変更 */}
          <div className={`${styles.section} ${styles.fadeIn}`}>
            <h2 className={styles.sectionTitle}>4. 利用目的の変更</h2>
            <div className={styles.sectionContent}>
              <p>
                当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、
                個人情報の利用目的を変更するものとします。
                利用目的の変更を行った場合には、変更後の目的について、
                当社所定の方法により、お客様に通知し、または本ウェブサイト上に公表するものとします。
              </p>
            </div>
          </div>

          {/* 5. 個人情報の第三者提供 */}
          <div className={`${styles.section} ${styles.fadeIn}`}>
            <h2 className={styles.sectionTitle}>5. 個人情報の第三者提供</h2>
            <div className={styles.sectionContent}>
              <p>
                当社は、次に掲げる場合を除いて、あらかじめお客様の同意を得ることなく、
                第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
              </p>
              <ul className={styles.list}>
                <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                <li>予め次の事項を告知あるいは公表し、かつ当社が個人情報保護委員会に届出をしたとき</li>
              </ul>
            </div>
          </div>

          {/* 6. 個人情報の開示 */}
          <div className={`${styles.section} ${styles.fadeIn}`}>
            <h2 className={styles.sectionTitle}>6. 個人情報の開示</h2>
            <div className={styles.sectionContent}>
              <p>
                当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。
                ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、
                開示しない決定をした場合には、その旨を遅滞なく通知します。
              </p>
              <ul className={styles.list}>
                <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                <li>その他法令に違反することとなる場合</li>
              </ul>
            </div>
          </div>

          {/* 7. 個人情報の訂正および削除 */}
          <div className={`${styles.section} ${styles.fadeIn}`}>
            <h2 className={styles.sectionTitle}>7. 個人情報の訂正および削除</h2>
            <div className={styles.sectionContent}>
              <p>
                お客様は、当社の保有する自己の個人情報が誤った情報である場合には、
                当社が定める手続きにより、当社に対して個人情報の訂正、追加または削除（以下「訂正等」といいます。）を請求することができます。
                当社は、お客様から前項の請求を受けてその請求に応じる必要があると判断した場合には、
                遅滞なく、当該個人情報の訂正等を行うものとします。
              </p>
            </div>
          </div>

          {/* 8. 個人情報の利用停止等 */}
          <div className={`${styles.section} ${styles.fadeIn}`}>
            <h2 className={styles.sectionTitle}>8. 個人情報の利用停止等</h2>
            <div className={styles.sectionContent}>
              <p>
                当社は、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、
                または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下「利用停止等」といいます。）を求められた場合には、
                遅滞なく必要な調査を行います。
                前項の調査結果に基づき、その請求に応じる必要があると判断した場合には、
                遅滞なく、当該個人情報の利用停止等を行います。
              </p>
            </div>
          </div>

          {/* 9. 個人情報の管理 */}
          <div className={`${styles.section} ${styles.fadeIn}`}>
            <h2 className={styles.sectionTitle}>9. 個人情報の管理</h2>
            <div className={styles.sectionContent}>
              <p>
                当社は、お客様の個人情報を正確かつ最新の状態に保ち、
                個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、
                セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、
                安全対策を実施し個人情報の厳重な管理を行います。
              </p>
            </div>
          </div>

          {/* 10. お問い合わせ窓口 */}
          <div className={`${styles.section} ${styles.fadeIn}`}>
            <h2 className={styles.sectionTitle}>10. お問い合わせ窓口</h2>
            <div className={styles.sectionContent}>
              <p>
                本方針に関するお問い合わせは、下記の窓口までお願いいたします。
              </p>
              <div className={styles.contactInfo}>
                <p>ブルートラック株式会社</p>
                <p>〒160-0023 東京都新宿区西新宿3丁目3番13号西新宿水間ビル2F</p>
                <p>TEL: 050-1722-0368</p>
                <p>Email: info@bluetruck.jp</p>
              </div>
            </div>
          </div>

          {/* 制定日 */}
          <div className={`${styles.section} ${styles.fadeIn}`}>
            <div className={styles.dateInfo}>
              <p>制定日：2022年2月3日</p>
              <p>最終更新日：2024年1月1日</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}