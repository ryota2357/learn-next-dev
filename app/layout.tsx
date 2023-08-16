import "./globals.css";
import type { Metadata } from "next";
import { Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import ScrollHideAppBar from "@/components/ScrollHideAppBar";
import RegisterApiTokenButton from "@/components/RegisterApiTokenButton";

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
            <RegisterApiTokenButton color="inherit" />
          </Toolbar>
        </ScrollHideAppBar>
        <Container
          sx={{
            mt: 8,
          }}
        >
          {children}
        </Container>
      </body>
    </html>
  );
}
