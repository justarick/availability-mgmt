"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { startTransition, useActionState } from "react";

export default function DeleteButton({
  id,
  customAction,
}: {
  id: string;
  customAction: (previousState: unknown, id: string) => void;
}) {
  const [state, action, pending] = useActionState(customAction, null);

  const onDelete = () => {
    startTransition(() => action(id));
  };

  return (
    <Button
      variant={"destructive"}
      size={"icon"}
      onClick={onDelete}
      disabled={pending}
    >
      <Trash2 />
    </Button>
  );
}
