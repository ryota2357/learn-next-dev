"use client";

import { Box, CircularProgress, Link, Paper, Typography } from "@mui/material";
import RegisterApiTokenButton from "@/components/RegisterApiTokenButton";
import BrowserBackButton from "@/components/BrowserBackButton";
import { getArticleDetail } from "@/lib/article";
import { useToken } from "@/context/TokenProvider";
import useSWR from "swr";

export default function IdPage({ params }: { params: { id: string } }) {
  const [token] = useToken();

  // NOTE: Conditional Fetching
  // If pass null as 1st argument, useSWR will not start the request.
  const { data, error, isLoading } = useSWR(token ? params.id : null, (id) =>
    getArticleDetail(token!, id)
  );

  return (
    <>
      <BrowserBackButton variant="contained" sx={{ mb: 2 }} />
      <Paper>
        {(() => {
          if (!data && !error && !isLoading) {
            // This case is token === undefined. Because this is coused by not fetching.
            return (
              <Box p={2}>
                <Typography variant="h5" component="h2">
                  Qiita API のアクセストークンが設定されていません。
                </Typography>
                <Typography>
                  <Link href="https://qiita.com/settings/applications">
                    Qiita.com のアプリケーション設定
                  </Link>{" "}
                  からアクセストークンを取得し、設定してください。
                </Typography>
                <Typography mt={1}>
                  現在このアプリケーションはブラウザのリロード等を行うと、設定したアクセストークンが消えてしまいます。
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
    </>
  );
}
