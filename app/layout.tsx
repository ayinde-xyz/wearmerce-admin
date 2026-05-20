import "./globals.css";
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { ModalProvider } from "@/providers/modal-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wearmerce  Dashboard",
  description: "Admin dashboard for Wearmerce e-commerce platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const store = prismadb.store.update;

  return (
    <html lang="en">
      <body className={`${comfortaa.className} w-full`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <ToasterProvider /> */}
          <ModalProvider />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

// ↑ @types/node 20.17.10 → 22.10.2
// ↑ @types/react 18.3.16 → 19.0.1
// ↑ @types/react-dom 18.3.5 → 19.0.2
// ↑ eslint 8.57.1 → 9.17.0
// ↑ eslint-config-next 13.5.4 → 15.1.0
// ↑ prisma 5.22.0 → 6.0.1
// ↑ @clerk/nextjs 4.31.6 → 6.9.2
// ↑ @prisma/client 5.22.0 → 6.0.1
// ↑ cmdk 0.2.1 → 1.0.4
// ↑ date-fns 2.30.0 → 4.1.0
// ↑ lucide-react 0.287.0 → 0.468.0
// ↑ next 13.5.4 → 15.1.0
// ↑ next-cloudinary 4.28.0 → 6.16.0
// ↑ react 18.3.1 → 19.0.0
// ↑ react-dom 18.3.1 → 19.0.0
// ↑ stripe 14.25.0 → 17.4.0
// ↑ tailwind-merge 1.14.0 → 2.5.5
// ↑ zustand 4.5.5 → 5.0.2

// ↑ @tailwindcss/postcss 4.1.18 → 4.3.0
// ↑ @tailwindcss/upgrade 4.1.18 → 4.3.0
// ↑ @types/bun 1.3.4 → 1.3.14
// ↑ @types/node 24.10.1 → 25.9.1
// ↑ @types/nodemailer 7.0.4 → 8.0.0
// ↑ @types/pg 8.16.0 → 8.20.0
// ↑ eslint 9.39.1 → 10.4.0
// ↑ eslint-config-next 16.0.3 → 16.2.6
// ↑ postcss 8.5.6 → 8.5.15
// ↑ prisma 7.1.0 → 7.8.0
// ↑ tailwindcss 4.1.18 → 4.3.0
// ↑ typescript 5.9.3 → 6.0.3
// ↑ @prisma/adapter-pg 7.1.0 → 7.8.0
// ↑ @prisma/client 7.1.0 → 7.8.0
// ↑ axios 1.13.2 → 1.16.1
// ↑ better-auth 1.4.9 → 1.6.11
// ↑ date-fns 4.1.0 → 4.2.1
// ↑ dotenv 17.2.3 → 17.4.2
// ↑ lucide-react 0.562.0 → 1.16.0
// ↑ next 16.0.10 → 16.2.6
// ↑ nodemailer 7.0.11 → 8.0.7
// ↑ react 19.2.0 → 19.2.6
// ↑ react-dom 19.2.0 → 19.2.6
// ↑ react-hook-form 7.68.0 → 7.76.0
// ↑ react-icons 5.5.0 → 5.6.0
// ↑ recharts 3.5.1 → 3.8.1
// ↑ stripe 20.1.0 → 22.1.1
// ↑ tailwind-merge 3.4.0 → 3.6.0
// ↑ zod 4.2.1 → 4.4.3
// ↑ zustand 5.0.9 → 5.0.13
