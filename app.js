const express = require("express");
const { sequelize, User, Post } = require("./models");

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
    let users = await User.findAll();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong");
  }
});

app.get("/users/:uuid", async (req, res) => {
  try {
    const uuid = req.params.uuid;
    let user = await User.findOne({
      where: { uuid },
      include: "posts"
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong");
  }
});

app.post("/posts", async (req, res) => {
  const { userUuid, body } = req.body;
  try {
    const user = await User.findOne({ where: { uuid: userUuid } });
    let post = await Post.create({ body, userId: user.id });

    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

app.get("/posts", async (req, res) => {
  try {
    let posts = await Post.findAll({ include: [{ model: User, as: "user" }] });

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.listen({ port: 5000 }, async () => {
  console.log("running on port 5000");
  await sequelize.authenticate();
  console.log("database connected");
});
async function main() {}

main();
