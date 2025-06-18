
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',             // docs/intro.md
    'geo',           // docs/静止軌道.md
    {
      type: 'category',
      label: '軌道関連用語',
      items: [
        'leo',
        'gco',
      ],
    },
    {
      type: 'category',
      label: '推進関連用語',
      items: [
        'ion-engine',
        'chemical-rocket',
      ],
    },
  ],
};


export default sidebars;
