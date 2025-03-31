"use server";

import { Group } from "@prisma/client";
import { revalidatePath } from "next/cache";
import prisma from "../db/prisma";
import { deleteMemberships } from "./membership-actions";

export const createGroup = async (previousState, formData: FormData) => {
  try {
    const name = formData.get("name") as string;
    await prisma.group.create({
      data: {
        name,
      },
    });
  } catch (e) {
    return "Something happened...";
  } finally {
    revalidatePath("/groups");
  }
};

export const getGroups = async (): Promise<Group[]> => {
  const groups = await prisma.group.findMany();
  return groups;
};

export const getGroupById = async (id: string) => {
  const group = await prisma.group.findUnique({
    where: { id },
    include: { players: true },
  });
  return group;
};

export async function deleteGroup(previousState, id: string) {
  try {
    const group = await prisma.group.findUniqueOrThrow({ where: { id } });

    if (!group) {
      return "Group not found";
    }

    await deleteMemberships(id, null);

    await prisma.group.delete({ where: { id } });

    return "All good";
  } catch (e) {
    return "Something happened...";
  } finally {
    revalidatePath("/groups");
  }
}
