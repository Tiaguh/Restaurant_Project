import mysql2 from 'mysql2/promise'

const connect = async () => {
  const connection = await mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'Restaurant_Project'
  })

  return connection
}

export default { connect };

// No arquivo connection.js ficam todas as configurações de conexão entre a API e o banco de dados.