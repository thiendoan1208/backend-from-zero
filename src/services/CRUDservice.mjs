import connection from "../configs/db.mjs";

const getAllUser = async () => {
  try {
    const [results] = await connection.query("select * from Users u;");
    return results;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { getAllUser };
