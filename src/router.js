const express = require("express");
const router = express.Router();
const Info = require("./models/Info");

router.get("/", () => {
  console.log("Get all names and emails");
});

router.post("/create", async (req, res) => {
  const { firstName, lastName, email, phone } = req.body;
  let emptyFields = [];

  if (!firstName) {
    emptyFields.push("firstName");
  }
  if (!lastName) {
    emptyFields.push("lastName");
  }
  if (!email) {
    emptyFields.push("email");
  }
  if (!phone) {
    emptyFields.push("phone");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const info = await Info.create({
      firstName,
      lastName,
      email,
      phone,
    });
    res.status(200).json(info);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:id", () => {
  console.log("Get a name and an email");
});

router.delete("/", () => {
  console.log("Remove a name and an email");
});

module.exports = router;
