import "./globals.css";

export const metadata = {
  title: "Kambaz",
  description: "CS 4550/5610 — Kambaz prototype",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
