import prismaClient from "../../prisma";

interface OrderItemRequest {
  item_id: string;
}

class RemoveItemService {
  async execute({ item_id }: OrderItemRequest) {
    const item = await prismaClient.orderItems.delete({
      where: {
        id: item_id,
      },
    });

    return item;
  }
}

export { RemoveItemService };
