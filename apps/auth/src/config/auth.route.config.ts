import { RouteConfig } from '@dlvlup/core';
import AuthController from '../controllers/auth.controller'

export class AuthRoutes extends RouteConfig {

	constructor (app) {
		super(app, 'AuthRoutes');
	}

	configureRoutes () {
		this.app.route('/login').post([AuthController.login])

		this.app.route('/signup').post([AuthController.signup])

		return this.app
	}

}
