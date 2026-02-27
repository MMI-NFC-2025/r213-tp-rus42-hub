import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BwDSyeRp.mjs';
import { manifest } from './manifest_C3SEkP8N.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/offres/add.astro.mjs');
const _page2 = () => import('./pages/offres/prix/_prix_.astro.mjs');
const _page3 = () => import('./pages/offres/surface/_surface_.astro.mjs');
const _page4 = () => import('./pages/offres/_id_.astro.mjs');
const _page5 = () => import('./pages/offres.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/offres/add.astro", _page1],
    ["src/pages/offres/prix/[prix].astro", _page2],
    ["src/pages/offres/surface/[surface].astro", _page3],
    ["src/pages/offres/[id].astro", _page4],
    ["src/pages/offres/index.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "bdc8f959-1500-4e46-ae52-db4357ecacc3",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
