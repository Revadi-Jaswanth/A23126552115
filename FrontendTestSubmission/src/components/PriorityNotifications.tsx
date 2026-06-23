import { Grid } from "@mui/material";

import NotificationCard from "./NotificationCard";
import type { Notification } from "../types/Notification";

interface Props {
  notifications: Notification[];
  readIds: string[];
  markAsRead: (id: string) => void;
}

function PriorityNotifications({
  notifications,
  readIds,
  markAsRead
}: Props) {

  const priorityNotifications = [...notifications]
    .sort((a, b) => {

      const unreadA =
        readIds.includes(a.ID) ? 0 : 1;

      const unreadB =
        readIds.includes(b.ID) ? 0 : 1;

      if (unreadA !== unreadB) {
        return unreadB - unreadA;
      }

      const priority = (
        type: string
      ) => {

        switch (type) {
          case "Placement":
            return 3;

          case "Result":
            return 2;

          case "Event":
            return 1;

          default:
            return 0;
        }

      };

      return (
        priority(b.Type) -
        priority(a.Type)
      );

    })
    .slice(0, 5);

  return (
    <Grid container spacing={3}>
      {priorityNotifications.map(
        (notification) => (
          <Grid
            key={notification.ID}
            size={{
              xs: 12
            }}
          >
            <NotificationCard
              notification={notification}
              read={readIds.includes(
                notification.ID
              )}
              onClick={() =>
                markAsRead(
                  notification.ID
                )
              }
            />
          </Grid>
        )
      )}
    </Grid>
  );
}

export default PriorityNotifications;