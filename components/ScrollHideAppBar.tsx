"use client";

import { AppBar, Slide, useScrollTrigger } from "@mui/material";

export default function ScrollHideAppBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>{children}</AppBar>
    </Slide>
  );
}
