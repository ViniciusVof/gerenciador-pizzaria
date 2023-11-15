import { Request, Response } from "express";
import { ListOrdersServices } from "../../services/order/ListOrdersServices";

class ListOrdersController {
  async handle(req: Request, res: Response) {
    const listOrdersService = new ListOrdersServices();

    const orders = await listOrdersService.execute();

    res.json(orders);
  }
}

export { ListOrdersController };
