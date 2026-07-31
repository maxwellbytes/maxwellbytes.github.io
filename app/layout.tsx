import './globals.css';
import { DesktopProvider } from "@/context/DesktopContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <DesktopProvider>{children}</DesktopProvider>
      </body>
    </html>
  )
}