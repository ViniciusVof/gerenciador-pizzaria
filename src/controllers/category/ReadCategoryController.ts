import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";
import { ReadCategoryService } from "../../services/category/ReadCategoryService";

class ReadCategoryController {
  async handle(req: Request, res: Response) {
    const readCategoryService = new ReadCategoryService();

    const category = await readCategoryService.execute();

    return res.json(category);
  }
}

export { ReadCategoryController };
