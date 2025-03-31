import { Group } from "@prisma/client";
import GroupAddDialog from "./group-add/group-add-dialog";
import GroupList from "./group-list/group-list";

export default function GroupPageContent({ groups }: { groups: Group[] }) {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-center">
        <GroupAddDialog />
      </div>
      <GroupList groups={groups} />
    </div>
  );
}
