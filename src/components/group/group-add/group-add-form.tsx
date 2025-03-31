"use client";

import SubmitButton from "@/components/shared/submit-button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { createGroup } from "@/lib/actions/group-actions";
import { useActionState } from "react";

export default function GroupAddForm() {
  const [state, action, pending] = useActionState(createGroup, null);

  return (
    <form action={action} className="flex gap-2">
      <Input type="text" name="name" />
      <DialogClose asChild>
        <SubmitButton pending={pending} />
      </DialogClose>
    </form>
  );
}
