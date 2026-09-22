import { spawnSync } from "node:child_process";
import { cpSync, rmSync } from "node:fs";
// Project Pages URL: https://devanshujamwal.github.io/
// Set NEXT_PUBLIC_BASE_PATH="" when moving to a root-domain repository.
const result = spawnSync(process.execPath, ["scripts/export-static.mjs"], {
  stdio: "inherit",
  env: { ...process.env, NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH ?? "" },
});
if (result.status !== 0) process.exit(result.status || 1);
rmSync("docs", { recursive: true, force: true });
cpSync("out", "docs", { recursive: true });
