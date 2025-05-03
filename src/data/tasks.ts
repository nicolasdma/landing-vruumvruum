export interface DailyUpdate {
  date: string; // e.g. "2025-05-02"
  updates: Update[];
}

export interface Update {
  title: string;
}

export const activity: DailyUpdate[] = [
  {
    date: "2025-05-03",
    updates: [
      { title: "Blocked routes for unauthorized users." },
      { title: "Fusion of guardians now available." },
      { title: "Inventory slots can now be purchased." },
      { title: "Battle section complete." },
      { title: "Shop section complete." },
      { title: "Quest section complete." },
      { title: "Email account creation template implemented." },
      { title: "The password reset email is working with a implemented template." },
      { title: "New modal is displayed for reset password (final password update still pending)." },
    ]
  },
  {
    date: "2025-05-02",
    updates: [
      { title: "You can open chests and see the balance reflect that." },
      { title: "Guardians are showing up on the shofel (loading image is still broken)." },
      { title: "You can see your heroes under the 'Attack' section and in your inventory." },
      { title: "You can attack the boss, view the log, and get GS as a reward." },
      { title: "Quests are updating, you can see the progress and claiming rewards also updates your GC balance." },
      { title: "A session is active, but stats aren't being saved yet - no ranking for now." },
      { title: "Prize pool is set on the backend, but not updating from the frontend yet." }
    ]
  }
];
