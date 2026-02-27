import { c as createComponent, a as createAstro, b as renderComponent, r as renderTemplate } from './astro/server_CoYdonkq.mjs';
import 'piccolore';
import { c as getImageUrl } from './backend_BkXnwF-D.mjs';
import { $ as $$Image } from './_astro_assets_BMnVP2cu.mjs';

const $$Astro = createAstro();
const $$PbImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PbImage;
  const { record, recordImage, width = 400, height = 300 } = Astro2.props;
  const imageURL = await getImageUrl(record, recordImage);
  return renderTemplate`${imageURL && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": imageURL, "alt": record.nom_maison || "Image", "width": width, "height": height, "class": "rounded-lg mb-4" })}`}`;
}, "C:/Users/VivoBook/Documents/GitHub/r213-tp-rus42-hub/src/components/PbImage.astro", void 0);

export { $$PbImage as $ };
