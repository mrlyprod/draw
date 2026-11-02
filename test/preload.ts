import { existsSync, readFileSync } from "node:fs";

const CORE = "@mrlyprod/core";

const WASM = new URL(`../node_modules/${CORE}/pkg/mrly_core_js_bg.wasm`, import.meta.url);

if (existsSync(WASM)) {
  const core = await import(CORE);
  core.initSync({ module: readFileSync(WASM) });
} else {
  console.warn(`test: no wasm under node_modules/${CORE}/pkg; rust.test.ts fails until ../core/js is built`);
}
