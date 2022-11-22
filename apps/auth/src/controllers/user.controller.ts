import { NextFunction, Request, Response } from 'express';
import UserService from '../services/user.service';


class UserController {
	constructor () {}

	async getUsers(req: any, res: Response, next: NextFunction) {
		return res.status(200).json({
			success: true,
			data: await UserService.Repository.GetRangeAsync()
		});
	}

	async getUserById (req: Request, res: Response, next: NextFunction) {
		const id = parseInt(req.params.id);
		return res.status(200).json({
			success: true,
			data: await UserService.Repository.GetAsync(x => x.Where(r => r.id == id))
		});
	}
}

export default new UserController();

