export interface DailyUpdate {
  date: string; // e.g. "2025-05-02"
  updates: Update[];
}

export interface Update {
  title: string;
}

export const activity: DailyUpdate[] = [
  {
    date: "2025-05-04",
    updates: [
      { title: "Responsive fix for mobile devices." },
      { title: "Now displaying Current Season Prize Pool on leaderboard." },
      { title: "Now displaying Current Top 5 on the home tables." },
      { title: "Now displaying Damage Ranking and Guardian Chart on leaderboard." }
    ]
  },
  {
    date: "2025-05-03",
    updates: [
      { title: "Blocked routes for unauthorized users (e.g., you can't access /shop if not logged in — you'll be redirected to the Home page)." },
      { title: "Guardian fusion is now available." },
      { title: "Inventory slots can now be purchased." },
      { title: "Season Pass can now be purchased." },
      { title: "Email account creation template implemented (note: issue with button text color remains)." },
      { title: "Password reset email now works and uses the implemented template (note: issue with button text color remains)." },
      { title: "A new modal is displayed for password reset (final password update is still pending)." },
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
