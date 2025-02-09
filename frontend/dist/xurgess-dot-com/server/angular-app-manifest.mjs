
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
    'index.csr.html': {size: 66045, hash: '168123ae800553a233db745334a857b2b3de671204e166e81b630ee85c682c79', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17205, hash: '450f5776325cc8f708dd9145a9daaf8d3138765e0b1966b14aa13bf9abe75708', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IMIPARNH.css': {size: 94442, hash: 'HHvDv3+Dg7c', text: () => import('./assets-chunks/styles-IMIPARNH_css.mjs').then(m => m.default)}
  },
};
