const express = require("express");
const { sequelize, User } = require("./models");

const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {
  const { name, email, role } = req.body;

  try {
    const user = await User.create({ name, email, role });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

app.get("/users", async (req, res) => {
  try {
    
    let users = await User.findAll()
  
    return res.status(200).json(users)
  } catch (error) {
      console.log(error)
      return res.status(500).json("Something went wrong")
  }
})

app.listen({ port: 5000 }, async () => {
  console.log("running on port 5000");
  await sequelize.authenticate();
  console.log("database connected");
});
async function main() {}

main();
