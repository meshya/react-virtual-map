import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/react-virtual-map/index.tsx"],
  format: ["cjs", "esm"], // Build for commonJS and ESmodules
  dts: true, // Generate declaration file (.d.ts)
  splitting: true,
  sourcemap: false,
  clean: true,
});