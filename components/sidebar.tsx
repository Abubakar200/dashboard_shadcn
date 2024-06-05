import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  CreditCard,
  Folders,
  LayoutDashboard,
  Newspaper,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Command className="bg-secondary">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem className="cursor-pointer">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <Link href={"/"}>Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className="mr-2 h-4 w-4" />
            <Link href={"/posts"}>Posts</Link>
          </CommandItem>
          <CommandItem>
            <Folders className="mr-2 h-4 w-4" />
            <Link href={"#"}>Categories</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>cmd+p</CommandShortcut>
          </CommandItem>
          <CommandItem className="cursor-pointer">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>cmd+b</CommandShortcut>
          </CommandItem>
          <CommandItem className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>cmd+s</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Sidebar;
