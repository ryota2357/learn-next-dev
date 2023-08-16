"use client";

import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { ArticleIndex, getArticleIndex } from "@/lib/article";
import SearchBar from "@/components/SearchBar";
import ArticleList from "@/components/ArticleList";
import swr from "swr";

export default function HomePage({
  searchParams,
}: {
  searchParams: { query: string | undefined };
}) {
  // Context なり Recoil なりで Token を取得する
  const token = "dummy-token";
  const fetcher = (query: string) => getArticleIndex(token, query);

  const { data, error } = searchParams.query
    ? swr(searchParams.query, fetcher)
    : { data: [] as ArticleIndex, error: undefined };

  if (error) {
    return (
      <Typography variant="h1" component="h1">
        Error: {error}
      </Typography>
    );
  }

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <SearchBar defaultValue={searchParams.query ?? ""} />
      <Paper>
        {data ? (
          <ArticleList articleIndex={data} />
        ) : (
          <Box p={2} width="100%" marginX="auto" textAlign="center">
            <CircularProgress />
          </Box>
        )}
      </Paper>
    </Box>
  );
}
