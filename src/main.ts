import express from 'express';
import { App } from './app';
import { registerRoutes } from './infra/api/express/routes';

const app = express();
const router = express.Router();

app.use(express.json());

const appInstance = new App();
const controllers = appInstance.getControllers();

registerRoutes(router, controllers);
app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
