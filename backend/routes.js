import express from 'express'
import createItem from './controllers/userController.js'

const route = express();

route.use('/', createItem)

export default route;