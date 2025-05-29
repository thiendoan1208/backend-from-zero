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

const getUser = async (userID) => {
  try {
    let [results] = await connection.query(
      `select * from Users u where u.id = ?;`,
      [userID]
    );
    if (results && results.length) {
      return results[0];
    } else {
      return {};
    }
  } catch (error) {
    console.log(error);
    return {};
  }
};

const updateUserByID = async (id, name, email, city) => {
  try {
    await connection.query(
      `UPDATE Users u 
      SET name = ?, email = ?, city = ?
      WHERE u.id = ?;
      `,
      [name, email, city, id]
    );
  } catch (err) {
    console.log(err);
  }
};

// delete user

const deleteUserById = async (userID) => {
  await connection.query(`delete from Users where id = ? ;`, [userID]);
};
export { getAllUser, getUser, updateUserByID, deleteUserById };
