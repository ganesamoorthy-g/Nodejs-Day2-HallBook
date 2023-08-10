// Assuming UserModel is defined in the "../Models/Users.model" file
const UserModel = require("../Models/Users.model");

const UserRouter = require("express").Router();

// GET ALL THE USERS
UserRouter.get("/", (req, res, next) => {
  UserModel.find()
    .then((cursor) => {
      if (cursor && cursor.length > 0) {
        return res.status(200).json({
          data: cursor,
          success: true,
          message: "Users fetched successfully!!!",
        });
      } else {
        return res.status(200).json({
          data: [],
          success: true,
          message: "No Data Found!!!",
        });
      }
    })
    .catch((err) => {
      return res.status(401).json({
        success: false,
        message: "Error Fetching Users Data!!!",
        error: err,
      });
    });
});

// CREATE A USER
UserRouter.post("/create", (req, res, next) => {
  const data = req.body;

  const User = new UserModel(data);
  User.save()
    .then((result) => {
      if (result && result._id) {
        return res.status(200).json({
          message: "User Created Successfully!!",
          data: result,
        });
      }
    })
    .catch((err) => {
      return res.status(401).json({
        message: "Alas! Error Creating User!!",
        error: err,
      });
    });
});

module.exports = UserRouter;
