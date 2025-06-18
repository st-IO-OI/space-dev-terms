
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',             // docs/intro.md
    {
      type: 'category',
      label: '軌道関連用語',
      items: [
        'orbit/low-earth-orbit',
        'orbit/geostationary-orbit',
        'orbit/geocentric-orbit',
      ],
    },
    {
      type: 'category',
      label: '推進関連用語',
      items: [
        'propulsion/ion-engine',
        'propulsion/chemical-rocket',
      ],
    },
  ],
};


export default sidebars;
