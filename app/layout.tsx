import './globals.css';
import { DesktopProvider } from "@/context/DesktopContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>
        <DesktopProvider>{children}</DesktopProvider>
      </body>
    </html>
  )
}
// put in request to resend prescription. can take 24-72 business hours. will receive notif from walmart