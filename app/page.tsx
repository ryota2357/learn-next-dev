"use client";

import { Box, CircularProgress, Link, Paper, Typography } from "@mui/material";
import { getArticleIndex } from "@/lib/article";
import SearchBar from "@/components/SearchBar";
import ArticleList from "@/components/ArticleList";
import { useToken } from "@/context/TokenProvider";
import useSWR from "swr";
import RegisterApiTokenButton from "@/components/RegisterApiTokenButton";

export default function HomePage({
  searchParams,
}: {
  searchParams: { query: string | undefined };
}) {
  const [token] = useToken();

  // NOTE: Conditional Fetching
  // If pass null as 1st argument, useSWR will not start the request.
  const { data, error, isLoading } = useSWR(
    searchParams.query && token ? searchParams.query : null,
    (query: string) => getArticleIndex(token!, query),
  );

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <SearchBar defaultValue={searchParams.query ?? ""} />
      <Paper>
        {(() => {
          if (!data && !error && !isLoading && searchParams.query) {
            // This case is (has serch query) && (token === undefined).
            // Because this is coused by not fetching.
            return (
              <Box p={2}>
                <Typography variant="h5" component="h2">
                  Qiita API のアクセストークンが設定されていません。
                </Typography>
                <Typography>
                  <Link
                    href="https://qiita.com/settings/applications"
                    target="_blank"
                  >
                    Qiita.com のアプリケーション設定
                  </Link>{" "}
                  からアクセストークンを取得し、設定してください。
                </Typography>
                <Box width="100%" textAlign="center">
                  <RegisterApiTokenButton variant="outlined" sx={{ mt: 2 }} />
                </Box>
              </Box>
            );
          }
          if (isLoading) {
            return (
              <Box p={2} width="100%" marginX="auto" textAlign="center">
                <CircularProgress />
              </Box>
            );
          }
          if (error) {
            return (
              <Box p={2}>
                <Typography variant="h5" component="h2">
                  エラーが発生しました。
                </Typography>
                <Typography>
                  設定したAPIトークンまたはネットワーク接続を確認してください。
                </Typography>
                <Typography variant="body2" mt={2}>
                  エラー: {error.toString()}
                </Typography>
              </Box>
            );
          }
          return <ArticleList articleIndex={data ?? []} />;
        })()}
      </Paper>
    </Box>
  );
}
