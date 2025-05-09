export interface DailyUpdate {
  date: string; // e.g. "2025-05-02"
  updates: Update[];
}

export interface Update {
  title: string;
}

export const activity: DailyUpdate[] = [
  {
    date: "2025-05-09",
    updates: [
      { title: "Manage User tab fully enabled with detailed views and actions" },
      { title: "Admin Panel now visible in the dropdown for admin users" },
      { title: "Non-admin users are now redirected to the Home page" },
      { title: "User search by email is now available" },
      { title: "Basic Info section includes ID, Wallet, Referral Code, and Referred By" },
      { title: "User overview shows full name, email, and join date" },
      { title: "Account Actions: Freeze and Ban options are now enabled" },
      { title: "Currency & Stats section now allows adding GC" },
      { title: "Timestamps are now displayed" },
      { title: "Inventory view shows slot count and active pass" },
      { title: "Quest Progress is now displayed per user" },
    ]
  },
  {
    date: "2025-05-08",
    updates: [
      { title: "Automated prize pool updates after each GC purchase" },
      { title: "Loading spinner added to box and purchase modals for improved user feedback" },
      { title: "User is now redirected to the homepage after clicking the password recovery email link, ensuring token authentication" },
      { title: "Password reset functionality now available directly from the recovery modal; users can also change passwords on the Profile page" },
      { title: "Updated recovery email template to inform users that they will be logged in after redirect" },
    ]
  },
  {
    date: "2025-05-07",
    updates: [
      { title: "Password reset is now enabled from the Profile" },
      { title: `"Total Purchases" and "Your Commission" now update and display correctly` },
      { title: `"Buy GC" is now enabled and updates the prize pool`},
      { title: "Spinner correctly displays the winner on both small and large devices" },  
    ]
  },
  {
    date: "2025-05-06",
    updates: [
      { title: "Referral section now generates a referral code and links it to the user" },
      { title: "Registration modal now opens with the referral code" },
      { title: "Referred users are now correctly linked to the owner of the referral code" },
      { title: "My referrals are now displayed" },
      { title: "Total commissions are now displayed" },
      { title: "Update Total Purchases and Your Commission still pending" }
    ]
  },
  {
    date: "2025-05-05",
    updates: [
      { title: "Optimized all images, resulting in approximately 80% performance improvement" },
      { title: "User profile updates now supported — name, wallet address, and avatar (Metamask connection and password update still pending)" }      
    ]
  },
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
      { title: "The new password reset modal now opens automatically when redirected (final password update is still pending)." },
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
  },
  {
    date: "2025-05-01",
    updates: [
      { title: "Authentication implemented — you can now log in, register, and log out." },
      { title: "New email verification modal added." },
      { title: "New password reset modal added." },
      { title: "Broken image issues fixed." },
      { title: "General UI/UX improvements." },      
    ]
  },
];
