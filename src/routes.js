// nesse aquivo é como se fosse meu ApiService
import { Router } from 'express';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// login
routes.get('/signin', SessionController.create);

export default routes;
