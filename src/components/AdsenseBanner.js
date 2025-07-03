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
          width: 504,
          margin: '0 auto',
          padding: 5,
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <table>
          <tbody>
            <tr>
              <td style={{ width: 240 }}>
                <a
                  href="https://hb.afl.rakuten.co.jp/ichiba/49ec4b74.53ebf16c.49ec4b75.c45c8b88/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F16497722%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIzMDB4MzAwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D"
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  style={{ wordWrap: 'break-word' }}
                >
                  <img
                    src="https://hbb.afl.rakuten.co.jp/hgb/49ec4b74.53ebf16c.49ec4b75.c45c8b88/?me_id=1213310&item_id=20165144&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F6397%2F9784140886397.jpg%3F_ex%3D300x300&s=300x300&t=picttext"
                    border="0"
                    alt="はやぶさ2　最強ミッションの真実"
                    style={{ margin: 2 }}
                    title="はやぶさ2　最強ミッションの真実"
                  />
                </a>
              </td>
              <td style={{ verticalAlign: 'top', width: 248, display: 'block' }}>
                <p
                  style={{
                    fontSize: 12,
                    lineHeight: 1.4,
                    textAlign: 'left',
                    margin: 0,
                    padding: '2px 6px',
                    wordWrap: 'break-word',
                  }}
                >
                  <a
                    href="https://hb.afl.rakuten.co.jp/ichiba/49ec4b74.53ebf16c.49ec4b75.c45c8b88/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F16497722%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIzMDB4MzAwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D"
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    style={{ wordWrap: 'break-word' }}
                  >
                    はやぶさ2　最強ミッションの真実 （NHK出版新書　639　639） [ 津田 雄一 ]
                  </a>
                  <br />
                  <span>価格：990円（税込、送料無料) </span>{' '}
                  <span style={{ color: '#BBB' }}>(2025/7/3時点)</span>
                </p>
                <div style={{ margin: 10 }}>
                  <a
                    href="https://hb.afl.rakuten.co.jp/ichiba/49ec4b74.53ebf16c.49ec4b75.c45c8b88/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F16497722%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIzMDB4MzAwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D"
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    style={{ wordWrap: 'break-word' }}
                  >
                    <img
                      src="https://static.affiliate.rakuten.co.jp/makelink/rl.svg"
                      alt="楽天"
                      style={{ float: 'left', maxHeight: 27, width: 'auto', marginTop: 0 }}
                    />
                  </a>
                  <a
                    href="https://hb.afl.rakuten.co.jp/ichiba/49ec4b74.53ebf16c.49ec4b75.c45c8b88/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F16497722%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIzMDB4MzAwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ=="
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    style={{ wordWrap: 'break-word' }}
                  >
                    <div
                      style={{
                        float: 'right',
                        width: '41%',
                        height: 27,
                        backgroundColor: '#bf0000',
                        color: '#fff',
                        fontSize: 12,
                        fontWeight: 500,
                        lineHeight: '27px',
                        marginLeft: 1,
                        padding: '0 12px',
                        borderRadius: 16,
                        cursor: 'pointer',
                        textAlign: 'center',
                      }}
                    >
                      楽天で購入
                    </div>
                  </a>
                </div>
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