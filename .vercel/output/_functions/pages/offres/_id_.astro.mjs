import { c as createComponent, a as createAstro, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CoYdonkq.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_H2DteM48.mjs';
import { $ as $$PbImage } from '../../chunks/PbImage_n4StqK48.mjs';
import { b as getOffre } from '../../chunks/backend_BkXnwF-D.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const offre = await getOffre(id);
  return renderTemplate`${offre ? renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": offre.nom_maison }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<h1 class="text-4xl font-extrabold text-yellow-400 mb-6">${offre.nom_maison}</h1><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">${offre.images?.map((img) => renderTemplate`${renderComponent($$result2, "PbImage", $$PbImage, { "record": offre, "recordImage": img, "width": 400, "height": 300 })}`)}</div><ul class="space-y-2 text-green-900"><li><strong>Adresse :</strong>${offre.adresse}</li><li><strong>Surface :</strong>${offre.surface} m²</li><li><strong>Chambres :</strong>${offre.nbChambres}</li><li><strong>Salles de bain :</strong>${offre.nbSdb}</li><li><strong>Prix :</strong>${offre.prix} €</li></ul>` })}` : renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Offre introuvable" }, { "default": async ($$result2) => renderTemplate`<h1 class="text-2xl font-bold text-red-500">Offre non trouvée</h1><p>Cette maison n'existe pas ou a été supprimée.</p>` })}`}`;
}, "C:/Users/VivoBook/Documents/GitHub/r213-tp-rus42-hub/src/pages/offres/[id].astro", void 0);

const $$file = "C:/Users/VivoBook/Documents/GitHub/r213-tp-rus42-hub/src/pages/offres/[id].astro";
const $$url = "/offres/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
