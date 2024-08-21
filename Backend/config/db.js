const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const dbURI = "mongodb+srv://ketangoyal1042:Ketan123@cluster0.kd0vspi.mongodb.net/banking";
const connectToMongoose = async () => {
  try {
    const db = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to Mongoose Through ${db.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
  connectToMongoose,
};
