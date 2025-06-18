import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`ホーム - 宇宙開発用語集`}
      description="宇宙開発に関する用語をわかりやすく説明するサイトです。 <head />">
      <HomepageHeader />
      <main className="container padding-top--md padding-bottom--lg">
        <h1>ようこそ、宇宙辞典へ！</h1>
        <p>このサイトでは、宇宙工学・宇宙開発に関する専門用語をわかりやすくまとめています。</p>
        <Link to="/docs/intro">▶ 用語一覧をみる</Link>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
