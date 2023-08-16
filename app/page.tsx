import { Typography } from "@mui/material";

export default function HomePage({
  searchParams,
}: {
  searchParams: { query: string | undefined };
}) {
  return (
    <Typography variant="h1" component="h1">
      Search: {searchParams.query ?? "undefined"}
    </Typography>
  );
}
