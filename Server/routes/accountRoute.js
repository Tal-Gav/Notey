import express from "express";
import { Account } from "../models/accountModel.js";

const router = express.Router();

// Route for Save a new Account
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.username ||
      !request.body.password ||
      !request.body.fullName
    ) {
      return response.status(400).send({
        message: "Send all required fields: username, password, fullName.",
      });
    }

    const newAccount = {
      username: request.body.username,
      password: request.body.password,
      fullName: request.body.fullName,
    };

    const account = await Account.create(newAccount);

    return response
      .status(201)
      .send("Account created successfully. " + account);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Accounts from database
router.get("/", async (request, response) => {
  try {
    const accounts = await Account.find({});

    return response.status(200).json({
      count: accounts.length,
      data: accounts,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Account from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const account = await Account.findById(id);

    return response.status(200).json(account);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Account
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.username ||
      !request.body.password ||
      !request.body.fullName
    ) {
      return response.status(400).send({
        message: "Send all required fields: username, password, fullName.",
      });
    }

    const { id } = request.params;

    const result = await Account.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Account not found" });
    }

    return response
      .status(200)
      .send({ message: "Account updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a Account
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Account.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Account not found" });
    }

    return response
      .status(200)
      .send({ message: "Account deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
