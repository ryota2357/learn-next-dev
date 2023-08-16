import { Typography } from "@mui/material";

export default function IdPage({ params }: { params: { id: string } }) {
  return (
    <Typography variant="h1" component="h1">
      Id: {params.id}
    </Typography>
  );
}
