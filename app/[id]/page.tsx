"use client";

import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { getArticleDetail } from "@/lib/article";
import { useToken } from "@/context/TokenProvider";
import useSWR from "swr";

export default function IdPage({ params }: { params: { id: string } }) {
  // TODO: impl the behaviour of token == undefined
  const [token] = useToken();
  const fetcher = (query: string) => getArticleDetail(token ?? "none", query);

  const { data, error, isLoading } = useSWR(params.id, fetcher);

  return (
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
        return (
          <Box
            p={2}
            dangerouslySetInnerHTML={{ __html: data!.rendered_body }}
          />
        );
      })()}
    </Paper>
  );
}
