import j10c from "@j10c/eslint-config";

export default [
  ...await j10c(),
  {
    ignores: ["dist/"]
  }
];
