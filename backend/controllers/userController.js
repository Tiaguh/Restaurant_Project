import express from 'express';
import db from '../services/userServices.js';

const routes = express.Router();

routes.post('/create-item', async (req, res) => {
  const { item_name, item_description, item_price} = req.body;

  await db.createItem(item_name, item_description, item_price);

  res.status(200).send({ message: "Salvo com sucesso!" });
});

export default routes;

/*
  O arquivo userController.js tem como função é fazer toda a validação dos dados 
  e aplicar as regras de negócio existentes.
*/