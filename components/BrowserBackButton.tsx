"use client";

import { Button, ButtonProps } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";

// NOTE: When using App Router, useRouter must be imported from next/navigation. (ref: https://github.com/vercel/next.js/issues/41811)
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

type Props = {
  variant?: ButtonProps["variant"];
  sx?: ButtonProps["sx"];
};

export default function BrowserBackButton({ variant, sx }: Props) {
  const router = useRouter();
  return (
    <Button variant={variant} onClick={() => router.back()} sx={sx}>
      <ArrowBackIosNew />
    </Button>
  );
}
