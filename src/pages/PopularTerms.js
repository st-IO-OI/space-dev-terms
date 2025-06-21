import React from 'react';
import Link from '@docusaurus/Link';

const popularTerms = [
  {
    title: '人工衛星とは？',
    link: '/docs/satellite/satellite',
    description: '地球を周回する人工物体の概要と用途について解説します。',
  },
  {
    title: 'ロケットとは？',
    link: '/docs/rocket/rocket',
    description: '推進装置によって宇宙空間へ物体を送り出す技術について説明します。',
  },
  {
    title: '打ち上げ失敗とは？',
    link: '/docs/rocket/launch/launch-failure',
    description: 'ロケット打ち上げ中に発生するトラブルとその影響について紹介します。',
  },
  {
    title: '軌道とは？',
    link: '/docs/orbit/orbit',
    description: '宇宙空間での物体の運動パターンと分類について解説します。',
  },
  {
    title: 'はやぶさ2とは？',
    link: '/docs/explorer/mission/hayabusa2',
    description: 'JAXAの小惑星探査機「はやぶさ2」のミッションと成果について紹介します。',
  },
  {
    title: '通信遅延とは？',
    link: '/docs/communication/technology/communication-delay',
    description: '遠距離通信における遅延の要因と影響について説明します。',
  },
];

const categories = [
  { title: 'ロケットの用語一覧', link: '/docs/category/rocket' },
  { title: '人工衛星の用語一覧', link: '/docs/category/satellite' },
  { title: '探査機の用語一覧', link: '/docs/category/explorer' },
  { title: '推進系の用語一覧', link: '/docs/category/propulsion' },
  { title: '軌道の用語一覧', link: '/docs/category/orbit' },
  { title: '制御の用語一覧', link: '/docs/category/control' },
  { title: '通信の用語一覧', link: '/docs/category/communication' },
  { title: '宇宙開発史の用語一覧', link: '/docs/category/history' },
  { title: '宇宙開発全般の用語一覧', link: '/docs/category/glossary' },
];

export default function PopularTerms() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4">カテゴリから探す</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat, idx) => (
          <Link
            to={cat.link}
            key={idx}
            className="block border border-blue-200 text-blue-900 text-base bg-blue-50 hover:bg-blue-100 rounded-2xl px-4 py-6 text-center font-medium leading-relaxed"
          >
            <p className="text-sm text-gray-600">{cat.title}</p>
          </Link>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4">人気の用語</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {popularTerms.map((term, index) => (
          <Link
            to={term.link}
            key={index}
            className="block border border-gray-200 rounded-2xl p-4 hover:shadow-lg transition-all duration-300 bg-white"
          >
            <h3 className="text-lg font-semibold mb-2">{term.title}</h3>
            <p className="text-sm text-gray-600">{term.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}