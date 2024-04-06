import mongoose from "mongoose";
import bcrypt from "bcrypt";

const accountSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

accountSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

accountSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user) {
    const passwordAuth = await bcrypt.compare(password, user.password);
    if (passwordAuth) {
      return user;
    }
    throw Error("Incorrect password.");
  }
  throw Error("Account does not exist.");
};
// Create accounts collection
export const Account = mongoose.model("Account", accountSchema);
