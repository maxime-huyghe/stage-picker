import adapter from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    prerender: {
      default: true,
    },
    adapter: adapter(),
    paths: {
      // base: dev ? "" : "/stage-picker",
    },
  },
};

export default config;
