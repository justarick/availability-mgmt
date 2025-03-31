import { Button } from "@/components/ui/button";
import { LoaderCircle, SquarePlus } from "lucide-react";

export default function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button
      type="submit"
      size={"icon"}
      disabled={pending}
      className="bg-green-700"
    >
      {pending ? <LoaderCircle className="animate-spin" /> : <SquarePlus />}
    </Button>
  );
}
