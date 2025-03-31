import PlayerListItem from "@/components/player/player-list/player-list-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Player } from "@prisma/client";

export default function PlayerList({ players }: { players: Player[] }) {
  return (
    <ScrollArea>
      {players.map((player) => (
        <PlayerListItem key={player.id} player={player} />
      ))}
    </ScrollArea>
  );
}
