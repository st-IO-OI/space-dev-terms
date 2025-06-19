// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '宇宙開発用語集',
  tagline: '宇宙開発に関する用語をわかりやすく解説',
  favicon: 'img/favicon.ico',
  url: 'https://space-dev-terms.pages.dev',
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
        content: '宇宙開発に関する用語をわかりやすく解説する専門サイトです。',
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
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
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
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '宇宙開発用語集',
      logo: {
        alt: 'ロゴ',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/intro', label: '用語一覧', position: 'left' },
        { href: 'https://github.com/st-IO-OI/space-dev-terms', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '情報',
          items: [
            { label: 'このサイトについて', to: '/docs/intro' },
            { label: 'プライバシーポリシー', to: '/docs/privacy-policy' },
            { label: '免責事項', to: '/docs/disclaimer' },
            { label: 'お問い合わせ', to: '/contact' },
          ],
        },
        {
          title: 'SNS',
          items: [
            { label: 'X', href: 'https://x.com/' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/' },
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
