import express from "express";
import managementItem from './controllers/userController.js'

const route = express();

route.use('/management-item', managementItem)

export default route;