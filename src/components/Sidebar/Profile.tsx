import Image from "next/image";
import ProfilePicture from "@/../public/ProfilePicture.png";
import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src={ProfilePicture}
        alt="imagem de perfil do Github de Andrew Gomes"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Andrew Gomes
        </span>
        <span className="truncate text-xs text-zinc-500 dark:text-zinc-400">
          andrewgomes.brc@gmail.com
        </span>
      </div>
      <button
        title="Logout"
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
      >
        <LogOut className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      </button>
    </div>
  );
}
