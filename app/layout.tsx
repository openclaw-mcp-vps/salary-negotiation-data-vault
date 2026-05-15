import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salary Negotiation Data Vault",
  description: "Secure personal salary data sharing for better negotiations"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0cf3eaa2-1d1b-46ef-9da3-f3bae48e55d8"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
