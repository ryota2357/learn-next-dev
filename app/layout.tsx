import "./globals.css";
import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
