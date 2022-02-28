const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/mland";

main().catch((err) =>
  console.log(`Database failed to start due to the following: \n${err}`)
);

async function main() {
  await mongoose.connect(url);
  console.log(`Database Connected`);
}

module.exports = mongoose;
