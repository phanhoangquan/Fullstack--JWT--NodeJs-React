import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoutes from './routes/web';
import bodyParser from 'body-parser';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

//Config view engine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Init web routes
initWebRoutes(app);

app.listen(PORT, () => {
   console.log(`Server is running on port: http://localhost:${PORT}`);
});
