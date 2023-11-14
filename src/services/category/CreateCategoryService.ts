import prismaClient from "../../prisma";
interface CategoryRequest {
  name: string;
}
class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if (!name) {
      throw new Error("Name incorrect");
    }

    const categoryAlreadyExists = await prismaClient.category.findFirst({
      where: {
        name,
      },
    });

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    const category = await prismaClient.category.create({
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { CreateCategoryService };
