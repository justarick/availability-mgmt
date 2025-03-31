import { usePathname } from "next/navigation";

export default function useActivePath(href: string): boolean {
  const currentPath = usePathname();

  if (href === "/") {
    return currentPath === href;
  }

  return currentPath.includes(href);
}
