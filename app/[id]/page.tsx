"use client";

import { Box, Paper, Typography } from "@mui/material";
import { getArticleDetail } from "@/lib/article";
import swr from "swr";

export default function IdPage({ params }: { params: { id: string } }) {
  // Context なり Recoil なりで Token を取得する
  const token = "dummy-token";
  const fetcher = (query: string) => getArticleDetail(token, query);

  const { data, error } = swr(params.id, fetcher);

  if (error) {
    return (
      <Typography variant="h1" component="h1">
        Error: {error}
      </Typography>
    );
  }

  if (!data) {
    return (
      <Typography variant="h1" component="h1">
        Loading...
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h1" component="h1">
        Id: {params.id}
      </Typography>
      <Paper>
        <Box p={2} dangerouslySetInnerHTML={{ __html: data.rendered_body }} />
      </Paper>
    </>
  );
}
