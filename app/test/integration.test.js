const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");

test("health endpoint responds when app starts", async () => {
  const proc = spawn("node", ["src/server.js"], { cwd: process.cwd(), shell: true });

  await new Promise((resolve) => setTimeout(resolve, 1500));

  const res = await fetch("http://localhost:3000/health");
  const data = await res.json();

  assert.equal(res.status, 200);
  assert.equal(data.success, true);

  proc.kill();
});