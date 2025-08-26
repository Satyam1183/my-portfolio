const mongoose = require("mongoose");
const Skill = require("../models/portfolio");
const skills = require("../initialize/data");


const MONGO_URL = "mongodb://127.0.0.1:27017/portfolioDB";

async function seedSkills() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ MongoDB Connected");

    await Skill.deleteMany({});
    await Skill.insertMany(skills);

    console.log("✅ Skills inserted successfully");
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await mongoose.connection.close();
  }
}

seedSkills();

