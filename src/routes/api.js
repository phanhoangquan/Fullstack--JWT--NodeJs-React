import express from 'express';
import { handleTestApi, handleRegister, handleLogin } from '../controller/apiController.js';
import { handleRead } from '../controller/userController.js';

const router = express.Router();

const initApiRoutes = (app) => {
   //REST API
   router.get('/test-api', handleTestApi);
   router.post('/register', handleRegister);
   router.post('/login', handleLogin);

   router.get('/users/read', handleRead);
   // router.post('/users/create', handleCreate);
   // router.put('/users/update', handleUpdate);
   // router.delete('/users/delete', handleDelete);

   return app.use('/api/v1/', router);
};

export default initApiRoutes;
