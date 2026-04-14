// src/app/contact/page.js
import ContactPage from '@/components/ContactPage';

export const metadata = {
  title: "Contact Us | Rosary Global",
  description: "Get in touch with us for your Sri Lankan travel needs.",
};

export default function Page() {
  return (
    <main>
      {/* Navbar and Footer are automatically handled by layout.js */}
      <ContactPage />
    </main>
  );
}