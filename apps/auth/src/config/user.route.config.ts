import { RouteConfig } from '@dlvlup/core'
import JWT from '../services/jwt.service'
import UserController from '../controllers/user.controller'
import { Application } from 'express';


export class UserRoutes extends RouteConfig {
	constructor (app: Application) {
		super(app, "UserRoutes");
	}

	configureRoutes() {
		this.app.route(`/users`).get([JWT.authenticateJWT, UserController.getUsers])

		this.app.route(`/users/:id`).get([JWT.authenticateJWT, UserController.getUserById])

		return this.app
	}
}
