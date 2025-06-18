
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',             // docs/intro.md
    {
      type: 'category',
      label: 'ロケット',
      items: [
        'rocket/h3-rocket',
      ],
    },
    {
      type: 'category',
      label: '人工衛星',
      items: [
        'satellite/himawari',
        'satellite/iss'
      ],
    },
    {
      type: 'category',
      label: '探査機',
      items: [
        'explorer/hayabusa2',
      ],
    },
    {
      type: 'category',
      label: '軌道',
      items: [
        'orbit/low-earth-orbit',
        'orbit/geostationary-orbit',
        'orbit/geocentric-orbit',
        'orbit/apogee',
        'orbit/perigee',
        'orbit/delta-v-budget',
        'orbit/eccentricity',
        'orbit/escape-velocity',
        'orbit/free-return-trajectory',
        'orbit/hohmann-transfer-orbit',
        'orbit/inclination',
        'orbit/lagrange-point',
        'orbit/nodal-precession',
        'orbit/orbital-decay',
        'orbit/orbital-insertion',
        'orbit/orbital-resonance',
        'orbit/parking-orbit',
        'orbit/polar-orbit',
        'orbit/suborbital-flight',
        'orbit/sun-synchronous-orbit',
        'orbit/transfer-orbit',
      ],
    },
    {
      type: 'category',
      label: '推進',
      items: [
        'propulsion/ion-engine',
        'propulsion/chemical-rocket',
      ],
    },
    {
      type: 'category',
      label: '通信',
      items: [
        'communication/antenna',
      ],
    },
    {
      type: 'category',
      label: '歴史',
      items: [
        'history/itokawa',
      ],
    },
  ],
};


export default sidebars;
