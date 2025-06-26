
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',             // docs/intro.md
    {
      type: 'category',
      label: '宇宙開発ナビ　　　　　　　これから宇宙を学ぶ人たちへ',
      link: { type: 'doc', id: 'navi/intro-to-space-dev' },
      collapsed: false,
      items: [
        'navi/overview',
        'navi/what-is-needed',
        'navi/region-of-expertise',
        'navi/basic-knowledge',
        'navi/voice-of-frontline',
        'navi/how-to-work',
      ],
    },
    {
      type: 'category',
      label: '宇宙開発用語集　　　　　　宇宙を学んでいる人たちへ',
      link: { type: 'doc', id: 'glossary' },
      collapsed: false,
      items: [
    'index',             // docs/intro.md
    {
      type: 'category',
      label: '宇宙開発一般',
      link: { type: 'doc', id: 'category/glossary' },
      collapsed: true,
      items: [
        'glossary/space',
        'glossary/gravity',
        'glossary/atmosphere',
        'glossary/astronaut',
        {
          type: 'category',
          label: '歴史',
          items: [
            'glossary/history/space-history',
            'glossary/history/hideo-itokawa',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'ロケット',
      link: { type: 'doc', id: 'rocket/rocket' },
      collapsed: true,
      items: [
        'rocket/rocket',
        'rocket/propulsion/rocket-engine',
        {
          type: 'category',
          label: 'ロケットの種類',
          collapsed: true,
          items: [
            'rocket/index/h3-rocket',
            'rocket/index/epsilon-rocket',
          ],
        },
        {
          type: 'category',
          label: '打ち上げ',
          collapsed: true,
          items: [
            'rocket/launch/launch',
            'rocket/launch/launch-failure',
          ],
        },
        {
          type: 'category',
          label: '推進系',
          collapsed: true,
          items: [
            'rocket/propulsion/rocket-engine',
          ],
        },

      ],
    },
    {
      type: 'category',
      label: '人工衛星',
      link: { type: 'doc', id: 'category/satellite' },
      collapsed: true,
      items: [
        'satellite/satellite',
        'satellite/type/earth-observation-sat',
        'satellite/type/space-station',
        'satellite/type/cubesat',
      ],
    },
    {
      type: 'category',
      label: '探査機',
      link: { type: 'doc', id: 'category/explorer' },
      collapsed: true,
      items: [
        'explorer/space-probe',
        'explorer/mission/hayabusa',
        'explorer/mission/hayabusa2',
        'explorer/technology/sample-return',
        'explorer/technology/flyby',
      ],
    },
    {
      type: 'category',
      label: '軌道',
      link: { type: 'doc', id: 'category/orbit' },
      collapsed: true,
      items: [
        'orbit/orbit',
        'orbit/mechanics/orbital-elements',
        'orbit/mechanics/first-cosmic-velocity',
        'orbit/type/circular-orbit',
        'orbit/type/geostationary-orbit',
        'orbit/type/sun-synchronous-orbit',
      ],
    },
    {
      type: 'category',
      label: '制御',
      link: { type: 'doc', id: 'category/control' },
      collapsed: true,
      items: [
        'control/technology/attitude-control',
        'control/technology/rendezvous-docking',
      ],
    },
    {
      type: 'category',
      label: '通信',
      link: { type: 'doc', id: 'category/communication' },
      collapsed: true,
      items: [
        'communication/technology/antenna',
        'communication/technology/communication-delay',
        'communication/system/ground-station',
      ],
    }, 
      ],
    },
    {
      type: 'category',
      label: '宇宙開発ガイドブック　　　　　　　もっと宇宙を学びたい人たちへ',
      link: { type: 'doc', id: 'guide/index' },
      collapsed: false,
      items: [
      ],
    },
  ],
};


export default sidebars;
