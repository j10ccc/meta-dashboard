import { defineConfig, presetAttributify, presetIcons , presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons()
  ],
  shortcuts: [{
    "border-base": "border-light-700 dark:border-[#2a2a2a]",
    "border-base-100": "border-light-900 dark:border-[#404040]",
    "input-base": "bg-transparent placeholder:op-50 dark:placeholder:op-20 focus:(ring-0 outline-none) resize-none"
  }],
  preflights: [{
    getCSS: () => `
      * {
        border-width: 0;
        border-style: solid;
      }
    `
  }]
});
