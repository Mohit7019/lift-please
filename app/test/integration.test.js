const test = require("node:test");
const assert = require("node:assert/strict");

test("basic sanity test", () => {
  assert.equal(1 + 1, 2);
});

test("API data structures are correct", () => {
  const ride = {
    customerName: "Test",
    pickupLocation: "Test pickup",
    dropLocation: "Test drop"
  };
  assert.ok(ride.customerName);
  assert.ok(ride.pickupLocation);
  assert.ok(ride.dropLocation);
});