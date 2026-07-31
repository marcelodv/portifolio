// eslint-config-next 16 já exporta flat config (inclui as regras de TypeScript),
// então não é preciso FlatCompat.
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextCoreWebVitals,
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
];

export default eslintConfig;
