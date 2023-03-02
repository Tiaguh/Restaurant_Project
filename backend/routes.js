import express from 'express'
import items from './controllers/userController.js'

const route = express();

route.use("/", items)

export default route;

// O arquivo routes.js, é o local que vai receber todas as requisições e redirecioná-las aos recursos corretos.