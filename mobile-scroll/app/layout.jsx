import "./globals.css";

export async function generateMetadata() {
  const { siteConfig } = await import("../data/siteConfig");
  return {
    metadataBase: new URL("https://theblue-apt.vercel.app"),
    title: `${siteConfig.projectName} - 공식 분양 안내`,
    description: `${siteConfig.projectName} 분양 정보 및 빠른 상담 신청`,
    openGraph: {
      title: `${siteConfig.projectName} - 공식 분양 안내`,
      description: `${siteConfig.projectName} 분양 정보 및 빠른 상담 신청`,
      images: [{ url: siteConfig.ogImage }],
    },
  };
}

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
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
