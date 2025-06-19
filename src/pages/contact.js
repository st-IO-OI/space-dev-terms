// src/pages/contact.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [resultMsg, setResultMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // ここに送信処理を記述（例：API呼び出し）
    setResultMsg('送信が完了しました。ありがとうございます！');
  };

  return (
    <Layout title="お問い合わせ" description="ご意見・ご要望はこちらからどうぞ。">
      <main className="container margin-vert--lg">
        <h1>お問い合わせ</h1>
        <p>以下のフォームから、お問い合わせ・ご要望・用語の提案などをお寄せください。</p>
        <div style={{ width: '100%', height: '800px' }}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc45aJHk2F6ONoYEtLwh-6a0kdqWA9vA99SYdx9D4Vt1VbWtw/viewform?embedded=true"
            width="640"
            height="721"
            frameborder="0" 
            marginheight="0" 
            marginwidth="0">
              読み込んでいます…
          </iframe>
        </div>
      </main>
    </Layout>
  );
}
