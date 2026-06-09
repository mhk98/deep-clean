import "./globals.css";

export const metadata = {
  title: "Soft Touch Cleaning",
  description: "Professional cleaning services across Kuwait.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
