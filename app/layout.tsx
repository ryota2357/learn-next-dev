import "./globals.css";
import type { Metadata } from "next";
import { Container, CssBaseline } from "@mui/material";

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
        <Container>{children}</Container>
      </body>
    </html>
  );
}
