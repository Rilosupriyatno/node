import Users from "../models/UserModel.js";
import bcrypt, { hash } from "bcrypt";
// import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["uuid", "name", "email", "role"],
    });
    res.json(users);
  } catch (error) {
    console.log("error");
  }
};
export const getUserById = async (req, res) => {
  try {
    const users = await Users.findOne({
      attributes: ["uuid", "name", "email", "role"],
      where: { uuid: req.params.uuid },
    });
    res.json(users);
  } catch (error) {
    console.log("error");
  }
};
// export const Register = async (req, res) => {
//   const { name, email, password, confPassword, role } = req.body;
//   if (password !== confPassword)
//     return res.status(400).json({ msg: "Password tidak cocok" });
//   const salt = await bcrypt.genSalt();
//   const hashPassword = await bcrypt.hash(password, salt);
//   try {
//     await Users.create({
//       name: name,
//       email: email,
//       password: hashPassword,
//       role: role,
//     });
//     res.json({ msg: "Register berhasil" });
//   } catch (error) {
//     res.status(400).json({ msg: error.message });
//   }
// };

export const Update = async (req, res) => {
  const user = await Users.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  let hashPassword;
  if (password === "" || password === null) {
    hashPassword = user.password;
  } else {
    hashPassword = await bcrypt.hash(password, salt);
  }
  if (password !== confPassword)
    return res.status(400).json({ msg: "Password tidak cocok" });
  try {
    await Users.update(
      {
        name: name,
        email: email,
        password: hashPassword,
        role: role,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    res.json({ msg: "Update Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const Delete = async (req, res) => {
  const user = await Users.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  try {
    await Users.destroy({
      where: {
        id: user.id,
      },
    });
    res.status(200).json({ msg: "User berhasil dihapus" });
  } catch (error) {
    res.status(400).json({ msg: "Internal server error" });
  }
};
