import express from "express";
import { Account } from "../models/accountModel.js";
import { authenticateAccount, generateAccessToken } from "../utils/auth.js";

const router = express.Router();

// Route for Save a new Account
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.firstName ||
      !request.body.lastName ||
      !request.body.email ||
      !request.body.password
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: firstName, lastName, email, password.",
      });
    }

    const newAccount = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
    };

    const account = await Account.create(newAccount);

    const token = generateAccessToken(newAccount.email);
    return response.status(201).json(token);
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
router.get("/details", authenticateAccount, async (request, response) => {
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
      !request.body.firstName ||
      !request.body.lastName ||
      !request.body.email ||
      !request.body.password
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: firstName, lastName, email, password.",
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
