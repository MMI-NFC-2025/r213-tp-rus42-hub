import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CoYdonkq.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_H2DteM48.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Accueil" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-5xl font-extrabold text-cyan-400 mb-4" style="font-family: 'Shojumaru', cursive;">Accueil</h1> <p class="text-green-900 text-lg mb-4">
Bienvenue sur notre agence immobilière ! Découvrez les meilleures offres pour trouver votre maison ou appartement idéal.
</p> <p class="text-green-900">
Nous vous accompagnons dans toutes les étapes de votre recherche immobilière.
</p> ` })}`;
}, "C:/Users/VivoBook/Documents/GitHub/r213-tp-rus42-hub/src/pages/index.astro", void 0);

const $$file = "C:/Users/VivoBook/Documents/GitHub/r213-tp-rus42-hub/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
