import "./globals.css";
import type { Metadata } from "next";
import {
  Button,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import ScrollHideAppBar from "@/components/ScrollHideAppBar";

export const metadata: Metadata = {
  title: "タイトル",
  description: "説明",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <CssBaseline />
      <body>
        <ScrollHideAppBar>
          <Toolbar>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              タイトル
            </Typography>
            <Button color="inherit">APIキー入力</Button>
          </Toolbar>
        </ScrollHideAppBar>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
