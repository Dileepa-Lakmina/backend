import Users from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "name", "email", "userrole", "refresh_token"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};
