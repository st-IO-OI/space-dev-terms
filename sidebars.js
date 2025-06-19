
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',             // docs/intro.md
    {
      type: 'category',
      label: 'ロケット',
      items: [
        'rocket/rocket',
      ],
    },
    {
      type: 'category',
      label: '人工衛星',
      items: [
        'satellite/satellite',
        'satellite/earth-observation-sat',
        'satellite/space-station',
        'satellite/cubesat',
      ],
    },
    {
      type: 'category',
      label: '探査機',
      items: [
        'explorer/space-probe',
        'explorer/hayabusa',
        'explorer/hayabusa2',
        'explorer/sample-return',
        'explorer/flyby',
      ],
    },
    {
      type: 'category',
      label: '軌道',
      items: [
        'orbit/orbit',
        'orbit/circular-orbit',
        'orbit/orbital-elements',
        'orbit/geostationary-orbit',
        'orbit/sun-synchronous-orbit',
        'orbit/first-cosmic-velocity',
      ],
    },
    {
      type: 'category',
      label: '制御',
      items: [
        'control/attitude-control',
      ],
    },
    {
      type: 'category',
      label: '推進',
      items: [
        'propulsion/propulsion',
        'propulsion/rocket-engine',
        'propulsion/chemical-propulsion',
        'propulsion/electric-propulsion',
      ],
    },
    {
      type: 'category',
      label: '通信',
      items: [
        'communication/antenna',
        'communication/communication-delay',
        'communication/ground-station',
        'communication/x-band',
      ],
    },
    {
      type: 'category',
      label: '歴史',
      items: [
        'history/space-history',
        'history/hideo-itokawa',
      ],
    },
  ],
};


export default sidebars;
