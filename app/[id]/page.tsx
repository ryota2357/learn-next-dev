"use client";

import {
  Box,
  CircularProgress,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import RegisterApiTokenButton from "@/components/RegisterApiTokenButton";
import BrowserBackButton from "@/components/BrowserBackButton";
import { getArticleDetail } from "@/lib/article";
import { useToken } from "@/state/token";
import useSWR from "swr";

export default function IdPage({ params }: { params: { id: string } }) {
  const [token] = useToken();

  // NOTE: Conditional Fetching
  // If pass null as 1st argument, useSWR will not start the request.
  const { data, error, isLoading } = useSWR(token ? params.id : null, (id) =>
    getArticleDetail(token!, id),
  );

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <BrowserBackButton variant="contained" sx={{ mb: 2 }} />
        {(() => {
          if (data) {
            return (
              <Typography display="inline-flex" alignItems="center">
                Qiita で開く:
                {(() => {
                  const url = `https://qiita.com/${data?.user.id}/items/${params.id}`;
                  return (
                    <Link
                      href={url}
                      target="_blank"
                      sx={{ overflowWrap: "anywhere" }}
                    >
                      {url}
                      <OpenInNewIcon
                        fontSize="small"
                        sx={{ ml: 1, verticalAlign: "text-top" }}
                      />
                    </Link>
                  );
                })()}
              </Typography>
            );
          }
        })()}
      </Stack>
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
                  <Link
                    href="https://qiita.com/settings/applications"
                    target="_blank"
                  >
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
          return (
            <Box
              p={2}
              dangerouslySetInnerHTML={{ __html: data?.rendered_body ?? "" }}
            />
          );
        })()}
      </Paper>
    </>
  );
}
