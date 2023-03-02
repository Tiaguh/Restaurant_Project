import database from '../repository/connection.js';

async function createItem(item_name, item_description, item_price) {
  const sql = "INSERT INTO Menu (item_name, item_description, item_price) VALUES (?, ?, ?)"
  const data = [item_name, item_description, item_price];

  const conn = await database.connect();
  conn.query(sql, data);
  conn.end();
}

export default { createItem };

/*
  O arquivo userService.js é o arquivo que conterá as ações que serão executadas no banco de dados,
  ou seja, ela receberá os dados da controller e reenviará ao banco de dados.
*/