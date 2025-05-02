// suggestions.ts

export const suggestions = [
    {
      title: "🚀 Optimizing Performance & Enhancing User Experience",
      description: [
        "Adding a global state management system to store all requests per session. This way, we avoid going back to the backend every time a page is loaded. When a page is opened for the first time, the data is fetched and stored in memory. As long as the session lasts, the data stays available, enabling smooth navigation without repeated backend calls.",
        "For updates (like changing a name or balance), the frontend should optimistically update the UI, send the change to the backend, and only revert the data if the response returns an error. The UI shouldn’t block or wait for the backend before reflecting changes.",
        "This would drastically improve the user experience by reducing perceived waiting times.",
        "I usually use Redux for this kind of pattern, but Zustand could be a great fit here — it's much lighter and easier to implement. If you’re open to including this in the second phase, I’ll explore using Zustand."
      ],
      timeEstimate: [
        { task: "Setup Zustand (store, types, helpers)", time: "1–2 hours" },
        { task: "Refactor data fetching to use Zustand (3–5 pages)", time: "4–6 hours" },
        { task: "Add optimistic update patterns for key mutations", time: "3–4 hours" },
        { task: "Testing, fallback logic for errors", time: "2–3 hours" },
        { task: "Optional: add dev tools or persistence middleware", time: "1 hour" },
      ],
      total: "10–16 hours",
      cost: "$64",
      rate: "$4/hr",
      workingDays: "2 working days",
    },
    {
      title: "🛠 Code Refactoring for Better Maintainability",
      description: [
        "The code is currently functional, but it quite messy. We have files with more than 2,000 lines, a lot of repeated code and logic, functions that are declared but not used anywhere. While this doesn’t affect performance or visuals right now, it could make future development and maintenance difficult as the project grows.",
        "I suggest considering a refactoring in the near future to improve the organization of the codebase. A clean and well-structured codebase will help ensure that any developer can easily understand and maintain the project.",
        "This won't impact the functionality or performance, but it will make future work more manageable and less error-prone. We can start by addressing the most complex or messy files and gradually clean up the rest."
      ],
      timeEstimate: [
        { task: "Identify areas with redundant code and complex logic", time: "3–4 hours" },
        { task: "Refactor main files (structure, naming conventions, etc.)", time: "5–6 hours" },
        { task: "Remove unused functions and dead code", time: "2–3 hours" },
        { task: "Simplify complex logic and improve readability", time: "4–5 hours" },
      ],
      total: "14–18 hours",
      cost: "$72",
      rate: "$4/hr",
      workingDays: "3 working days",
    },
    {
      title: "🌐 Create Public User Tabs (Non-authenticated)",
      description: [
        "Currently, the application only offers authenticated user features. To make the platform more accessible to new visitors or users without accounts, I suggest adding public tabs such as 'About', 'Contact', or 'FAQ'. These pages will provide general information about the platform without requiring authentication.",
        "The design and content for these pages should be provided in advance. With this in place, the implementation of routing and page structure will be straightforward.",
        "These public pages will enhance the user experience by providing easy access to essential information and improve user engagement."
      ],
      timeEstimate: [
        { task: "Implement routing and navigation for public tabs", time: "2–3 hours" },
        { task: "Integrate provided design and content for each public tab", time: "3–4 hours" },
        { task: "Test the navigation and responsiveness", time: "1–2 hours" },
      ],
      total: "6–9 hours",
      cost: "$36",
      rate: "$4/hr",
      workingDays: "1–2 working days",
    }
  ];
  