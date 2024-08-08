const mongoose = require("mongoose");
const { DATABASE_URL } = require("./config");

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log("connection failed");
  });

// const messageSchema = new mongoose.Schema({
//   email: String,
//   subject: String,
//   message: String,
// });
// const Message = mongoose.model("Message", messageSchema);

// const dataSchema = new mongoose.Schema({
//   end_year: Number,
//   intensity: Number,
//   sector: String,
//   topic: String,
//   insight: String,
//   url: String,
//   region: String,
//   start_year: Number,
//   impact: Number,
//   added: Date,
//   published: Date,
//   country: String,
//   relevance: Number,
//   pestle: String,
//   source: String,
//   title: String,
//   likelihood: Number,
// });
// const Data = mongoose.model("Data", dataSchema);

const dataSchema = new mongoose.Schema({
  title: { type: String },
  domain: { type: String },
  homepage_url: { type: String },
  image: { type: String },
  facebook_url: { type: String },
  twitter_url: { type: String },
  linkedin_url: { type: String },
  region: { type: String },
  country_code: { type: String },
  paragraph: { type: String }
});
const Data = mongoose.model("organizationDataTuple", dataSchema);

module.exports = { Data };






