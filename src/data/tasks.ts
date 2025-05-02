export interface DailyUpdate {
  date: string; // e.g. "2025-05-02"
  updates: Update[];
}

export interface Update {
  title: string;
  description: string;
  type: "bug" | "task" | "idea";
  status: "open" | "in progress" | "resolved";
}

export const activityLog: DailyUpdate[] = [
  {
    date: "2025-05-02",
    updates: [
      {
        title: "You can open chests and see the balance reflect that",
        description: "Players are now able to open chests and see the updated balance immediately.",
        type: "task",
        status: "resolved"
      },
      {
        title: "Guardians are showing up on the shofel (loading image is still broken)",
        description: "Guardians now appear correctly, though the loading image is still broken.",
        type: "bug",
        status: "in progress"
      },
      {
        title: `You can see your heroes under the "Attack" section and in your inventory`,
        description: "Players can now see their heroes both when attacking and in their inventory.",
        type: "task",
        status: "resolved"
      },
      {
        title: "You can attack the boss, view the log, and get GS as a reward",
        description: "Users can attack the boss, view battle logs, and receive GS as a reward.",
        type: "task",
        status: "resolved"
      },
      {
        title: "Quests are updating, you can see the progress and claiming rewards also updates your GC balance",
        description: "Quest progress is tracked properly, and claiming rewards updates the GC balance.",
        type: "task",
        status: "resolved"
      },
      {
        title: "A session is active, but stats aren't being saved yet - no ranking for now",
        description: "Sessions are functioning, but ranking and stats aren't being stored yet.",
        type: "bug",
        status: "open"
      },
      {
        title: "Prize pool is set on the backend, but not updating from the frontend yet",
        description: "The prize pool is correctly set on the backend, but the frontend doesn't reflect updates yet.",
        type: "bug",
        status: "in progress"
      }
    ]
  }
];
