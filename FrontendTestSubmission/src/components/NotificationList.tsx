import { Grid } from "@mui/material";

import NotificationCard from "./NotificationCard";
import type { Notification } from "../types/Notification";

interface Props {
  notifications: Notification[];
  readIds: string[];
  markAsRead: (id: string) => void;
}

function NotificationList({
  notifications,
  readIds,
  markAsRead
}: Props) {

  return (
    <Grid container spacing={3}>
      {notifications.map((notification) => (
        <Grid
          key={notification.ID}
          size={{
            xs: 12,
            sm: 6,
            md: 4
          }}
        >
          <NotificationCard
            notification={notification}
            read={readIds.includes(
              notification.ID
            )}
            onClick={() =>
              markAsRead(notification.ID)
            }
            compact
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default NotificationList;