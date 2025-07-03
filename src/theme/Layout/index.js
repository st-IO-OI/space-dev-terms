// src/theme/Layout/index.js

import React from 'react';
import Layout from '@theme-original/Layout';
import AdBanner from '../../components/AdsenseBanner';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function LayoutWrapper(props) {
  const isBrowser = useIsBrowser();

  return (
    <Layout {...props}>
      {/* メインコンテンツ */}
      {props.children}

      {/* モバイル向け: ページ下部に自然に挿入 */}
      <div className="ad-banner-mobile">
        <AdBanner type="default"/>
      </div>

      {/* デスクトップ向け: 右固定配置 */}
      {isBrowser && (
        <div className="ad-banner-desktop">
          <AdBanner type="default"/>
        </div>
      )}
    </Layout>
  );
}
