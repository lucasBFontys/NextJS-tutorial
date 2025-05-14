import Header from "./comps/Header/header.jsx";
import "./globals.css";

export const metadata = {
  title: "Tutorials en POC Test Site",
  description: "Een website waar ik de tutorials en poc's heb getest.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
