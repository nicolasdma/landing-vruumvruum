export const suggestions = [
  {
    title: "💳 WalletConnect Integration for GC Payments",
    description: [
      "WalletConnect enables a decentralized way to accept crypto payments directly from EVM-compatible wallets like MetaMask or Trust Wallet. It supports tokens such as ETH, USDT, MATIC, and more, without requiring any third-party intermediaries or KYC.",
      "The frontend implementation involves displaying purchases options tied to fixed USD amounts (e.g., 1,000 GC for $10). It uses the CoinGecko API to fetch real-time conversion rates, calculates the equivalent crypto amount, and initiates the transaction through the user’s wallet.",
      "After the user completes the payment, the backend listens for on-chain confirmation using Alchemy webhooks or ethers.js polling. Once verified — including recipient, sender, and amount — it credits the user’s GC balance and logs the transaction in Supabase.",
      "This setup provides full control over the payment process, avoids compliance friction, and lays the foundation for a Web3-native experience. However, it requires more technical effort and doesn’t support fiat or card payments.",
    ],
    timeEstimate: [
      { task: "Setup WalletConnect, wagmi, and Web3Modal", time: "3–4 hours" },
      { task: "Integrate CoinGecko API for real-time prices", time: "1 hour" },
      {
        task: "Handle transaction logic and send txHash to backend",
        time: "3–4 hours",
      },
      {
        task: "Implement backend logic to confirm transactions (Alchemy webhook or polling)",
        time: "3–4 hours",
      },
      {
        task: "Validate and credit GC + log transaction in Supabase",
        time: "2 hours",
      },
      { task: "Test on Sepolia or Polygon Amoy testnet", time: "2–3 hours" },
    ],
    total: "14–18 hours",
    cost: "$72",
    rate: "$4/hr",
    workingDays: "2–3 working days",
  },
  {
    title: "💳 CoinGate Integration for GC Payments",
    description: [
      "CoinGate provides a fast and simple way to accept both fiat and cryptocurrency payments through a centralized API. It supports more than 50 cryptocurrencies and allows customers to pay via credit card, Apple Pay, or crypto wallets.",
      "The frontend implementation involves embedding CoinGate’s checkout buttons tied to the GC purchase tiers. Upon purchase, the backend listens for payment confirmation through CoinGate webhooks and validates the payment details (amount, user ID).",
      "Once validated, the backend credits the correct GC amount to the user and stores the transaction for reference.",
      "This approach is ideal for launching quickly with less technical effort and built-in fiat support, but it comes with a 1% transaction fee and KYC requirements.",
    ],
    timeEstimate: [
      { task: "Implement CoinGate button flow (Frontend)", time: "2–3 hours" },
      { task: "Set up CoinGate webhook listener (Backend)", time: "2 hours" },
      { task: "Handle GC credit logic", time: "1 hour" },
      { task: "Testing with live transactions", time: "2 hours" },
    ],
    total: "7–8 hours",
    cost: "$32",
    rate: "$4/hr",
    workingDays: "1–2 working days",
  },
  {
    title: "⚖️ WalletConnect vs CoinGate Comparison",
    description: [
      "Both WalletConnect and CoinGate offer strong options for enabling GC purchases via crypto. WalletConnect provides a decentralized, Web3-native solution that prioritizes flexibility, scalability, and full control over the payment experience. It’s ideal for projects with long-term blockchain ambitions.",
      "CoinGate is faster to implement and more accessible for users unfamiliar with wallets, since it allows payments using fiat and handles all compliance requirements. It’s a solid short-term solution for quick deployment with less engineering effort.",
      "Here’s a detailed comparison to help guide the decision.",
    ],
    timeEstimate: [],
    total: "",
    cost: "",
    rate: "",
    workingDays: "",
  },
];
