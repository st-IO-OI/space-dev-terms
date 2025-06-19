import React, { useState } from 'react';

export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [resultMsg, setResultMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const coded = [115,112,97,99,101,46,100,101,118,46,116,101,114,109,115,64,103,109,97,105,108,46,99,111,109];
    const address = coded.map(c => String.fromCharCode(c)).join('');
    const mailtoLink = `mailto:${address}?subject=宇宙開発用語集への問い合わせ&body=【送信者】%0A${email}%0A%0A【メッセージ】%0A${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
    setResultMsg('メールアプリが起動します。そちらから送信してください。');
  };

  return (
    <section id="contact" style={{ marginTop: '3rem' }}>
      <h2>📩 お問い合わせ</h2>
      <p>ご質問・ご要望がある方は、以下のフォームからご連絡ください。</p>

      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
        <label htmlFor="email">メールアドレス：</label><br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '1rem' }}
        /><br />

        <label htmlFor="message">メッセージ内容：</label><br />
        <textarea
          id="message"
          rows="5"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '1rem' }}
        ></textarea><br />

        <button type="submit">送信</button>
      </form>

      {resultMsg && <p style={{ color: 'green' }}>{resultMsg}</p>}
    </section>
  );
}

