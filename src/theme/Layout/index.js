// src/theme/Layout/index.js

import React from 'react';
import Layout from '@theme-original/Layout';
import AdBanner from '../../components/AdsenseBanner'; // 広告コンポーネント

export default function LayoutWrapper(props) {
  return (
    <Layout {...props}>
      <div style={{ margin: '2rem 0' }}>
        <AdBanner />
      </div>
      {props.children}
      <div style={{ margin: '2rem 0' }}>
        <AdBanner />
      </div>
    </Layout>
  );
}
