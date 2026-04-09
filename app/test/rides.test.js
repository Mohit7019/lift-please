const test = require("node:test");
const assert = require("node:assert/strict");

test("basic sanity test", async () => {
  assert.equal(1 + 1, 2);
});