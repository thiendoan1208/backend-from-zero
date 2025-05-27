import connection from "../configs/db.mjs";

const getHomePage = async (req, res) => {
  // A simple SELECT query
 res.render("home.ejs")
};

const getABC = (req, res) => {
  res.render("sample.ejs");
};

export { getHomePage, getABC };
