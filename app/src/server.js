const app = require("./app");

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Lift-Please API running on port ${PORT}`);
  });
}

module.exports = app;