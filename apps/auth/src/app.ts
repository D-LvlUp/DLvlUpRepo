import * as http from 'http';
import * as process from 'process';
import * as dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { RouteConfig } from '@dlvlup/core';
import RoutesConfigs from './config';
import UserService from './services/user.service';
import consola from 'consola';
import cors from 'cors';
dotenv.config();


const routes: Array<RouteConfig> = [];

const PORT = process.env.PORT || 8000;

const app: Express = express();

app.use(express.json());
app.use(cors());


RoutesConfigs.forEach(Route => routes.push(new Route(app)));


app.get('/',async (req: Request, res: Response) => {
	res.send(
		'<h1>Welcome World</h1>'
	);
});

const server: http.Server = http.createServer(app);

server.listen(PORT, async () => {
	await UserService.Setup(); //TODO: Include many Services setup.

	consola.info(`Server is running on http://localhost:${PORT}`);

	routes.forEach((route: RouteConfig) => {
		consola.success(`Routes configured for ${route.getName()}`);
	});
});
