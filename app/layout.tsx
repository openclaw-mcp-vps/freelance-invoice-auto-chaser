import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice Auto-Chaser — Stop Chasing Payments Manually',
  description: 'Automatically chase overdue invoices with smart, escalating follow-ups. Built for freelancers, consultants, and small agencies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1aa24182-bfd3-42f4-9f23-041a56ba6ba1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
