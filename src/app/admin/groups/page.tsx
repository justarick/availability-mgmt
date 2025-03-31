import GroupPageContent from "@/components/group/group-page-content";
import { getGroups } from "@/lib/actions/group-actions";

export default async function Page() {
  const groups = await getGroups();

  return <GroupPageContent groups={groups} />;
}
