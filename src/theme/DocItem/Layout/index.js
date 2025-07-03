// src/theme/DocItem/Layout.js

import React from 'react';
import TOC from '@theme/TOC';
import AdBanner from '@site/src/components/AdsenseBanner';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function DocItemLayout({ children, frontMatter, toc }) {
  const isBrowser = useIsBrowser();
  const adType = frontMatter.ads || 'default';

  return (
    <div className="row">
      <div className="col col--9">
        {children}
        {/* モバイル末尾広告 */}
        <div className="ad-banner-mobile">
            <AdBanner type={frontMatter.ads || 'default'} />
        </div>
      </div>
      <div className="col col--3">
        <TOC toc={toc} />
        {/* デスクトップ右広告 */}
        {isBrowser && (
          <div className="ad-banner-desktop">
            <AdBanner type={frontMatter.ads || 'default'} />
          </div>
        )}
      </div>
    </div>
  );
}
