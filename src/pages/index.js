import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          宇宙開発用語集
        </Heading>
        <p className="hero__subtitle">
          宇宙開発を言葉で読み解く。宇宙開発についてもっと知りたい人のためのオンライン用語集。
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            ▶ 用語一覧をみる
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="宇宙事典 - 宇宙開発用語集"
      description="宇宙工学・宇宙開発の用語を、わかりやすく整理したWeb事典です。">
      <HomepageHeader />
      <main className="container padding-top--md padding-bottom--lg">
        <section>
          <h2>この用語集の特徴</h2>
          <ul>
            <li>✅ 用語の意味だけでなく、背景知識や関連技術までカバー</li>
            <li>✅ カテゴリ別・五十音順で効率よく検索可能</li>
            <li>✅ 宇宙開発に興味のあるすべての人におすすめ</li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>カテゴリで探す</h2>
          <ul>
            <li><Link to="/docs/category/rocket">ロケット</Link></li>
            <li><Link to="/docs/category/satellite">人工衛星</Link></li>
            <li><Link to="/docs/category/explorer">宇宙探査機</Link></li>
            <li><Link to="/docs/category/propulsion">推進系</Link></li>
            <li><Link to="/docs/category/orbit">軌道</Link></li>
            <li><Link to="/docs/category/control">制御</Link></li>
            <li><Link to="/docs/category/communication">通信</Link></li>
            <li><Link to="/docs/category/history">歴史</Link></li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>🔎 用語を提案したい？</h2>
          <p>
            お問い合わせフォームは
            <Link to="/contact">
              こちら
            </Link>
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            または
            <Link to="https://github.com/st-IO-OI/space-dev-terms/issues/new" target="_blank" rel="noopener noreferrer">
              GitHubのIssueから提案
            </Link>
          </p>
        </section>
      </main>
    </Layout>
  );
}