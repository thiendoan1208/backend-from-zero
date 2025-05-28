import connection from "../configs/db.mjs";
import { getAllUser } from "../services/CRUDservice.mjs";

const getHomePage = async (req, res) => {
  try {
    let results = await getAllUser();
    res.render("home.ejs", { listUser: results });
  } catch (error) {
    console.log(error);
  }
};

// Create user
const createUserForm = (req, res) => {
  res.render("create-user.ejs");
};

const postCreateUser = async (req, res) => {
  let { name, email, city } = req.body;
  // Using placeholders
  try {
    await connection.query(
      `insert into Users 
      (email, name, city) values (?, ?, ?)`,
      [email, name, city]
    );
    res.send("Create user success!");
  } catch (err) {
    console.log(err);
  }
};

// Edit user
const getUpdatePage = (req, res) => {
  const userID = req.params.id;

  res.render("edit-user.ejs");
};

export { getHomePage, postCreateUser, createUserForm, getUpdatePage };
