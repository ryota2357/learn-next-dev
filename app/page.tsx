"use client";

import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { ArticleIndex, getArticleIndex } from "@/lib/article";
import SearchBar from "@/components/SearchBar";
import ArticleList from "@/components/ArticleList";
import { useToken } from "@/context/TokenProvider";
import useSWR from "swr";

export default function HomePage({
  searchParams,
}: {
  searchParams: { query: string | undefined };
}) {
  // TODO: impl the behaviour of token == undefined
  const [token, _] = useToken();
  const fetcher = (query: string) => getArticleIndex(token ?? "none", query);

  const { data, error, isLoading } = searchParams.query
    ? useSWR(searchParams.query, fetcher)
    : { data: [] as ArticleIndex, error: undefined, isLoading: false };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <SearchBar defaultValue={searchParams.query ?? ""} />
      <Paper>
        {(() => {
          if (isLoading) {
            return (
              <Box p={2} width="100%" marginX="auto" textAlign="center">
                <CircularProgress />
              </Box>
            );
          }
          if (error) {
            return (
              <Typography variant="h1" component="h1">
                Error: {error.toString()}
              </Typography>
            );
          }
          return <ArticleList articleIndex={data!} />;
        })()}
      </Paper>
    </Box>
  );
}
