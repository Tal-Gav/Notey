import { Account } from "../models/accountModel.js";
import { generateAccessToken } from "../utils/auth.js";

// Create a new account
export const createAccount = async (req, res) => {
  try {
    if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.email ||
      !req.body.password
    ) {
      return res.status(400).send({
        message:
          "Send all required fields: firstName, lastName, email, password.",
      });
    }

    const newAccount = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    };

    const account = await Account.create(newAccount);

    const token = generateAccessToken(newAccount.email);
    return res.status(201).json(token);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Get all the existing accounts
export const getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({});

    return res.status(200).json({
      count: accounts.length,
      data: accounts,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Get an existing account by id
export const getAccountById = async (req, res) => {
  try {
    const { id } = req.params;

    const account = await Account.findById(id);

    return res.status(200).json(account);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Update an existing account by id
export const updateAccount = async (req, res) => {
  try {
    if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.email ||
      !req.body.password
    ) {
      return res.status(400).send({
        message:
          "Send all required fields: firstName, lastName, email, password.",
      });
    }

    const { id } = req.params;

    const result = await Account.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Account not found" });
    }

    return res.status(200).send({ message: "Account updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Delete an existing account by id
export const deleteAccountById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Account.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Account not found" });
    }

    return res.status(200).send({ message: "Account deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
