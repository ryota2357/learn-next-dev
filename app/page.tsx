"use client";

import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { ArticleIndex, getArticleIndex } from "@/lib/article";
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
        Search: {searchParams.query ?? "undefined"}
      </Typography>
      <Paper>
        <List>
          {[...new Array(10)].map(() =>
            data.map((article) => (
              <ListItem key={article.id}>
                <ListItemText primary={article.title} />
              </ListItem>
            ))
          )}
        </List>
      </Paper>
    </>
  );
}
