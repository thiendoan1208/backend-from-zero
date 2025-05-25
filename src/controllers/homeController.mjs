const getHomePage = (req, res) => {
  // process data
  // call model
  res.send("Hello World!");
};

const getABC = (req, res) => {
  res.render("sample.ejs");
};

export { getHomePage, getABC };
