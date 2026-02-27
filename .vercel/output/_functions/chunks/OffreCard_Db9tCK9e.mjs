import { c as createComponent, a as createAstro, m as maybeRenderHead, e as addAttribute, b as renderComponent, r as renderTemplate } from './astro/server_CoYdonkq.mjs';
import 'piccolore';
import { $ as $$PbImage } from './PbImage_n4StqK48.mjs';

const $$Astro = createAstro();
const $$OffreCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OffreCard;
  const { offre } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative rounded-xl overflow-hidden shadow-lg p-6 backdrop-blur-md bg-yellow-200/20 border border-white/30 transition-shadow duration-300 hover:shadow-2xl"> <div class="absolute inset-0 pointer-events-none"> <div class="w-40 h-40 bg-pink-300/40 rounded-full blur-3xl absolute -top-10 -left-10"></div> <div class="w-32 h-32 bg-purple-300/30 rounded-full blur-2xl absolute top-20 right-5"></div> <div class="w-24 h-24 bg-blue-300/20 rounded-full blur-2xl absolute bottom-5 left-20"></div> </div> <div class="relative z-10"> <h2 class="text-red-500 text-2xl font-bold mb-2">${offre.nom_maison}</h2> ${offre.images?.length > 0 && renderTemplate`${renderComponent($$result, "PbImage", $$PbImage, { "record": offre, "recordImage": offre.images[0], "width": 400, "height": 300 })}`} <p class="text-green-900 mb-1">${offre.adresse}</p> <p class="text-green-900 mb-1">${offre.surface} m² • ${offre.nbChambres} chambres • ${offre.nbSdb} sdb</p> <p class="text-green-900 font-semibold text-lg">${offre.prix} €</p> </div> <a${addAttribute(`/offres/${offre.id}`, "href")} class="text-yellow-400 font-bold mt-2 inline-block hover:underline">
Voir plus
</a> </div>`;
}, "C:/Users/VivoBook/Documents/GitHub/r213-tp-rus42-hub/src/components/OffreCard.astro", void 0);

export { $$OffreCard as $ };
