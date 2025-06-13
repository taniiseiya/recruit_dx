// app/contact/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import styles from './contact.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    inquiryType: '',
    inquiry: '',
    privacyAgreed: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // スクロールアニメーション用
  useEffect(() => {
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

    // アニメーション対象の要素を監視
    const elements = document.querySelectorAll(`.${styles.fadeInOnScroll}`);
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

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
    if (!formData.inquiryType) newErrors.inquiryType = 'お問い合わせ種別を選択してください';
    if (!formData.inquiry) newErrors.inquiry = 'お問い合わせ内容を入力してください';
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
        const response = await fetch('/api/contact-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // 資料ダウンロードフォームの場合は、thanksページへ
          // 通常のお問い合わせフォームの場合は、contact/thanksページへ
          window.location.href = '/contact/thanks';
        } else {
          alert('送信に失敗しました。もう一度お試しください。');
        }
      } catch (error) {
        console.error('送信エラー:', error);
        // エラーが発生しても開発環境ではthanksページへ遷移
        if (process.env.NODE_ENV === 'development') {
          window.location.href = '/contact/thanks';
        } else {
          alert('送信中にエラーが発生しました。');
        }
      }
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        {/* ヘッダー */}
        <div className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>
            お問い合わせ
            <span className={styles.titleUnderline}></span>
          </h1>
          <p className={styles.contactDescription}>
            採用フルサポートONEに関するご質問・ご相談は<br className={styles.spOnly} />
            お気軽にお問い合わせください。
          </p>
        </div>

        <div className={styles.contactContent}>
          {/* 左カラム：お問い合わせ情報 */}
          <div className={styles.contentLeft}>
            {/* お問い合わせ方法 */}
            <div className={styles.contactMethods}>
              <h2 className={styles.subTitle}>お問い合わせ方法</h2>
              
              {/* 電話 */}
              <div className={styles.methodCard}>
                <div className={styles.methodIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" fill="#3b82f6"/>
                  </svg>
                </div>
                <div className={styles.methodInfo}>
                  <h3 className={styles.methodTitle}>お電話でのお問い合わせ</h3>
                  <a href="tel:050-1722-0368" className={styles.phoneNumber}>050-1722-0368</a>
                  <p className={styles.methodHours}>受付時間：平日 10:00－18:00</p>
                </div>
              </div>

              {/* メール */}
              <div className={styles.methodCard}>
                <div className={styles.methodIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6l-10 7L2 6" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.methodInfo}>
                  <h3 className={styles.methodTitle}>メールでのお問い合わせ</h3>
                  <a href="mailto:info@bluetruck.jp" className={styles.emailAddress}>info@bluetruck.jp</a>
                  <p className={styles.methodHours}>24時間受付</p>
                </div>
              </div>
            </div>

            {/* よくあるご質問 */}
            <div className={styles.faqSection}>
              <h2 className={styles.subTitle}>よくあるご質問</h2>
              <ul className={styles.faqList}>
                <li className={styles.faqItem}>
                  <span className={styles.faqIcon}>Q</span>
                  <span className={styles.faqText}>導入までどれくらいの期間がかかりますか？</span>
                </li>
                <li className={styles.faqItem}>
                  <span className={styles.faqIcon}>Q</span>
                  <span className={styles.faqText}>最低契約期間はありますか？</span>
                </li>
                <li className={styles.faqItem}>
                  <span className={styles.faqIcon}>Q</span>
                  <span className={styles.faqText}>どのような企業が利用していますか？</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 右カラム：お問い合わせフォーム */}
          <div className={styles.contentRight}>
            <div className={styles.formWrapper}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>お問い合わせフォーム</h3>
                <p className={styles.formSubtitle}>
                  下記フォームにご記入の上、送信ボタンをクリックしてください。<br />
                  担当者より2営業日以内にご連絡させていただきます。
                </p>
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

                {/* お問い合わせ種別 */}
                <div className={styles.formField}>
                  <label className={styles.fieldLabel}>
                    お問い合わせ種別
                    <span className={styles.requiredLabel}>必須</span>
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className={`${styles.fieldSelect} ${errors.inquiryType ? styles.error : ''}`}
                  >
                    <option value="">選択してください</option>
                    <option value="service">サービスについて</option>
                    <option value="price">料金について</option>
                    <option value="demo">デモ・トライアルについて</option>
                    <option value="support">導入後のサポートについて</option>
                    <option value="other">その他</option>
                  </select>
                  {errors.inquiryType && <span className={styles.errorMessage}>{errors.inquiryType}</span>}
                </div>

                {/* お問い合わせ内容 */}
                <div className={styles.formField}>
                  <label className={styles.fieldLabel}>
                    お問い合わせ内容
                    <span className={styles.requiredLabel}>必須</span>
                  </label>
                  <textarea
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleInputChange}
                    className={`${styles.fieldTextarea} ${errors.inquiry ? styles.error : ''}`}
                    rows={6}
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                  {errors.inquiry && <span className={styles.errorMessage}>{errors.inquiry}</span>}
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
                  送信する
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}