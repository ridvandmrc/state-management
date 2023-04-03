import { atom } from "recoil";
export const todoAtom = atom<ITodoContent[]>({
  key: "recoil-todo",
  default: [
    { title: "test1", content: "lorem ipsum amed sire loreim ipsum amed sire" },
  ],
});
