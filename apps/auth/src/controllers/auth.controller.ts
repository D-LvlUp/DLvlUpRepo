import { NextFunction ,Request ,Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';
import * as dotenv from 'dotenv';
import * as process from 'process';
import consola from 'consola';
dotenv.config();
const tokenExpirationTime = process.env.TOKEN_EXPIRATION || 5000;
const secret = process.env.SECRET || 'Shh-hhh';


class AuthController {
	constructor () {
	}

	async login(req: Request, res: Response, next: NextFunction) {
		try {
			const email = req.body.email;
			const password = req.body.password;

			const user = await UserService.Repository.getUserByEmail(email);
			consola.info('User: ' + JSON.stringify(user));
			if(user) {
				const isPasswordMatch = password == user.password;
				if (!isPasswordMatch) { throw new Error('Invalid Password'); }
				else {
					consola.info('JWT Secret: ' + secret);
					const token = jwt.sign(req.body, secret, {
						expiresIn: tokenExpirationTime
					});

					return res.status(200).json({
						success: true,
						data: user,
						token,
					});
				}
			} else {
				throw new Error('User not found');
			}
		} catch (e) {
			next(e);
		}
	}

	async signup(req: Request, res: Response, next: NextFunction) {
		try {
			const username = req.body.username;
			const email = req.body.email;
			const password = req.body.password;

			const user = await UserService.Repository.getUserByEmail(email);
			consola.info('User: ' + JSON.stringify(user));
			if(user) { throw new Error('User already exists');}
			else {
				try {
					const newUser = await UserService.Repository.createUser({
						username,
						email,
						password
					});

					const token = jwt.sign({ username, password }, secret, {
						expiresIn: tokenExpirationTime
					});

					return res.status(201).json({
						success: true,
						data: newUser,
						token,
					});
				} catch (e) {
					consola.error('Controller capturing error: ' + e);
					throw new Error('Error Registering...');
				}
			}
		} catch (e) {
			next(e);
		}
	}
}

export default new AuthController();
