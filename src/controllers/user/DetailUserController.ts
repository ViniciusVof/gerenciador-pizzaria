import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const detailUserService = new DetailUserService();

    const auth = await detailUserService.execute(user_id);

    return res.json(auth);
  }
}

export { DetailUserController };
