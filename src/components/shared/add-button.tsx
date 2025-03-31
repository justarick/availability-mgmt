import { Button } from "@/components/ui/button";
import { SquarePlus } from "lucide-react";

export default function AddButton() {
  return (
    <Button size={"icon"} className="bg-green-700">
      <SquarePlus />
    </Button>
  );
}
