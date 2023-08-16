"use client";

import { useState } from "react";
import Link from "next/link";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Search({ defaultValue }: { defaultValue: string }) {
  const [query, setQuery] = useState(defaultValue);

  const createQuery = () => {
    if (query === "") {
      return "";
    }
    return `?${new URLSearchParams({
      query: query,
    }).toString()}`;
  };

  return (
    <Paper
      sx={{
        px: 2,
        py: 0.5,
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <InputBase
        defaultValue={defaultValue}
        placeholder="検索キーワードを入力"
        onChange={(e) => setQuery(e.target.value)}
        sx={{ flexGrow: 1 }}
      />
      <IconButton type="button" href={`/${createQuery()}`} LinkComponent={Link}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
