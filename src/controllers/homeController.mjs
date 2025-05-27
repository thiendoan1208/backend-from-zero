import connection from "../configs/db.mjs";

const getHomePage = async (req, res) => {
  // A simple SELECT query
  res.render("home.ejs");
};

const getABC = (req, res) => {
  res.render("sample.ejs");
};

// Create user
const postCreateUser = (req, res) => {
  console.log(req.body);
  res.send("Created new user")
};

export { getHomePage, getABC, postCreateUser };
