// src/theme/DocItem/Layout.js

import React from 'react';
import TOC from '@theme/TOC';
import DocItemContent from '@theme/DocItem/Content'; // 追加
import AdBanner from '@site/src/components/AdsenseBanner';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { useDoc } from '@docusaurus/theme-common';

export default function DocItemLayout({ children, toc }) {
  const isBrowser = useIsBrowser();
  const { frontMatter } = useDoc();
  const adType = frontMatter.ads ?? 'default';
  console.log("📦 adType:", adType);

  return (
    <div className="row">
      <div className="col col--9">
        {/* ここで DocItemContent がタイトル表示などの責任を担う */}
        <DocItemContent>
          {children}
        </DocItemContent>
        {/* モバイル末尾広告 */}
        <div className="ad-banner-mobile">
            <AdBanner type={adType} />
        </div>
      </div>
      <div className="col col--3">
        {toc && <TOC toc={toc} />}
        {/* デスクトップ右広告 */}
        {isBrowser && (
          <div className="ad-banner-desktop">
            <AdBanner type={adType} />
          </div>
        )}
      </div>
    </div>
  );
}
