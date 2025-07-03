import { useEffect } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function AdBanner({ type = 'default' }) {
  const isBrowser = useIsBrowser();
  
  useEffect(() => {
    if (!isBrowser) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, [isBrowser]);

  if (!isBrowser) {
    return null; // SSR中は広告非表示にして安全化
  }

  if (type === 'hayabusa2') {
    return (
      <div
        style={{
          border: '1px solid #95a5a6',
          borderRadius: '0.75rem',
          backgroundColor: '#FFFFFF',
          width: 280,
          margin: 0,
          padding: 5,
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <table>
          <tbody>
            <tr>
              <td style={{ width: 128 }}>
                <a
                  href="https://hb.afl.rakuten.co.jp/ichiba/49ec4b74.53ebf16c.49ec4b75.c45c8b88/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F16497722%2F&link_type=picttext&ut=..."
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  style={{ wordWrap: 'break-word' }}
                >
                  <img
                    src="https://hbb.afl.rakuten.co.jp/hgb/49ec4b74.53ebf16c.49ec4b75.c45c8b88/?me_id=1213310&item_id=20165144&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F6397%2F9784140886397.jpg%3F_ex%3D128x128&s=128x128&t=picttext"
                    border="0"
                    style={{ margin: 2 }}
                    alt="はやぶさ2書籍"
                    title="はやぶさ2　最強ミッションの真実"
                  />
                </a>
              </td>
              <td style={{ verticalAlign: 'top', width: 136, display: 'block' }}>
                <p
                  style={{
                    fontSize: 12,
                    lineHeight: '1.4em',
                    textAlign: 'left',
                    margin: 0,
                    padding: '2px 6px',
                    wordWrap: 'break-word',
                  }}
                >
                  <a
                    href="https://hb.afl.rakuten.co.jp/ichiba/49ec4b74.53ebf16c.49ec4b75.c45c8b88/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F16497722%2F&link_type=picttext&ut=..."
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    style={{ wordWrap: 'break-word' }}
                  >
                    はやぶさ2　最強ミッションの真実 （NHK出版新書　639　639） [ 津田 雄一 ]
                  </a>
                  <br />
                  <span>価格：990円（税込、送料無料)</span>{' '}
                  <span style={{ color: '#BBB' }}>(2025/7/3時点)</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }// else if (type === 'satellite') { return ();} // このようにして条件分岐をつなげていく

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center' }}
      data-ad-client="ca-pub-x7292239445705334"
      data-ad-slot="7743083983"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}