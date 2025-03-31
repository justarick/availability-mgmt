"use client";

import SubmitButton from "@/components/shared/submit-button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { createPlayer } from "@/lib/actions/player-actions";
import { useActionState } from "react";

export default function PlayerAddForm() {
  const [, action, pending] = useActionState(createPlayer, null);

  return (
    <form action={action} className="flex gap-2">
      <Input type="text" name="name" />
      <DialogClose asChild>
        <SubmitButton pending={pending} />
      </DialogClose>
    </form>
  );
}
