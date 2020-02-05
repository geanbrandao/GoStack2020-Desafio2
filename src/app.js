import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.routes();
  }

  routes() {
    this.server.use(routes);
    this.server.use(express.json());
  }
}

export default new App().server;
// depois de mudar para import as coisas se tentar rodar com o node nao funciona
// então precisa rodar com sucrase
// $ yarn sucrase-node src/server.js
