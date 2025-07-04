import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useState } from 'react';
import PopularTerms from './PopularTerms';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          宇宙開発ポータル
        </Heading>
        <p className="hero__subtitle">
          宇宙を志すすべての人たちへ。宇宙開発についてもっと知りたい人のためのポータルサイト。
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro/">
            ▶ このページについて
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="宇宙開発用語集へようこそ"
      description="宇宙開発に関する専門用語を体系的に学べるナビゲーション型辞典サイト"
    >
      <HomepageHeader />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">宇宙開発ポータルへようこそ 🚀</h1>
          <p className="text-lg leading-relaxed text-gray-700">
            このサイトは、宇宙開発に関する情報をまとめたポータルサイトです。
            初学者から実務者まで、宇宙分野に関心を持つすべての人に向けて、「学ぶべき内容」と「信頼できる導線」を整理しています。
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🌍 このサイトが目指すもの</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            宇宙業界は現在、JAXAやNASAだけでなく、民間や異業種の参入も進んでいます。
            しかし、「何をどう学べばよいか分からない」という障壁が依然として存在します。
            本サイトは、学習と実務の間をつなぐ“知のプラットフォーム”として機能することを目指しています。
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🌍 サイト内コンテンツ</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            <Link to="/docs/navi/intro-to-space-dev/">
              宇宙開発ナビ
            </Link>
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            <Link to="/docs/glossary/">
              宇宙開発用語集
            </Link>
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            <Link to="/docs/guide/guidebook/">
              宇宙開発ガイドブック
            </Link>
          </p>
        </section>
        <PopularTerms />
        <section style={{ marginTop: '2rem' }}>
          <h2>🔎 用語を提案したい場合は？</h2>
          <p>
            お問い合わせフォームは
            <Link to="/contact/">
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