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

app.listen({ port: 5000 }, async () => {
  console.log("running on port 5000");
  await sequelize.sync({ force: true });
  console.log("database synced");
});
async function main() {}

main();
