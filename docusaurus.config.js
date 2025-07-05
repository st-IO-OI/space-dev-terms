// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '宇宙開発ポータル',
  tagline: '宇宙開発のすべてを、信頼と体系でつなぐ',
  url: 'https://www.space-portal.org',
  baseUrl: '/',
  organizationName: 'st-IO-OI',
  projectName: 'space-dev-terms',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // ✅ 言語設定の修正
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  scripts: [
    {
      async: true, 
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7292239445705334',
      crossorigin: 'anonymous',
    },
  ],

  // ✅ SEO・検索用の meta タグ
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'xhvmKnJYu2prfhHhfHbja15h8SSR3m6SmFfMrowuXyY', // Google Search Consoleで得たコード
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '宇宙を目指すすべての人たちに，宇宙開発をわかりやすく解説する専門サイトです。',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: '宇宙,宇宙開発,ロケット,人工衛星,探査機,宇宙用語,宇宙辞典',
      },
    },
  ],

  // ✅ OGP用のsocial image

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/st-IO-OI/space-dev-terms/edit/main/blog/',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
          trailingSlash: true, 
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '宇宙開発ポータル',
      logo: {
        alt: 'ロゴ',
        src: 'img/space-dic.svg',
      },
      items: [
        { to: '/docs/intro/', label: 'このサイトについて', position: 'left' },
        { href: 'https://x.com/SpaceDevTerms', label: 'X', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'サイト案内',
          items: [
            { label: 'このサイトについて', to: '/docs/intro/' },
            { label: 'プライバシーポリシー', to: '/docs/privacy-policy/' },
            { label: '免責事項', to: '/docs/disclaimer/' },
            { label: 'お問い合わせ', to: '/contact/' },
          ],
        },
        {
          title: 'カテゴリ',
          items: [
            { label: '宇宙開発ナビ（これから宇宙を目指す人たちへ）', to: '/docs/navi/intro-to-space-dev/' },
            { label: '宇宙開発用語集（もっと宇宙を学びたい人たちへ）', to: '/docs/glossary/' },
            { label: '宇宙開発ガイド（宇宙へ向かいたい人たちへ）', to: '/docs/guide/guidebook/' },
          ],
        },
        {
          title: '外部リンク',
          items: [
            { label: 'X', href: 'https://x.com/SpaceDevTerms/' },
            { label: 'Blog', to: '/blog/' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Space Dev Terms`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};



export default config;
