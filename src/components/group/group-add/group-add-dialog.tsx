import GroupAddForm from "@/components/group/group-add/group-add-form";
import AddButton from "@/components/shared/add-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function GroupAddDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <AddButton />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Group</DialogTitle>
        </DialogHeader>
        <GroupAddForm />
      </DialogContent>
    </Dialog>
  );
}
