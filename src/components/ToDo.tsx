import {
  Button,
  Card,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useRef } from "react";

interface IToDoProps {
  todoContent: ITodoContent[];
  addToList: (toAdd: ITodoContent) => void;
}

export const ToDo: FC<IToDoProps> = ({ addToList, todoContent }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Stack
        sx={{
          maxWidth: "20rem",
          border: "1px solid lightgray",
          padding: "1rem",
          marginX: "auto",
          marginY: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        <TextField label="title" inputRef={titleRef} />
        <TextField
          label="content"
          sx={{ marginY: "0.5rem" }}
          inputRef={contentRef}
        />
        <Button
          onClick={() =>
            addToList({
              content: contentRef.current?.value || "",
              title: titleRef.current?.value || "",
            })
          }
          variant="contained"
        >
          Add To List
        </Button>
      </Stack>
      <Stack flexDirection="row" flexWrap="wrap">
        {todoContent.map(({ title, content }, index) => (
          <Card
            sx={{
              padding: "1rem",
              maxWidth: "10rem",
              minWidth: "10rem",
              margin: "0.5rem",
            }}
            key={index}
          >
            <Typography variant="h5" color="primary.main">
              {title}
            </Typography>
            <Divider sx={{ marginY: "1rem" }} />
            <Typography
              sx={{
                display: "-webkit-box",
                "-webkit-line-clamp": "5",
                "-webkit-box-orient": "vertical",
                overflow: "hidden",
              }}
            >
              {content}
            </Typography>
          </Card>
        ))}
      </Stack>
    </>
  );
};
