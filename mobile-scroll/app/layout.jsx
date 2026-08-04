import "./globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics";

export const metadata = {
  metadataBase: new URL("https://theblue-apt.vercel.app"),
  title: "분양 현장 목록 - 주식회사 더블루파트너스",
  description: "주식회사 더블루파트너스가 운영하는 분양 현장 목록입니다.",
  openGraph: {
    title: "분양 현장 목록 - 주식회사 더블루파트너스",
    description: "주식회사 더블루파트너스가 운영하는 분양 현장 목록입니다.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Black+Han+Sans&family=Cormorant+Garamond:ital,wght@1,300;1,400&family=Noto+Sans+KR:wght@300;400;700&family=Noto+Serif+KR:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <GoogleAnalytics />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
