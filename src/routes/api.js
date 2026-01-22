import express from 'express';
import { handleTestApi, handleRegister, handleLogin } from '../controller/apiController.js';

const router = express.Router();

const initApiRoutes = (app) => {
   //REST API
   router.get('/test-api', handleTestApi);
   router.post('/register', handleRegister);
   router.post('/login', handleLogin);

   return app.use('/api/v1/', router);
};

export default initApiRoutes;
