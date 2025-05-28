import connection from "../configs/db.mjs";

const getHomePage = async (req, res) => {
  // A simple SELECT query
  res.render("home.ejs");
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

export { getHomePage, postCreateUser, createUserForm };
