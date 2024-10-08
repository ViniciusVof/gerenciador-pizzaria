import prismaClient from "../../prisma";

interface OrderItemRequest {
  order_id: string;
  product_id: string;
  amount: number;
}

class AddItemService {
  async execute({ order_id, product_id, amount }: OrderItemRequest) {
    const orderItem = await prismaClient.orderItems.create({
      data: {
        order_id,
        product_id,
        amount,
      },
    });

    return orderItem;
  }
}

export { AddItemService };
