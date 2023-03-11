import { defineConfig } from "astro/config";
import image from "@astrojs/image";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [image(), tailwind(), preact()]
  //   site: "movinghomestogether.com",
});