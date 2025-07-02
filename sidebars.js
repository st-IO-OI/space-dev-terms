
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
          'index',
        // 一般用語
          {
            type: 'category',
            label: '宇宙開発一般',
            link: { type: 'doc', id: 'category/glossary' },
            collapsed: true,
            items: [
              'glossary/space',
              'glossary/atmosphere',
              'glossary/vacuum',
              'glossary/thermal-control',
              'glossary/radiative-cooling',
              'glossary/gravity',
              'glossary/g-force',
              'glossary/acceleration',
              'glossary/astronaut',
              'glossary/docking',
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
        // ロケット
          {
            type: 'category',
            label: 'ロケット',
            link: { type: 'doc', id: 'rocket/rocket' },
            collapsed: true,
            items: [
              'rocket/rocket',
              {
                type: 'category',
                label: 'ロケットのシステム',
                collapsed: true,
                items: [
                  'rocket/system/fairing',
                  'rocket/system/payload',
                  'rocket/system/staging',
                ],
              },
              {
                type: 'category',
                label: 'ロケットの種類',
                collapsed: true,
                items: [
                  'rocket/type/liquid-rocket',
                  'rocket/type/solid-rocket',
                  'rocket/type/reusable-rocket',
                  'rocket/type/space-elevator',
                  'rocket/type/spaceport',
                ],
              },
              {
                type: 'category',
                label: '実際のロケット一覧',
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
                  'rocket/launch/launch-window',
                  'rocket/launch/launch-capacity',
                ],
              },
              {
                type: 'category',
                label: '推進系',
                collapsed: true,
                link: { type: 'doc', id: 'rocket/propulsion/rocket-engine' },
                items: [
                  {
                    type: 'category',
                    label: '推進システム',
                    collapsed: true,
                    items: [
                      'rocket/propulsion/system/combustion-chamber',
                      'rocket/propulsion/system/isp',
                      'rocket/propulsion/system/laval-nozzle',
                      'rocket/propulsion/system/mass-ratio',
                      'rocket/propulsion/system/nozzle',
                      'rocket/propulsion/system/propellant',
                      'rocket/propulsion/system/propulsion',
                      'rocket/propulsion/system/rocket-equation',
                      'rocket/propulsion/system/thrust',
                      'rocket/propulsion/system/thruster',
                    ],
                  },
                  {
                    type: 'category',
                    label: '推進系の種類',
                    collapsed: true,
                    items: [
                      'rocket/propulsion/type/chemical-propulsion',
                      'rocket/propulsion/type/electric-propulsion',
                      'rocket/propulsion/type/ion-engine',
                      'rocket/propulsion/type/liquid-engine',
                    ],
                  },
                ],
              },

            ],
          },
        // 人工衛星
          {
            type: 'category',
            label: '人工衛星',
            link: { type: 'doc', id: 'category/satellite' },
            collapsed: true,
            items: [
              'satellite/satellite',
              {
                type: 'category',
                label: '人工衛星の種類',
                collapsed: true,
                items: [
                  'satellite/type/earth-observation-sat',
                  'satellite/type/space-station',
                  'satellite/type/cubesat',
                ],
              },
              {
                type: 'category',
                label: '人工衛星のシステム',
                collapsed: true,
                items: [
                  'satellite/system/orbit-insertion',
                  'satellite/system/satellite-bus',
                ],
              },
              {
                type: 'category',
                label: '実際の人工衛星一覧',
                collapsed: true,
                items: [
                  'satellite/index/himawari',
                  'satellite/index/iss',
                ],
              },
            ],
          },
        // 探査機
          {
            type: 'category',
            label: '探査機',
            link: { type: 'doc', id: 'category/explorer' },
            collapsed: true,
            items: [
              'explorer/space-probe',
              {
                type: 'category',
                label: '宇宙探査機の技術',
                collapsed: true,
                items: [
                  'explorer/technology/sample-return',
                  'explorer/technology/rendezvous',
                  'explorer/technology/flyby',
                  'explorer/technology/swingby',
                  'explorer/technology/capsule',
                  'explorer/technology/reentry',
                  'explorer/technology/heat-shield',
                  'explorer/technology/hovering',
                  'explorer/technology/lander',
                  'explorer/technology/payload-instrument',
                ],
              },
              {
                type: 'category',
                label: '実際の宇宙探査機のミッション',
                collapsed: true,
                items: [
                  'explorer/mission/hayabusa',
                  'explorer/mission/hayabusa2',
                  'explorer/mission/moon-probe',
                  'explorer/mission/new-horizons',
                  'explorer/mission/voyager',
                  'explorer/mission/rosetta',
                  'explorer/mission/pioneer',
                ],
              },
            ],
          },
        // 軌道
          {
            type: 'category',
            label: '軌道',
            link: { type: 'doc', id: 'category/orbit' },
            collapsed: true,
            items: [
              'orbit/orbit',
              {
                type: 'category',
                label: '軌道力学',
                collapsed: true,
                items: [
                  'orbit/mechanics/delta-v-budget',
                  'orbit/mechanics/orbital-elements',
                  'orbit/mechanics/eccentricity',
                  'orbit/mechanics/apogee',
                  'orbit/mechanics/perigee',
                  'orbit/mechanics/lagrange-point',
                  'orbit/mechanics/inclination',
                  'orbit/mechanics/escape-velocity',
                  'orbit/mechanics/first-cosmic-velocity',
                ],
              },
              {
                type: 'category',
                label: '軌道の種類',
                collapsed: true,
                items: [
                  'orbit/type/circular-orbit',
                  'orbit/type/geostationary-orbit',
                  'orbit/type/sun-synchronous-orbit',
                  'orbit/type/elliptical-orbit',
                  'orbit/type/free-return-trajectory',
                  'orbit/type/geocentric-orbit',
                  'orbit/type/hohmann-transfer-orbit',
                  'orbit/type/low-earth-orbit',
                  'orbit/type/parking-orbit',
                  'orbit/type/polar-orbit',
                  'orbit/type/suborbital-flight',
                  'orbit/type/transfer-orbit',
                ],
              },
              {
                type: 'category',
                label: '軌道の運用',
                collapsed: true,
                items: [
                  'orbit/operation/nodal-precession',
                  'orbit/operation/orbital-decay',
                  'orbit/operation/orbit-escape',
                  'orbit/operation/orbital-insertion',
                  'orbit/operation/orbital-resonance',
                ],
              },
            ],
          },
        // 制御
          {
            type: 'category',
            label: '制御',
            link: { type: 'doc', id: 'category/control' },
            collapsed: true,
            items: [
              {
                type: 'category',
                label: '制御技術',
                collapsed: true,
                items: [
                  'control/technology/attitude-control',
                  'control/technology/rendezvous-docking',
                ],
              },
            ],
          },
        // 通信
          {
            type: 'category',
            label: '通信',
            link: { type: 'doc', id: 'category/communication' },
            collapsed: true,
            items: [
              'communication/communication',
              {
                type: 'category',
                label: '通信技術',
                collapsed: true,
                items: [
                  'communication/technology/antenna',
                  'communication/technology/communication-delay',
                  'communication/technology/bit-rate',
                  'communication/technology/frequency-band',
                  'communication/technology/ka-band',
                  'communication/technology/x-band',
                  'communication/technology/s-band',
                ],
              },
              {
                type: 'category',
                label: '通信システム',
                collapsed: true,
                items: [
                  'communication/system/command',
                  'communication/system/telemetry',
                  'communication/system/ground-station',
                  'communication/system/dsn',
                ],
              },
              {
                type: 'category',
                label: '通信手法',
                collapsed: true,
                items: [
                  'communication/type/optical-communication',
                ],
              },
            ],
          }, 
      ],
    },
    {
      type: 'category',
      label: '宇宙開発ガイドブック　　　　　　もっと宇宙を学びたい人たちへ',
      link: { type: 'doc', id: 'guide/guidebook' },
      collapsed: false,
      items: [
      ],
    },
  ],
};


export default sidebars;
