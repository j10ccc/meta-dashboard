import { defineConfig, presetAttributify, presetIcons , presetUno } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons()
  ],
  shortcuts: [{
    "border-base": "border-light-700 dark:border-[#2a2a2a]",
    "border-b-base": "border-b-light-700 dark:border-b-[#2a2a2a]",
    "border-base-100": "border-light-900 dark:border-[#404040]",
  }]
});
