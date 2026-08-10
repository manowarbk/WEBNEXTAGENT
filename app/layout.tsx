import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://nextagent.com.vn'),
  title: "NextAgent | Giải pháp Mendix & Chuyển đổi số doanh nghiệp",
  description: "NextAgent Tech Co., Ltd - Your Next Agent for Every Operation. Triển khai Mendix Low-Code, AI Agent, ERP và Omnichannel.",
  keywords: ["Chuyển đổi số", "Mendix", "Low-Code", "AI Agent", "ERP", "Omnichannel", "NextAgent"],
  openGraph: {
    title: "NextAgent | Giải pháp Mendix & Chuyển đổi số doanh nghiệp",
    description: "Your Next Agent for Every Operation.",
    url: "https://nextagent.com.vn",
    siteName: "NextAgent",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NextAgent - Digital Transformation Partner",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextAgent | Giải pháp Mendix & Chuyển đổi số doanh nghiệp",
    description: "Your Next Agent for Every Operation.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
