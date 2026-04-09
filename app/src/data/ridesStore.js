const rides = [];

function createRide(ride) {
  rides.push(ride);
  return ride;
}

function getRides() {
  return rides;
}

module.exports = {
  createRide,
  getRides
};