// nesse aquivo é como se fosse meu ApiService
import { Router } from 'express';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// login
routes.post('/signin', SessionController.store);

export default routes;
