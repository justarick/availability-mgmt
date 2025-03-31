"use client";

import PlayerAddDialog from "@/components/player/player-add/player-add-dialog";
import { Group, Player } from "@prisma/client";
import PlayerList from "./player-list/player-list";

export default function PlayerPageContent({
  players,
  groups,
}: {
  players: Player[];
  groups: Group[];
}) {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-center">
        <PlayerAddDialog />
      </div>
      <PlayerList players={players} />
    </div>
  );
}
