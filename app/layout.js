import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

// export const metadata = {
//   title:
//     "NexLint Digital - We Build Websites That Work for You | Web Development Bangladesh",
//   description:
//     "Professional web development services in Bangladesh. Custom websites, e-commerce solutions, SEO optimization. Get a modern website that drives results. Contact us today!",
//   keywords:
//     "web development Bangladesh, website design Bangladesh, responsive web design, e-commerce website, SEO optimization, Rajshahi web developer",
//   author: "NexLint Digital",
//   robots: "index, follow",
//   openGraph: {
//     title: "NexLint Digital - We Build Websites That Work for You",
//     description:
//       "Professional web development services in Bangladesh. Custom websites, e-commerce solutions, SEO optimization.",
//     type: "website",
//     url: "https://nexlint.vercel.app",
//     image: "/og-nexlint.jpg",
//     siteName: "NexLint Digital",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "NexLint Digital - We Build Websites That Work for You",
//     description: "Professional web development services in Bangladesh.",
//     image: "/og-nexlint.jpg",
//   },
// };

export const metadata = {
  title:
    "NexLint Digital - We Build Websites That Work for You | Web Development Bangladesh",
  description:
    "Professional web development services in Bangladesh. Custom websites, e-commerce solutions, SEO optimization. Get a modern website that drives results. Contact us today!",
  keywords:
    "web development Bangladesh, website design Bangladesh, responsive web design, e-commerce website, SEO optimization, Rajshahi web developer",
  authors: [{ name: "NexLint Digital" }],
  robots: "index, follow",
  openGraph: {
    title: "NexLint Digital - We Build Websites That Work for You",
    description:
      "Professional web development services in Bangladesh. Custom websites, e-commerce solutions, SEO optimization.",
    type: "website",
    url: "https://nexlint.vercel.app",
    images: [
      {
        url: "https://nexlint.vercel.app/og-nexlint.jpg", // ✅ FULL URL required for Open Graph
        width: 1200,
        height: 630,
        alt: "NexLint Digital",
      },
    ],
    siteName: "NexLint Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexLint Digital - We Build Websites That Work for You",
    description: "Professional web development services in Bangladesh.",
    images: ["https://nexlint.vercel.app/og-nexlint.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://nexlint.vercel.app" />
        <meta
          name="google-site-verification"
          content="ST1Hhm9DearRT78yeK7x1Qr3HHzcw5iUNYSGUguuMGk"
        />
        <link
          rel="shortcut icon"
          href="/nexlint-favicon.jpg"
          type="image/x-icon"
        />
        <link rel="icon" href="/nexlint-favicon.jpg" type="image/x-icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NexLint Digital",
              url: "https://nexlint.vercel.app",
              logo: "https://nexlint.vercel.app/logo.jpg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+8801575061066",
                contactType: "customer service",
                areaServed: "BD",
                availableLanguage: ["English", "Bengali"],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rajshahi",
                addressCountry: "BD",
              },
              sameAs: [
                "https://facebook.com/NexLint",
                "https://linkedin.com/company/NexLintDigital",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-inter bg-dark-900 text-gray-200`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
