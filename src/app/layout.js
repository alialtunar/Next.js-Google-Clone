
import "./globals.css";
import Footer from "../components/Footer";





export const metadata = {
  title: "Google Clone",
  description: "An Google Clone application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer/>
      </body>
    </html>
  );
}
