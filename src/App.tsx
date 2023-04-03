import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { ToDo } from "./components";
import { todoAtom, zustandStore } from "./store";
import { useRecoilState } from "recoil";
import { useAtom } from "jotai";
import { jotaiStore } from "./store/jotai";

function App() {
  const { toDoContent, addContent } = zustandStore();
  const [recoilTodo, setRecoilTodo] = useRecoilState(todoAtom);
  const [jotaiAtom, setJotaiAtom] = useAtom(jotaiStore);
  return (
    <Box>
      <Divider>
        <Typography>Zustand</Typography>
      </Divider>
      <ToDo todoContent={toDoContent} addToList={addContent} />

      <Divider>
        <Typography>Recoil</Typography>
      </Divider>
      <ToDo
        todoContent={recoilTodo}
        addToList={({ content, title }) =>
          setRecoilTodo([...recoilTodo, { content, title }])
        }
      />
      <Divider>
        <Typography>Jotai</Typography>
      </Divider>
      <ToDo
        todoContent={jotaiAtom}
        addToList={({ content, title }) =>
          setJotaiAtom([...jotaiAtom, { content, title }])
        }
      />
    </Box>
  );
}

export default App;
