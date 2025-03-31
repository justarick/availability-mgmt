import DeleteButton from "@/components/shared/delete-button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deleteGroup } from "@/lib/actions/group-actions";
import { getGroupMembers } from "@/lib/actions/player-actions";
import { Group } from "@prisma/client";
import { SquarePen } from "lucide-react";

export default async function GroupDetailDialog({ group }: { group: Group }) {
  const players = await getGroupMembers(group.id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"}>
          <SquarePen />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{group.name}</DialogTitle>
        </DialogHeader>
        <ul>
          {players.map((player) => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
        <DialogFooter>
          <DeleteButton id={group.id} customAction={deleteGroup} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
