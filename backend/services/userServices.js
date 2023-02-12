import database from '../repository/connection.js';

async function createItem(item_name, item_description, item_price) {
  const sql = "INSERT INTO Menu VALUES (?, ?, ?)"
  const data = [item_name, item_description, item_price];

  const conn = await database.connect();
  conn.query(sql, data);
  conn.end();
}

async function updateItem(item_name, item_description, item_price, id_item) {
  const sql = "UPDATE Menu SET item_name = ?, item_description = ?, item_price = ? WHERE id_item = ?"
  const data = [item_name, item_description, item_price, id_item];

  const conn = await database.connect();
  conn.query(sql, data);
  conn.end();
}

export default { createItem, updateItem };