"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "motion/react";

export interface TabItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
}

export function TabItem({ title, value, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700 dark:text-zinc-300 dark:hover:text-violet-300 dark:data-[state=active]:text-violet-300"
    >
      <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300"
        />
      )}
    </Tabs.Trigger>
  );
}
