import { atom } from "jotai";

export const jotaiStore = atom<ITodoContent[]>([
  { title: "test1", content: "lorem ipsum amed sire loreim ipsum amed sire" },
]);
