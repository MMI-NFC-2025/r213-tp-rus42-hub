import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate } from '../../chunks/astro/server_CoYdonkq.mjs';
import 'piccolore';
import 'clsx';
import { a as addOffre } from '../../chunks/backend_BkXnwF-D.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  let message = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const response = await addOffre(formData);
    message = response.message;
  }
  return renderTemplate`${maybeRenderHead()}<h1 class="text-lg">Ajouter une offre</h1> ${message && renderTemplate`<p>${message}</p>`} <form action="/offres/add" method="POST" enctype="multipart/form-data"> <input type="text" name="nomMaison" placeholder="Nom de la maison" required> <input type="number" name="prix" placeholder="Prix"> <input type="number" name="nbSdb" placeholder="Nombre de salles de bain"> <input type="number" name="nbChambres" placeholder="Nombre de chambres"> <input type="number" name="surface" placeholder="Superficie"> <input type="file" name="image"> <button type="submit">Ajouter</button> </form>`;
}, "C:/Users/VivoBook/Documents/GitHub/r213-tp-rus42-hub/src/pages/offres/add.astro", void 0);

const $$file = "C:/Users/VivoBook/Documents/GitHub/r213-tp-rus42-hub/src/pages/offres/add.astro";
const $$url = "/offres/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Add,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
