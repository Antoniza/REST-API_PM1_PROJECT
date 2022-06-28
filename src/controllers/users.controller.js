const connect = require("../database/database");

const selectUsersQuery = async (req, res) => {
  try {
    const result = await connect.query("SELECT * FROM users");
    res.json(result);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
};

const selectUsersUnique = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await connect.query("SELECT * FROM users WHERE id = ?", [
      id,
    ]);
    res.json(result);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
};

const insertUsersQuery = async (req, res) => {
  try {
    const { username, email, password, number } = req.body;
    const newData = {
      username,
      email,
      password,
      number,
    };

    if (username == undefined || email == undefined || password == undefined || number == undefined) {
      res
        .status(400)
        .json({
          message: "Error en petición. Por favor, llene todos los campos.",
        });
    }
    const result = await connect.query("INSERT INTO users SET ? ", [newData]);
    res.json({ message: "Nuevo usuario agregado correctamente." });
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
};

const deleteUsersUnique = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await connect.query("DELETE FROM users WHERE id = ?", [id]);
    res.json({ message: "Usuario eliminado correctamente." });
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
};

const updateUsersQuery = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password, number } = req.body;
    const result = await connect.query(
      "UPDATE users SET username = ?, email = ?, password = ?, number = ? WHERE id = ?",
      [username, email, password, number, id]
    );
    res.json({ message: "Usuario actualizado correctamente." });
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
};

module.exports = {
  selectUsersQuery,
  insertUsersQuery,
  selectUsersUnique,
  deleteUsersUnique,
  updateUsersQuery,
};
