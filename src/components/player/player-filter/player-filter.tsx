"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Group } from "@prisma/client";
import { useEffect, useState } from "react";

export default function PlayerFilter({
  groups,
  updatePlayerFilter,
}: {
  groups: Group[];
  updatePlayerFilter: ({
    nameFilter,
    groupFilter,
  }: {
    nameFilter: string;
    groupFilter: string;
  }) => void;
}) {
  const [nameFilter, setName] = useState<string>("");
  const [groupFilter, setGroupId] = useState<string>("");

  useEffect(() => {
    updatePlayerFilter({ nameFilter, groupFilter });
  }, [nameFilter, groupFilter, updatePlayerFilter]);

  return (
    <div className="flex flex-grow gap-2 justify-between">
      <Input
        type="text"
        placeholder="Search player"
        onChange={(e) => setName(e.target.value)}
      />
      <Select name="groupId" onValueChange={(value) => setGroupId(value)}>
        <SelectTrigger>
          <SelectValue placeholder="Select a group" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem key={0} value="0">
            All
          </SelectItem>
          {groups.map((group, index) => (
            <SelectItem key={index} value={group.id.toString()}>
              {group.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
