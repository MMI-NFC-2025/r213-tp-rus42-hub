import { c as createComponent, a as createAstro, b as renderComponent, d as renderScript, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_CoYdonkq.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_H2DteM48.mjs';
import { $ as $$OffreCard } from '../chunks/OffreCard_Db9tCK9e.mjs';
import { f as filterByPrix, g as getOffres } from '../chunks/backend_BkXnwF-D.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let message = "";
  let offres = [];
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const minPrixRaw = data.get("minPrix")?.toString() || "0";
    const maxPrixRaw = data.get("maxPrix")?.toString() || "0";
    const minPrix = parseInt(minPrixRaw);
    const maxPrix = parseInt(maxPrixRaw);
    if (minPrix > 0 && maxPrix > 0 && maxPrix > minPrix) {
      offres = await filterByPrix(minPrix, maxPrix);
      if (offres.length === 0) {
        message = `Pas d'offres entre ${minPrix}\u20AC et ${maxPrix}\u20AC`;
      } else {
        message = `Liste des offres entre ${minPrix}\u20AC et ${maxPrix}\u20AC`;
      }
    } else {
      message = "Veuillez entrer des valeurs valides pour le prix.";
      offres = await getOffres();
    }
  } else {
    offres = await getOffres();
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Offres" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-5xl font-extrabold text-cyan-400 mb-4" style="font-family: 'Shojumaru', cursive;">
Offres
</h1> <a href="/offres/add" class="inline-block bg-green-600 text-white px-4 py-2 rounded-lg mb-6 hover:bg-green-700">
➕ Ajouter une offre
</a> <form action="/offres" method="POST" class="flex flex-col md:flex-row gap-4 mb-6 items-end"> <div class="flex flex-col"> <label class="text-green-900 font-semibold">Prix minimum</label> <input type="number" name="minPrix" placeholder="Prix minimum" class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"> </div> <div class="flex flex-col"> <label class="text-green-900 font-semibold">Prix maximum</label> <input type="number" name="maxPrix" placeholder="Prix maximum" class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"> </div> <input type="submit" value="Filtrer par prix" class="bg-cyan-400 text-white font-bold px-4 py-2 rounded-md hover:bg-cyan-500 cursor-pointer"> </form> ${message && renderTemplate`<p${addAttribute(`mt-2 font-semibold ${message.includes("Pas d") ? "text-red-500" : "text-green-600"}`, "class")}> ${message} </p>`}<p class="text-green-900 text-lg mb-4">
Voici nos dernières offres disponibles. Cliquez sur chaque annonce pour plus de détails.
</p> <p class="text-green-900">
Nous mettons régulièrement à jour nos listings pour vous proposer les meilleures opportunités.
</p> <button id="favori-button" class="bg-slate-600 rounded-lg text-white p-2 mt-6 mb-6">
Afficher les favoris
</button> <p class="text-green-900 mb-4">
Filtrer nos maisons :
<a href="/offres/surface/80" class="text-yellow-400 hover:underline">Surface ≥ 80 m²</a> |
<a href="/offres/prix/300000" class="text-yellow-400 hover:underline">Prix ≤ 300000 €</a> </p> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${offres.map((offre) => renderTemplate`<div class="offre"${addAttribute(offre.favori.toString(), "data-favori")}> ${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })} </div>`)} </div> ` })} ${renderScript($$result, "C:/Users/VivoBook/Documents/GitHub/r213-tp-rus42-hub/src/pages/offres/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/VivoBook/Documents/GitHub/r213-tp-rus42-hub/src/pages/offres/index.astro", void 0);

const $$file = "C:/Users/VivoBook/Documents/GitHub/r213-tp-rus42-hub/src/pages/offres/index.astro";
const $$url = "/offres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
