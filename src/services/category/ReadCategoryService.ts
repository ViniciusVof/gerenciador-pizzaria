import prismaClient from "../../prisma";

class ReadCategoryService {
  async execute() {
    const categories = await prismaClient.category.findMany({});

    if (!categories) {
      throw new Error("Doesn't exists categories");
    }

    return categories;
  }
}

export { ReadCategoryService };
