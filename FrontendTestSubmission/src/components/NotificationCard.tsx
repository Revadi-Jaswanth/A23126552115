import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box
} from "@mui/material";

import type { Notification } from "../types/Notification";

interface Props {
  notification: Notification;
  read: boolean;
  onClick: () => void;
  compact?: boolean;
}

function NotificationCard({
  notification,
  read,
  onClick,
  compact = false
}: Props) {

  const getChipColor = () => {
    switch (notification.Type) {
      case "Placement":
        return "success";

      case "Result":
        return "primary";

      case "Event":
        return "warning";

      default:
        return "default";
    }
  };

  return (
    <Card
      onClick={onClick}
      sx={{
        minHeight: compact ? 420 : 320,

        mb: 2,
        cursor: "pointer",

        opacity: read ? 0.8 : 1,

        borderRadius: 4,

        boxShadow: read ? 2 : 5,

        borderLeft: read
          ? "4px solid #d1d5db"
          : "6px solid #ef4444",

        transition: "all 0.3s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 8
        }
      }}
    >
      <CardContent
        sx={{
          p: 3,
          height: "100%",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >

        <Box>

          <Stack
  direction="row"
  spacing={1}
  sx={{
    alignItems: "flex-start",
    mb: 2,
    minHeight: compact ? 90 : 120
  }}
>
            <Typography
  variant="h5"
  sx={{
    fontWeight: "bold",
    flex: 1,
    lineHeight: 1.4
  }}
>
              {notification.Message}
            </Typography>

            {!read && (
              <Chip
                label="NEW"
                color="error"
                size="medium"
              />
            )}

          </Stack>

          <Chip
            label={notification.Type}
            color={getChipColor()}
            sx={{
              mb: 3,
              fontWeight: "bold"
            }}
          />

        </Box>

        <Box>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 2,
              fontSize: "1rem"
            }}
          >
            {notification.Timestamp}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: read
                ? "success.main"
                : "error.main"
            }}
          >
            {read ? "✓ Read" : "● Unread"}
          </Typography>

        </Box>

      </CardContent>
    </Card>
  );
}

export default NotificationCard;