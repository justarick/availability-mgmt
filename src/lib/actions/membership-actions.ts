import { revalidatePath } from "next/cache";
import prisma from "../db/prisma";

export const createMembership = async (
  previousState: unknown,
  { groupId, playerId }: { groupId: number; playerId: number }
) => {
  try {
    const group = await prisma.group.findUniqueOrThrow({
      where: { id: groupId },
    });

    if (!group) {
      return "Group not found";
    }

    const player = await prisma.player.findUniqueOrThrow({
      where: { id: playerId },
    });

    if (!player) {
      return "Player not found";
    }

    await prisma.membership.create({
      data: {
        groupId: groupId,
        playerId: playerId,
      },
    });
  } catch (e) {
    return "Something happened...";
  } finally {
    revalidatePath("/groups");
  }
};

export const deleteMemberships = async (
  groupId: string | null,
  playerId: string | null
) => {
  if (groupId) {
    try {
      await prisma.membership.deleteMany({
        where: { groupId: groupId },
      });
      revalidatePath("/groups");
    } catch (e) {
      return "Something went wrong...";
    }
  }

  if (playerId) {
    try {
      await prisma.membership.deleteMany({
        where: { playerId: playerId },
      });
      revalidatePath("/players");
    } catch (e) {
      return "Something went wrong...";
    }
  }
};
