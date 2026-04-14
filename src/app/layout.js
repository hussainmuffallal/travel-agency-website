import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata = {
  title: "Rosary Global | Travel Partner Sri Lanka",
  description: "Premium airport transfers and safari adventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Added flex column logic so the footer gets pushed down if page is short */}
      <body className="antialiased bg-[#f8f9fa] min-h-screen flex flex-col">
        <Navbar /> 
        
        {/* flex-grow ensures the content takes up available space, pushing footer to bottom */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer /> 
        <WhatsAppWidget />
      </body>
    </html>
  );
}