import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="/datum_bio_logo2.png" alt="Logo" style={{ height: '70px' }} />
    </div>
  ),
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
  useNextSeoProps() {
    return {
      titleTemplate: 'datum.bio – Documentation'
    }
  }
}

export default config;
