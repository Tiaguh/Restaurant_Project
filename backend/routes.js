import express from 'express'
import createItem from './controllers/userController.js'
import selectItems from './controllers/userController.js'

const route = express();

route.use("/create-item", createItem)

export default route;

// O arquivo routes.js, é o local que vai receber todas as requisições e redirecioná-las aos recursos corretos.