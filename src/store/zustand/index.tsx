import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ZustandProps {
  toDoContent: ITodoContent[];
  addContent?: (content: ITodoContent) => void;
}

export const zustandStore = create<any>(
  persist(
    (set) => ({
      toDoContent: [],
      addContent: ({ content, title }: ITodoContent) =>
        set((state: ZustandProps) => ({
          toDoContent: [...state.toDoContent, { content, title }],
        })),
    }),
    {
      name: "zustand-todo", // unique name
    }
  )
);
