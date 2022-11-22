import { NextFunction, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import consola from 'consola';
import process from 'process';
dotenv.config();
const JWT_KEY = process.env.SECRET || 'Shh-hhh';

class JWT {
	authenticateJWT(req: Request, res: Response, next: NextFunction) {
		const authHeader = req.headers.authorization;
		if(authHeader && authHeader !== 'null') {
			consola.info('AuthHeader: ' + JWT_KEY);
			jwt.verify(authHeader, JWT_KEY, (err: any, user: any) => {
				if(err) {
					console.log('Error: ' + err);
					return res
						.status(403)
						.send({ success: false, message: 'Token Expired' });
				}
				req['user'] = user;
				next();
			});
		} else {
			res.status(403).json({ success: false, message: 'Unauthorized' });
		}
	}
}

export default new JWT();
