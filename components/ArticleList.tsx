import {
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { ArticleIndex } from "@/lib/article";
import dayjs from "dayjs";

export default function ArticleList({
  articleIndex,
}: {
  articleIndex: ArticleIndex;
}) {
  return (
    <List disablePadding>
      {articleIndex.map((article, idx) => (
        <>
          <ListItemButton
            disableGutters
            key={article.id}
            href={`/${article.id}`}
            LinkComponent={Link}
          >
            <Stack component="li">
              <ListItem component="div" sx={{ py: 0 }}>
                <ListItemAvatar>
                  <Avatar
                    alt={article.user.name}
                    src={article.user.profile_image_url}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={`${article.user.name}  (@${article.user.id})`}
                  secondary={dayjs(article.created_at).format("YYYY年MM月DD日")}
                />
              </ListItem>
              <ListItem
                component="div"
                alignItems="flex-start"
                sx={{ py: 0, pl: 9, flexDirection: "column" }}
              >
                <Typography variant="h5">{article.title}</Typography>
                <Stack direction="row" spacing={1}>
                  {article.tags.map((tag, idx) => (
                    <Chip label={tag.name} size="small" key={idx} />
                  ))}
                </Stack>
              </ListItem>
            </Stack>
          </ListItemButton>
          {idx !== articleIndex.length - 1 && (
            <Divider variant="middle" component="li" />
          )}
        </>
      ))}
    </List>
  );
}
