import { Group } from "@prisma/client";
import GroupDetailDialog from "../group-detail/group-edit-dialog";

export default function GroupListItem({ group }: { group: Group }) {
  return (
    <div className="w-full my-2 p-2 flex items-center justify-between border border-gray-300 rounded-lg">
      <p>{group.name}</p>
      <GroupDetailDialog group={group} />
    </div>
  );
}
