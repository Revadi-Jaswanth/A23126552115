import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
  Box,
  Grid,
  Card,
  CardContent
} from "@mui/material";

import { useEffect, useState } from "react";

import { fetchNotifications } from "../api/notificationApi";
import type { Notification } from "../types/Notification";

import NotificationList from "../components/NotificationList";
import PriorityNotifications from "../components/PriorityNotifications";

import { Log } from "../utils/logger";

function Home() {
  const [notifications, setNotifications] =
    useState<Notification[]>([]);

  const [page, setPage] = useState(1);

  const [filter, setFilter] =
    useState("");

  const [readIds, setReadIds] =
    useState<string[]>([]);

  useEffect(() => {
    Log(
      "frontend",
      "info",
      "page",
      "Home page loaded"
    );

    const stored = JSON.parse(
      localStorage.getItem("readIds") || "[]"
    );

    setReadIds(stored);
  }, []);

  useEffect(() => {
    const loadNotifications =
      async () => {
        try {
          Log(
            "frontend",
            "info",
            "api",
            "Fetching notifications"
          );

          const data =
            await fetchNotifications(
              page,
              20,
              filter
            );

          setNotifications(data);

          Log(
            "frontend",
            "info",
            "api",
            "Notifications fetched"
          );
        } catch {
          Log(
            "frontend",
            "error",
            "api",
            "Failed to fetch notifications"
          );
        }
      };

    loadNotifications();
  }, [page, filter]);

  const markAsRead = (id: string) => {
    if (readIds.includes(id)) return;

    const updated = [...readIds, id];

    setReadIds(updated);

    localStorage.setItem(
      "readIds",
      JSON.stringify(updated)
    );
  };

  const unreadCount =
    notifications.filter(
      (n) => !readIds.includes(n.ID)
    ).length;

  return (
    <Container
      maxWidth={false}
      sx={{
        py: 4,
        px: { xs: 2, md: 8 }
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Campus Notifications Dashboard
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ mb: 5 }}
      >
        Track Placement, Result and Event Updates
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{ mb: 5 }}
      >
        <Grid size={{ xs: 12, md: 4 }}>
          <Card elevation={4}>
            <CardContent>
              <Typography variant="h6">
                Total Notifications
              </Typography>

              <Typography
                variant="h3"
                sx={{ fontWeight: "bold" }}
              >
                {notifications.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card elevation={4}>
            <CardContent>
              <Typography variant="h6">
                Unread Notifications
              </Typography>

              <Typography
                variant="h3"
                sx={{ fontWeight: "bold" }}
              >
                {unreadCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card elevation={4}>
            <CardContent>
              <Typography variant="h6">
                Priority Notifications
              </Typography>

              <Typography
                variant="h3"
                sx={{ fontWeight: "bold" }}
              >
                {unreadCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <FormControl
        fullWidth
        sx={{ mb: 5 }}
      >
        <InputLabel>
          Filter Notifications
        </InputLabel>

        <Select
          value={filter}
          label="Filter Notifications"
          onChange={(e) => {
            setFilter(e.target.value);

            Log(
              "frontend",
              "info",
              "component",
              "Filter changed"
            );
          }}
        >
          <MenuItem value="">
            All Notifications
          </MenuItem>

          <MenuItem value="Placement">
            Placement
          </MenuItem>

          <MenuItem value="Result">
            Result
          </MenuItem>

          <MenuItem value="Event">
            Event
          </MenuItem>
        </Select>
      </FormControl>

      <Grid
        container
        spacing={5}
        sx={{
          width: "100%"
        }}
      >
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Priority Notifications
          </Typography>

          <PriorityNotifications
            notifications={notifications}
            readIds={readIds}
            markAsRead={markAsRead}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            All Notifications
          </Typography>

          <NotificationList
            notifications={notifications}
            readIds={readIds}
            markAsRead={markAsRead}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 6
        }}
      >
        <Pagination
          count={10}
          page={page}
          onChange={(_, value) =>
            setPage(value)
          }
          color="primary"
          size="large"
        />
      </Box>
    </Container>
  );
}

export default Home;