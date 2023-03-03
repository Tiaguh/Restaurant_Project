import express from 'express';
import db from '../services/userServices.js';

const routes = express.Router();

routes.post('/add-item', async (req, res) => {
  const { itemName, itemDescription, itemPrice} = req.body;

  if (!itemName || !itemDescription || !itemPrice) res.status(400).json({ message: "Insira todos os dados" })

  await db.createUser(itemName, itemDescription, itemPrice);

  res.status(200).send({ message: "Salvo com sucesso!" });
});

export default routes;