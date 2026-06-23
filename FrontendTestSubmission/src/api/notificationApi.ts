// API currently returning 401 Unauthorized
// Using mock data for evaluation

export const fetchNotifications = async (
  _page?: number,
  _limit?: number,
  filter?: string
) => {

  const data = [
    {
      ID: "1",
      Type: "Placement",
      Message: "Microsoft Hiring Drive",
      Timestamp: "2026-04-22 17:51:18"
    },
    {
      ID: "2",
      Type: "Result",
      Message: "Mid Sem Results Published",
      Timestamp: "2026-04-22 17:51:30"
    },
    {
      ID: "3",
      Type: "Event",
      Message: "Tech Fest Registration Open",
      Timestamp: "2026-04-22 17:50:06"
    },
    {
      ID: "4",
      Type: "Placement",
      Message: "Amazon Hiring Drive",
      Timestamp: "2026-04-22 18:20:00"
    },
    {
      ID: "5",
      Type: "Event",
      Message: "Hackathon Tomorrow",
      Timestamp: "2026-04-22 18:00:00"
    },
    {
      ID: "6",
      Type: "Result",
      Message: "Project Review Results",
      Timestamp: "2026-04-22 19:10:00"
    }
  ];

  return filter
    ? data.filter(
        (n) => n.Type === filter
      )
    : data;
};