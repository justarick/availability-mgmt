import DeleteButton from "@/components/shared/delete-button";
import { deletePlayer } from "@/lib/actions/player-actions";
import { Player } from "@prisma/client";

export default function PlayerListItem({ player }: { player: Player }) {
  return (
    <div className="w-full my-2 p-2 flex items-center justify-between border border-gray-300 rounded-lg hover:bg-gray-100">
      <p>{player.name}</p>
      <DeleteButton id={player.id} customAction={deletePlayer} />
    </div>
  );
}
