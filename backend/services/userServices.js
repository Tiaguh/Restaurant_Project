import database from '../repository/connection.js';

async function createUser(itemName, itemDescription, itemPrice) {
  const sql = "INSERT INTO Menu (item_name, item_description, item_price) VALUES (?, ?, ?)"
  const dados = [itemName, itemDescription, itemPrice];

  const conn = await database.connect();
  conn.query(sql, dados);
  conn.end();
}

export default { createUser };