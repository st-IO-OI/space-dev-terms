
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  defaultSidebar: [
    'intro',             // docs/intro.md
    {
      type: 'category',
      label: '宇宙開発ナビ',
      link: { type: 'doc', id: 'navi/intro-to-space-dev' },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '宇宙開発の全体像',
          link: { type: 'doc', id: 'navi/space-dev-overview' },
          collapsed: true,
          items: [
            'navi/space-dev-overview/space-engineering',
            'navi/space-dev-overview/control-software',
            'navi/space-dev-overview/earth-observation',
            'navi/space-dev-overview/mission-operations',
            'navi/space-dev-overview/data-science-ai',
            'navi/space-dev-overview/space-business',
            'navi/space-dev-overview/space-communication',
            'navi/space-dev-overview/space-design',
            'navi/space-dev-overview/space-education',
            'navi/space-dev-overview/space-law-policy',
            'navi/space-dev-overview/space-medicine',
          ],
        },
        'navi/what-is-needed',
        'navi/basic-knowledge',
        'navi/region-of-expertise',
        'navi/how-to-commit',
      ],
    },
    {
      type: 'category',
      label: '宇宙開発用語集',
      link: { type: 'doc', id: 'glossary' },
      collapsed: false,
      items: [
          'glossary-index',
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
              'glossary/astronaut',
              'glossary/space-suit',
              'glossary/docking',
              'glossary/space-astronomy',
              {
                type: 'category',
                label: '歴史',
                items: [
                  'glossary/history/hideo-itokawa',
                  'glossary/history/apollo-11',
                  'glossary/history/apollo-program',
                  'glossary/history/sputnik',
                ],
              },
            ],
          },
        // 宇宙環境
          {
            type: 'category',
            label: '宇宙開発一般',
            link: { type: 'doc', id: 'category/environment' },
            collapsed: true,
            items: [
              'environment/cosmic-rays', 
              'environment/geomagnetic-field', 
              'environment/solar-flare', 
              'environment/solar-wind', 
              'environment/space-habitation', 
            ],
          },
        // ロケット
          {
            type: 'category',
            label: 'ロケット',
            link: { type: 'doc', id: 'category/rocket' },
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
                  'rocket/launch/launch-pad',
                  'rocket/launch/launch-window',
                  'rocket/launch/launch-capacity',
                ],
              },
              {
                type: 'category',
                label: '推進系',
                collapsed: true,
                link: { type: 'doc', id: 'category/propulsion' },
                items: [
                  "rocket/propulsion/rocket-engine",
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
                  'satellite/type/weather-sat',
                  'satellite/type/geostationary-sat',
                  'satellite/type/communication-satellite',
                  'satellite/type/navigation-satellite',
                  'satellite/type/space-debris',
                  'satellite/type/commercial-sat',
                  'satellite/type/low-orbit-sat',
                  'satellite/type/satellite-constellation',
                ],
              },
              {
                type: 'category',
                label: '人工衛星のシステム',
                collapsed: true,
                items: [
                  'satellite/system/orbit-insertion',
                  'satellite/system/satellite-bus',
                  'satellite/system/satellite-data',
                  'satellite/system/solar-array-paddle',
                  'satellite/system/remote-sensing',
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
                  'explorer/technology/data-recorder',
                  'explorer/technology/hovering',
                  'explorer/technology/lander',
                  'explorer/technology/observation-instrument',
                ],
              },
              {
                type: 'category',
                label: '宇宙探査機の種類',
                collapsed: true,
                items: [
                  'explorer/type/asteroid-exploration',
                  'explorer/type/astrobiology-exploration',
                  'explorer/type/planetary-exploration',
                  'explorer/type/moon-probe',
                ],
              },
              {
                type: 'category',
                label: '実際のミッション',
                collapsed: true,
                items: [
                  'explorer/mission/hayabusa',
                  'explorer/mission/hayabusa2',
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
                  'orbit/type/medium-earth-orbit',
                  'orbit/type/high-earth-orbit',
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
                  'orbit/operation/orbit-calculation',
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
              'control/mission-design', 
              'control/system-engineering', 
              {
                type: 'category',
                label: '制御技術',
                collapsed: true,
                items: [
                  'control/technology/attitude-control',
                  'control/technology/rendezvous-docking',
                  'control/technology/fail-safe',
                  'control/technology/pid-control',
                ],
              },
            ],
          },
        // 物理
          {
            type: 'category',
            label: '物理',
            link: { type: 'doc', id: 'category/physics' },
            collapsed: true,
            items: [
              'physics/gravity',
              'physics/microgravity',
              'physics/zero-gravity',
              'physics/g-force',
              'physics/acceleration',
              'physics/gravitational-acceleration',
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
                  'communication/system/ttc',
                  'communication/system/downlink',
                  'communication/system/uplink',
                ],
              },
              {
                type: 'category',
                label: '通信手法',
                collapsed: true,
                items: [
                  'communication/type/optical-communication',
                  'communication/type/laser-communication',
                ],
              },
            ],
          }, 
        // ビジネス
          {
            type: 'category',
            label: '宇宙ビジネス',
            link: { type: 'doc', id: 'category/business' },
            collapsed: true,
            items: [
              'business/private-space-utilization', 
              'business/space-business', 
              {
                type: 'category',
                label: '種類',
                collapsed: true,
                items: [
                  'business/category/asteroid-mining',
                  'business/category/on-orbit-service',
                  'business/category/satellite-data-business',
                  'business/category/space-entertainment',
                  'business/category/space-tourism',
                ],
              },
              {
                type: 'category',
                label: '企業',
                collapsed: true,
                items: [
                  'business/company/spacex',
                  'business/company/blue-origin',
                  'business/company/virgin-galatic',
                ],
              },
            ],
          },
        // 宇宙法
          {
            type: 'category',
            label: '宇宙法',
            link: { type: 'doc', id: 'category/policy' },
            collapsed: true,
            items: [
              'policy/space-policy', 
              'policy/space-law', 
              'policy/space-resources-law', 
              'policy/commercial-space-law', 
              'policy/outer-space-treaty', 
              'policy/moon-agreement', 
              'policy/international-cooperation', 
            ],
          },
        // 組織
          {
            type: 'category',
            label: '宇宙開発一般',
            link: { type: 'doc', id: 'category/organization' },
            collapsed: true,
            items: [
              'organization/jaxa',
              'organization/nasa',
              'organization/esa',
            ],
          },
      ],
    },
    {
      type: 'category',
      label: '宇宙開発ガイドブック',
      link: { type: 'doc', id: 'guide/guidebook' },
      collapsed: false,
      items: [
        'guide/voice-of-frontline',
        'guide/how-to-work',
      ],
    },
    'privacy-policy',
    'disclaimer',
    'contact-link',
  ],
  kidsSidebar: [
  ],
  naviSidebar: [
  ],
  glossarySidebar: [
  ],
  guidebookSidebar: [
  ],
};


export default sidebars;
