import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To-Do App",
  description: "Demo for \"React & Next.js: Building Modern Full-Stack Web Apps\" workshop by Victoria Da Rosa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{margin: 0}}>{children}</body>
    </html>
  );
}
