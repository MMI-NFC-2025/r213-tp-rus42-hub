import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as createAstro, n as renderHead, b as renderComponent, o as renderSlot } from './astro/server_CoYdonkq.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex gap-6 p-4 bg-yellow-50 shadow-md rounded-md"> <a href="/" class="text-yellow-600 font-semibold hover:underline">Accueil</a> <a href="/offres" class="text-yellow-600 font-semibold hover:underline">Offres</a> </nav>`;
}, "C:/Users/VivoBook/Documents/GitHub/r213-tp-rus42-hub/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { titre } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${titre}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Shojumaru&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-yellow-50 text-green-900 font-sans"> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-4xl mx-auto p-8"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="bg-yellow-200 text-center p-4 mt-8">
© 2026 — Agence immobilière
</footer> </body></html>`;
}, "C:/Users/VivoBook/Documents/GitHub/r213-tp-rus42-hub/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
