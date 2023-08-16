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

type Props = {
  color?: ButtonProps["color"];
};

export default function RegisterApiTokenButton({ color }: Props) {
  const [token, setToken] = useState("");
  const [input, setInput] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button color={color} onClick={() => setDialogOpen(true)}>
        API キー入力
      </Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>APIキー入力</DialogTitle>
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
              setToken(input);
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
