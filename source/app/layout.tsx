import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/portfolio/site-chrome";
import { assetPath } from "@/lib/portfolio-paths";
import "./globals.css";
export const metadata: Metadata = {
  title: "Devanshu Jamwal | IT Support, Systems & Networking",
  description: "Devanshu Jamwal, SAIT Information Technology Services graduate in Calgary. Explore IT support experience and networking, cloud, security, and Python case studies.",
  keywords: ["Devanshu Jamwal","IT Support","IT Technician","Systems","Networking","Cloud","Calgary IT Professional"],
  icons: { icon: assetPath("/favicon.svg") },
  openGraph: { title: "Devanshu Jamwal | IT portfolio", description: "IT support, systems, networking, and cloud. Technical case studies and hands-on learning in Calgary, Alberta.",type:"website",locale:"en_CA" },
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-CA"><body><SiteHeader/>{children}<SiteFooter/></body></html>}
