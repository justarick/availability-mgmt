import PlayerAddForm from "@/components/player/player-add/player-add-form";
import AddButton from "@/components/shared/add-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function PlayerAddDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <AddButton />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Player</DialogTitle>
        </DialogHeader>
        <PlayerAddForm />
      </DialogContent>
    </Dialog>
  );
}
