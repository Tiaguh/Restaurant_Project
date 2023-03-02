import express from 'express';
import routes from './routes.js';
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(3333, () => {
  console.log('Server is Running...');
});

/*
  O arquivo index.js é onde ficam todas as configurações da aplicação, tais como:
    - Métodos de comunicação, 
    - Portas, 
    - Configurações de segurança de acesso, 
    - ETC...
*/ 
