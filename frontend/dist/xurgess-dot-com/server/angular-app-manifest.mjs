
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-HB5QUFJW.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 66045, hash: 'd8424e256452a2e0aeb1c73824ae85b17615223bc3d7615a6392915ee3cffa62', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17205, hash: '155741c066ad97596b324e48ac22f5be7422795ad2bf4460ee6d0f1cb6451fb3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IMIPARNH.css': {size: 94442, hash: 'HHvDv3+Dg7c', text: () => import('./assets-chunks/styles-IMIPARNH_css.mjs').then(m => m.default)}
  },
};
