"use client";

import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  Menu,
  MessageCircleIcon,
  Search,
  Settings,
  SquareStack,
  Users,
} from "lucide-react";
import { Logo } from "./logo/Logo";
import { NavItem } from "./MainNavigation/NavItem";
import { Profile } from "./Profile";
import * as Input from "../Input";
import * as Collapsible from "@radix-ui/react-collapsible";

export default function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <button title="Menu">
            <Menu className="h-6 w-6 dark:contrast-0" />
          </button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Pesquisar" />
        </Input.Root>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projetos" icon={SquareStack} />
          <NavItem title="Tarefas" icon={CheckSquare} />
          <NavItem title="Commits" icon={Flag} />
          <NavItem title="Redes Sociais" icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Contato" icon={MessageCircleIcon} />
            <NavItem title="Configurações" icon={Settings} />
          </nav>

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
