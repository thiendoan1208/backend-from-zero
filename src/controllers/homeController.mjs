import connection from "../configs/db.mjs";

const getHomePage = async (req, res) => {
  // A simple SELECT query
  try {
    const [results, fields] = await connection.query("SELECT * from Users u;");
    res.send(JSON.stringify(results));
  } catch (err) {
    console.log(err);
  }
};

const getABC = (req, res) => {
  res.render("sample.ejs");
};

export { getHomePage, getABC };
