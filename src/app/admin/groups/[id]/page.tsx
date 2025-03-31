import { getGroupById } from "@/lib/actions/group-actions";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const group = await getGroupById(id);

  return (
    <div>
      <p>{group?.name}</p>
      <ul>
        {group?.players.map((p) => (
          <li key={p.id}>- {p.name}</li>
        ))}
      </ul>
    </div>
  );
}
