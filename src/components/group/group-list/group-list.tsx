import GroupListItem from "@/components/group/group-list/group-list-item";
import { Group } from "@prisma/client";

export default async function GroupList({ groups }: { groups: Group[] }) {
  return (
    <ul className="overflow-auto">
      {groups.map((group) => (
        <GroupListItem key={group.id} group={group} />
      ))}
    </ul>
  );
}
