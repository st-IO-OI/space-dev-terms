
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',             // docs/intro.md
    'index',             // docs/intro.md
    {
      type: 'category',
      label: '宇宙開発一般',
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
      collapsed: false,
      items: [
        'rocket/rocket',
        'rocket/propulsion/rocket-engine',
        {
          type: 'category',
          label: 'ロケットの種類',
          collapsed: false,
          items: [
            'rocket/index/h3-rocket',
            'rocket/index/epsilon-rocket',
          ],
        },
        {
          type: 'category',
          label: '打ち上げ',
          items: [
            'rocket/launch/launch',
            'rocket/launch/launch-failure',
          ],
        },
        {
          type: 'category',
          label: '推進系',
          items: [
            'rocket/propulsion/rocket-engine',
          ],
        },

      ],
    },
    {
      type: 'category',
      label: '人工衛星',
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
      items: [
        'control/technology/attitude-control',
        'control/technology/rendezvous-docking',
      ],
    },
    {
      type: 'category',
      label: '通信',
      items: [
        'communication/technology/antenna',
        'communication/technology/communication-delay',
        'communication/system/ground-station',
      ],
    },
  ],
};


export default sidebars;
