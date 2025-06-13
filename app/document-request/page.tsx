// page.tsx
'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';  // CSS Modulesをインポート

export default function ContactPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    considerationPeriod: '',
    inquiry: '',
    consultationRequest: '',
    privacyAgreed: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // エラーをクリア
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.companyName) newErrors.companyName = '会社名を入力してください';
    if (!formData.lastName) newErrors.lastName = '姓を入力してください';
    if (!formData.firstName) newErrors.firstName = '名を入力してください';
    if (!formData.email) newErrors.email = 'メールアドレスを入力してください';
    if (!formData.phone) newErrors.phone = '電話番号を入力してください';
    if (!formData.considerationPeriod) newErrors.considerationPeriod = '検討時期を選択してください';
    if (!formData.consultationRequest) newErrors.consultationRequest = '採用相談の希望を選択してください';
    if (!formData.privacyAgreed) newErrors.privacyAgreed = '個人情報の取り扱いに同意してください';
    
    // メールアドレスの形式チェック
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          alert('資料ダウンロードの申込みを受け付けました。');
          // フォームをリセット
          setFormData({
            companyName: '',
            lastName: '',
            firstName: '',
            email: '',
            phone: '',
            considerationPeriod: '',
            inquiry: '',
            consultationRequest: '',
            privacyAgreed: false
          });
          // サンクスページへリダイレクト
          window.location.href = '/thanks';
        } else {
          alert('送信に失敗しました。もう一度お試しください。');
        }
      } catch (error) {
        console.error('送信エラー:', error);
        alert('送信中にエラーが発生しました。');
      }
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        {/* ヘッダー */}
        <div className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>
            3分でわかる採用フルサポートONE　資料ダウンロード
            <span className={styles.titleUnderline}></span>
          </h1>
        </div>

        <div className={styles.contactContent}>
          {/* 左カラム：資料ビジュアル&説明 */}
          <div className={styles.contentLeft}>
            {/* 資料画像 */}
            <div className={styles.materialVisual}>
              <div className={styles.mainImage}>
                <img src="/jpg/document.jpg" alt="採用フルサポートONE資料" />
              </div>
              <div className={styles.thumbnailList}>
                <img src="/jpg/document1_1.png" alt="資料サムネイル1" />
                <img src="/jpg/document1_2.png" alt="資料サムネイル2" />
                <img src="/jpg/document1_3.png" alt="資料サムネイル3" />
              </div>
            </div>

            {/* 説明テキスト */}
            <div className={styles.materialDescription}>
              <h2 className={styles.subTitle}>採用フルサポートONEとは</h2>
              <p className={styles.descriptionText}>
                採用戦略の立案から実行まで、採用業務をトータルでサポートする包括的な採用支援サービスです。
                企業の採用課題を解決し、最適な人材獲得を実現します。
              </p>
            </div>

            {/* メリットリスト */}
            <ul className={styles.benefitList}>
              <li className={styles.benefitItem}>
                <span className={styles.checkIcon}>✓</span>
                採用から入社後のフォローまで一元管理
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.checkIcon}>✓</span>
                AIによる業務効率化で工数を50%削減
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.checkIcon}>✓</span>
                リアルタイムでデータ分析・レポート作成
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.checkIcon}>✓</span>
                専任サポートによる導入・運用支援
              </li>
            </ul>
          </div>

          {/* 右カラム：お問い合わせフォーム */}
          <div className={styles.contentRight}>
            <div className={styles.formWrapper}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>ダウンロードをご希望の方は下記フォームをご記入ください</h3>
                <p className={styles.formSubtitle}>必要事項をご記入の上、送信ボタンを押してください。</p>
              </div>

              <form onSubmit={handleSubmit} className={styles.contactForm}>
                {/* 会社名 */}
                <div className={styles.formField}>
                  <label className={styles.fieldLabel}>
                    会社名
                    <span className={styles.requiredLabel}>必須</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`${styles.fieldInput} ${errors.companyName ? styles.error : ''}`}
                    placeholder="株式会社サンプル"
                  />
                  {errors.companyName && <span className={styles.errorMessage}>{errors.companyName}</span>}
                </div>

                {/* 姓・名 */}
                <div className={`${styles.formField} ${styles.nameField}`}>
                  <label className={styles.fieldLabel}>
                    お名前
                    <span className={styles.requiredLabel}>必須</span>
                  </label>
                  <div className={styles.nameInputs}>
                    <div className={styles.nameInputWrapper}>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`${styles.fieldInput} ${errors.lastName ? styles.error : ''}`}
                        placeholder="山田"
                      />
                      {errors.lastName && <span className={styles.errorMessage}>{errors.lastName}</span>}
                    </div>
                    <div className={styles.nameInputWrapper}>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`${styles.fieldInput} ${errors.firstName ? styles.error : ''}`}
                        placeholder="太郎"
                      />
                      {errors.firstName && <span className={styles.errorMessage}>{errors.firstName}</span>}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className={styles.formField}>
                  <label className={styles.fieldLabel}>
                    Email
                    <span className={styles.requiredLabel}>必須</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`${styles.fieldInput} ${errors.email ? styles.error : ''}`}
                    placeholder="sample@example.com"
                  />
                  {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                </div>

                {/* 電話番号 */}
                <div className={styles.formField}>
                  <label className={styles.fieldLabel}>
                    電話番号
                    <span className={styles.requiredLabel}>必須</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`${styles.fieldInput} ${errors.phone ? styles.error : ''}`}
                    placeholder="03-1234-5678"
                  />
                  {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
                </div>

                {/* 検討時期 */}
                <div className={styles.formField}>
                  <label className={styles.fieldLabel}>
                    検討時期
                    <span className={styles.requiredLabel}>必須</span>
                  </label>
                  <select
                    name="considerationPeriod"
                    value={formData.considerationPeriod}
                    onChange={handleInputChange}
                    className={`${styles.fieldSelect} ${errors.considerationPeriod ? styles.error : ''}`}
                  >
                    <option value="">選択してください</option>
                    <option value="immediate">すぐに導入したい</option>
                    <option value="1month">1ヶ月以内</option>
                    <option value="3months">3ヶ月以内</option>
                    <option value="6months">6ヶ月以内</option>
                    <option value="undecided">未定</option>
                  </select>
                  {errors.considerationPeriod && <span className={styles.errorMessage}>{errors.considerationPeriod}</span>}
                </div>

                {/* お問い合わせ内容 */}
                <div className={styles.formField}>
                  <label className={styles.fieldLabel}>
                    お問い合わせ内容
                  </label>
                  <textarea
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleInputChange}
                    className={styles.fieldTextarea}
                    rows={4}
                    placeholder="ご質問やご要望がございましたらご記入ください"
                  />
                </div>

                {/* 採用相談希望 */}
                <div className={styles.formField}>
                  <label className={styles.fieldLabel}>
                    【無料】採用相談を希望する（オンライン）
                    <span className={styles.requiredLabel}>必須</span>
                  </label>
                  <select
                    name="consultationRequest"
                    value={formData.consultationRequest}
                    onChange={handleInputChange}
                    className={`${styles.fieldSelect} ${errors.consultationRequest ? styles.error : ''}`}
                  >
                    <option value="">選択してください</option>
                    <option value="yes">希望する</option>
                    <option value="no">希望しない</option>
                  </select>
                  {errors.consultationRequest && <span className={styles.errorMessage}>{errors.consultationRequest}</span>}
                </div>

                {/* 個人情報同意 */}
                <div className={`${styles.formField} ${styles.privacyField}`}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="privacyAgreed"
                      checked={formData.privacyAgreed}
                      onChange={handleInputChange}
                      className={styles.checkboxInput}
                    />
                    <span className={styles.checkboxText}>
                      <a href="/privacy" className={styles.privacyLink}>個人情報の取り扱い</a>
                      について同意する
                    </span>
                  </label>
                  {errors.privacyAgreed && <span className={styles.errorMessage}>{errors.privacyAgreed}</span>}
                </div>

                {/* 送信ボタン */}
                <button type="submit" className={styles.submitButton}>
                  資料をダウンロードする
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>


    
  );
}

