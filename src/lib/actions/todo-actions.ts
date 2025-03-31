"use server";

import { revalidatePath } from "next/cache";
import prisma from "../db/prisma";

export const getTodos = async () => {
  const todos = await prisma.todo.findMany();
  return todos;
};

export async function createTodo(previousState, formData: FormData) {
  try {
    const content = formData.get("content") as string;
    await prisma.todo.create({
      data: {
        content,
      },
    });
  } catch (e) {
    return "Something happened...";
  }
  revalidatePath("/todos");
}

export async function deleteTodo(previousState, id: number) {
  try {
    await prisma.todo.delete({ where: { id } });
  } catch (e) {
    return "Something happened...";
  }
  revalidatePath("/todos");
}
