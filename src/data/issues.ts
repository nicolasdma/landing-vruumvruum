export interface Issue {
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  src?: string;
  status: "to do" | "in progress" | "done" | "on hold" | "closed";
  fixEstimation?: string;
}

export interface Section {
  title: string;
  icon:
    | "general"
    | "home"
    | "login"
    | "leaderboard"
    | "shop"
    | "account"
    | "profile"
    | "inventory"
    | "Referral"
    | "logout"
    | "bug"
    | "performance"
    | "video";
  issues: Issue[];
}

export const issuesData: Section[] = [
  {
    title: "General Issues",
    icon: "general",
    issues: [
      {
        title: "Missing favicon",
        description: "The website is missing a favicon which affects brand recognition.",
        priority: "medium",
        src: "./favicon.png",
        status: "done",
        fixEstimation: "10 min"
      },
      {
        title: "A few console errors on load",
        description: "Could be related to current Supabase integration.",
        priority: "high",
        src: "./errors.png",
        status: "done",
        fixEstimation: "1.5–2 hrs"
      },
      {
        title: "Vulnerability in the app",
        description: "Would be good to fix the vulnerabilities before go public.",
        priority: "high",
        src: "./vulnerabilities.png",
        status: "done",
        fixEstimation: "1–2 hrs"
      },
    ],
  },
  {
    title: "Responsive",
    icon: "general",
    issues: [
      {
        title: "Broken layout on small devices",
        description: "On mobile devices, the layout is broken and elements overlap.",
        priority: "high",
        src: "./mobile.jpeg",
        status: "done",
        fixEstimation: "2–3 hrs"
      },
    ],
  },
  {
    title: "Home Page",
    icon: "home",
    issues: [
      {
        title: "Announcement popup always shows on first render",
        description: "Should stay dismissed after closing.",
        priority: "medium",
        src: "./announcement.png",
        status: "done",
        fixEstimation: "1 hr"
      },
      {
        title: "Logo is stretched on responsive",
        description: "Logo image doesn't maintain aspect ratio.",
        priority: "medium",
        src: "./logo.png",
        status: "done",
        fixEstimation: "10 min"
      },
      {
        title: "Topbar right-side items are cropped on middle devices",
        description: '"My Account" + "Claim GS" are cut off.',
        priority: "high",
        src: "./cut.png",
        status: "done",
        fixEstimation: "15 min"
      },
      {
        title: "Claim GS number overflows its box",
        description: "Even with value 0 — could break further with longer values.",
        priority: "medium",
        src: "./gs.png",
        status: "done",
        fixEstimation: "10 min"
      },
      {
        title: "White bar visible at bottom on smaller screens",
        description: "Appears at the bottom of the page.",
        priority: "low",
        src: "./footer.png",
        status: "done",
        fixEstimation: "10 min"
      },
      {
        title: '"My Account" renders under body content',
        description: "More visible in the Battle tab.",
        priority: "high",
        src: "./account.png",
        status: "done",
        fixEstimation: "15 min"
      },
      {
        title: "Horizontal scroll with a white stripe appears on medium devices",
        description: "Unexpected horizontal scrolling behavior.",
        priority: "low",
        src: "./horizontal.png",
        status: "done",
        fixEstimation: "10 min"
      },
    ],
  },
  {
    title: "Login/Register",
    icon: "login",
    issues: [
      {
        title: "Broken images on both pages",
        description: "Images fail to load on login and register pages.",
        priority: "high",
        src: "./login.png",
        status: "done",
        fixEstimation: "15 min"
      },
      {
        title: "Missing Password Recovery Option",
        description: "There's no option to recover your account if you forget your password.",
        priority: "high",
        status: "done",
        fixEstimation: "2–2.5 hrs"
      },
    ],
  },
  {
    title: "Leaderboard",
    icon: "leaderboard",
    issues: [
      {
        title: "Background image shifts position between tabs",
        description: "Damage Ranking vs Guardian Chart have a small jump on backgrounds.",
        priority: "low",
        status: "closed",
        fixEstimation: "25 min"
      },
    ],
  },
  {
    title: "Shop",
    icon: "shop",
    issues: [
      {
        title: "Several broken images",
        description: "Multiple images fail to load in shop section.",
        priority: "high",
        src: "./fail.png",
        status: "done",
        fixEstimation: "30 min"
      },
      {
        title: "Season Pass buttons are misaligned on middle devices",
        description: "Buttons appear uneven or improperly spaced.",
        priority: "low",
        src: "./buttons.png",
        status: "done",
        fixEstimation: "15 min"
      },
      {
        title: "Naming differs between display and modal",
        description: "Box Info vs Box Rewards, Pass Info vs Pass Cards.",
        priority: "low",
        src: "./naming.png",
        status: "done",
        fixEstimation: "5 min"
      },
      {
        title: "Last image on Pass Cards is broken",
        description: "Final image fails to load in Pass Cards section.",
        priority: "medium",
        src: "./last.png",
        status: "done",
        fixEstimation: "10 min"
      },
      {
        title: "Text spacing issue",
        description: '"paid inGCGuardian Coinsfrom" appears as one continuous string.',
        priority: "low",
        src: "./spacing.png",
        status: "done",
        fixEstimation: "5 min"
      },
    ],
  },
  {
    title: "My Account",
    icon: "account",
    issues: [
      {
        title: "Active tab isn't indicated visually",
        description: 'Maybe rename "My Account" to the selected tab (e.g., "Inventory").',
        priority: "low",
        src: "./tab.png",
        status: "closed",
        fixEstimation: "20 min"
      },
      {
        title: "Dropdown doesn't close on outside click",
        description: "Needs to be clicked again — annoying UX.",
        priority: "low",
        src: "./dropdown.png",
        status: "done",
        fixEstimation: "20 min"
      },
    ],
  },
  {
    title: "Profile",
    icon: "profile",
    issues: [
      {
        title: "Should redirect to login page instead of showing message",
        description: 'Currently shows "Please login first" message.',
        priority: "low",
        src: "./redirect.png",
        status: "closed",
        fixEstimation: "30–45 min"
      },
    ],
  },
  {
    title: "Inventory",
    icon: "inventory",
    issues: [
      {
        title: "Dropdown filters have poor visibility",
        description: "All Ranks/Classes/Stars filters need better visibility — maybe add light background.",
        priority: "medium",
        src: "./visibility.png",
        status: "done",
        fixEstimation: "10 min"
      },
    ],
  },
  {
    title: "Referral",
    icon: "Referral",
    issues: [
      {
        title: "Background image position shifts between tabs",
        description: "Inconsistent background positioning when switching tabs.",
        priority: "low",
        status: "closed",
        fixEstimation: "10 min"
      },
      {
        title: "Referral input shrinks too much on small devices",
        description: "Maybe switch to column layout with buttons stacked below.",
        priority: "high",
        src: "./link.png",
        status: "done",
        fixEstimation: "15 min"
      },
    ],
  },
  {
    title: "Logout",
    icon: "logout",
    issues: [
      {
        title: "Should not appear when not logged in",
        description: 'Suggest showing "Log in" instead.',
        priority: "medium",
        src: "./out.png",
        status: "done",
        fixEstimation: "10 min"
      },
    ],
  },
  {
    title: "Performance Issues",
    icon: "performance",
    issues: [
      {
        title: "Images take quite a long time to load",
        description: "Optimization needed for image loading performance.",
        priority: "high",
        status: "done",
        fixEstimation: "1.5-2 hrs"
      },
    ],
  },
  {
    title: "Review From Video",
    icon: "video",
    issues: [
      {
        title: "Balance should update automatically after claiming",
        description: "Currently needs refresh to update.",
        priority: "medium",
        src: "./balance.png",
        status: "to do",
        fixEstimation: "45 min"
      },
      {
        title: "Broken images in the profile",
        description: "All hero img's are broken.",
        priority: "medium",
        src: "./profile.png",
        status: "done",
        fixEstimation: "20 min"
      },
      {
        title: '"Cancel" button text in Personal Info has low visibility',
        description: "Text color blends with background.",
        priority: "high",
        src: "./cancel.png",
        status: "done",
        fixEstimation: "5 min"
      },
      {
        title: 'No feedback when clicking "Confirm Opening"',
        description: "Maybe add a loader or indicator.",
        priority: "medium",
        src: "./feedback.png",
        status: "to do",
        fixEstimation: "40 min"
      },
      {
        title: "Claiming a Quest reward causes slight jump/glitch",
        description: "Visual glitch in the list after claiming.",
        priority: "low",
        src: "./claim.png",
        status: "done",
        fixEstimation: "20 min"
      },
      {
        title: "Buy buttons can be spammed repeatedly",
        description: "No protection against rapid clicks.",
        priority: "high",
        status: "done",
        fixEstimation: "1 hr"
      },
      {
        title: "Season Reward System shows double scrollbars",
        description: "Unnecessary scrollbars appear.",
        priority: "low",
        src: "./double.png",
        status: "done",
        fixEstimation: "10 min"
      },
    ],
  },
];
