import { c as createComponent, a as createAstro, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CoYdonkq.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/Layout_H2DteM48.mjs';
import { $ as $$OffreCard } from '../../../chunks/OffreCard_Db9tCK9e.mjs';
import { g as getOffres } from '../../../chunks/backend_BkXnwF-D.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$surface = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$surface;
  const { surface } = Astro2.params;
  const allOffres = await getOffres();
  const filteredOffres = allOffres.filter((offre) => offre.surface >= Number(surface));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": `Maisons \u2265 ${surface} m\xB2` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold text-cyan-400 mb-4">Maisons avec surface ≥ ${surface} m²</h1> ${filteredOffres.length === 0 ? renderTemplate`<p class="text-green-900">Aucune maison ne correspond à ce critère.</p>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${filteredOffres.map((offre) => renderTemplate`${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })}`)} </div>`}` })}`;
}, "C:/Users/VivoBook/Documents/GitHub/r213-tp-rus42-hub/src/pages/offres/surface/[surface].astro", void 0);

const $$file = "C:/Users/VivoBook/Documents/GitHub/r213-tp-rus42-hub/src/pages/offres/surface/[surface].astro";
const $$url = "/offres/surface/[surface]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$surface,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
