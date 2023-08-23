import dummyUsers from "./data.js";

import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to Rewards VPN");
  res.end();
});

app.get("/users", (req, res) => {
  res.status(200);
  res.send(dummyUsers);
  res.end();
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = dummyUsers.find((user) => user.id === Number(id));
  if (user) {
    res.status(200);
    res.send(user);
  } else {
    res.status(404);
    res.send({ message: "User not found." });
  }
  res.end();
});

app.post("/users/add", (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
  };
  res.status(201);
  res.send(newUser);
  res.end();
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
