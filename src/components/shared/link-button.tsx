"use client";

import { Button } from "@/components/ui/button";
import useActivePath from "@/lib/hooks/useActivePath";
import Link from "next/link";

export default function LinkButton({
  href,
  displayText,
  defaultVariant = "outline",
  highlightVariant = "default",
}: {
  href: string;
  displayText: string;
  defaultVariant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  highlightVariant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}) {
  const isCurrentPath = useActivePath(href);

  return (
    <Link href={href}>
      <Button variant={isCurrentPath ? highlightVariant : defaultVariant}>
        {displayText}
      </Button>
    </Link>
  );
}
