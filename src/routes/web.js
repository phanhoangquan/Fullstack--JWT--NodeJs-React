import express from 'express';
import { handleCreateUser, handleHomePage, handleUserPage } from '../controller/homeController.js';

const router = express.Router();

const initWebRoutes = (app) => {
   router.get('/', handleHomePage);
   router.get('/user', handleUserPage);
   router.post('/user/create-user', handleCreateUser);

   return app.use('/', router);
};

export default initWebRoutes;
