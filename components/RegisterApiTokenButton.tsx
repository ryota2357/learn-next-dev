"use client";

import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useToken } from "@/context/TokenProvider";

type Props = {
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
  sx?: ButtonProps["sx"];
};

export default function RegisterApiTokenButton({ variant, color, sx }: Props) {
  const [token, setToken] = useToken();
  const [input, setInput] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        color={color}
        sx={sx}
        onClick={() => setDialogOpen(true)}
      >
        API トークン入力
      </Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>APIトークン入力</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Qiita API のアクセストークンを入力してください。
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="API Token"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={token}
            onChange={(e) => setInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>キャンセル</Button>
          <Button
            onClick={() => {
              setToken(input === "" ? undefined : input);
              setDialogOpen(false);
            }}
          >
            決定
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
