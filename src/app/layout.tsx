import type { Metadata } from 'next'
import '../index.css'
import Layout from '@/components/layout/Layout'

export const metadata: Metadata = {
  title: 'GETITT - Leading Recruitment & Staffing Solutions in India',
  description: 'GETITT is India\'s premier recruitment and staffing consultancy, offering fast-track talent solutions across IT, Banking, Healthcare, and Manufacturing sectors.',
  keywords: 'recruitment, staffing, jobs, India, IT recruitment, banking jobs, healthcare staffing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
