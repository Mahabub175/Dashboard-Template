import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Profile from "@/components/shared/Profile";
import Sidebar from "@/components/shared/Sidebar";
import SystemProvider from "@/provider/SystemProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard Template",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SystemProvider>
          <AntdRegistry>
            <Profile />
            <Layout className="relative">
              <Sidebar />
              <Content
                style={{
                  padding: 24,
                  minHeight: 280,
                }}
              >
                {children}
              </Content>
            </Layout>
          </AntdRegistry>
        </SystemProvider>
      </body>
    </html>
  );
}
