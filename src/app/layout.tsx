import type { Metadata } from "next";
import "../index.css";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "GETITT - Leading Recruitment & Staffing Solutions in India",
  description:
    "GETITT is India's premier recruitment and staffing consultancy, offering fast-track talent solutions across IT, Banking, Healthcare, and Manufacturing sectors.",
  keywords:
    "recruitment, staffing, jobs, India, IT recruitment, banking jobs, healthcare staffing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://services.chatmount.co/embed/69cd2ed6-429a-4e2c-9a66-273474589dd1.js"
          async
        ></script>
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
