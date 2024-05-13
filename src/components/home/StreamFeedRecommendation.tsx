import {
  Avatar,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function StreamFeedRecommendation() {
  return (
    <Card className="fixed w-[20rem] max-h-[22rem]">
      <CardContent>
        <Typography variant="h6" component="div">
          Add to your stream
        </Typography>
        <List>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <AddIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar className="bg-black">N</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>

          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <AddIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar className="bg-blue-200">K</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>

          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <AddIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar className="bg-slate-500">Z</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>

          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <AddIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar className="bg-red-500">Y</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
