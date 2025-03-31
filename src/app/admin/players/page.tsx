import PlayerPageContent from "@/components/player/player-page-content";
import { getGroups } from "@/lib/actions/group-actions";
import { getPlayers } from "@/lib/actions/player-actions";

export default async function Page() {
  const players = await getPlayers();
  const groups = await getGroups();

  return <PlayerPageContent players={players} groups={groups} />;
}
