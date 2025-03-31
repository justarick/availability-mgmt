"use server";

import { Player } from "@prisma/client";
import { revalidatePath } from "next/cache";
import prisma from "../db/prisma";

export const createPlayer = async (previousState, formData: FormData) => {
  try {
    const name = formData.get("name") as string;
    await prisma.player.create({
      data: {
        name,
      },
    });
  } catch (e) {
    return "Something happened...";
  }
  revalidatePath("/players");
};

export const getPlayers = async (): Promise<Player[]> => {
  const players = await prisma.player.findMany({
    include: { groups: true },
  });

  return players;
};

export const getGroupMembers = async (groupId: string) => {
  const players = await prisma.player.findMany({
    where: {
      groups: {
        some: { id: groupId },
      },
    },
  });

  return players;
};

export async function deletePlayer(previousState, id: number) {
  try {
    await prisma.player.delete({ where: { id } });
  } catch (e) {
    return "Something happened...";
  }
  revalidatePath("/player");
}
