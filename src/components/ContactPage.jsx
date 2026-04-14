import { MapPin, Phone, Mail, CheckSquare } from 'lucide-react';

// --- Custom Social Icons ---
const FacebookIcon = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const LinkedinIcon = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// Official TripAdvisor Owl Logo Path
const TripAdvisorIcon = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
     <path d="M22.563 10.422c-.14-.234-.374-.351-.607-.351h-3.461c-.374-2.852-2.148-5.355-4.652-6.571 1.074-.539 2.054-1.332 2.73-2.316.188-.258.117-.656-.164-.867-.281-.211-.679-.164-.867.117-.841 1.195-2.22 1.875-3.696 1.969v-1.922c0-.328-.258-.609-.609-.609-.328 0-.609.281-.609.609v1.922c-1.453-.094-2.831-.773-3.695-1.969-.188-.281-.586-.328-.867-.117-.281.211-.352.609-.164.867.676.984 1.656 1.777 2.73 2.316-2.527 1.219-4.301 3.719-4.652 6.571h-3.461c-.233 0-.468.117-.607.351-.141.211-.141.516.023.703l3.23 3.656c-.023.281-.047.562-.047.844 0 3.726 3.064 6.797 6.812 6.797 3.75 0 6.813-3.07 6.813-6.797 0-.281-.023-.562-.047-.844l3.23-3.656c.14-.188.164-.492.023-.703zm-10.563-5.273c2.062 0 3.863 1.289 4.543 3.164h-9.086c.68-1.875 2.481-3.164 4.543-3.164zm0 13.031c-2.856 0-5.176-2.32-5.176-5.18 0-.469.07-.914.188-1.336h2.246c-.164.422-.258.891-.258 1.383 0 2.227 1.801 4.031 4.02 4.031s4.02-1.805 4.02-4.031c0-.492-.094-.961-.258-1.383h2.246c.117.422.188.867.188 1.336.023 2.86-2.297 5.18-5.164 5.18zm0-3.328c-1.028 0-1.871-.844-1.871-1.875s.844-1.875 1.871-1.875c1.031 0 1.875.844 1.875 1.875s-.844 1.875-1.875 1.875zm0-2.883c-.562 0-1.004.445-1.004 1.008 0 .539.441.984 1.004.984.562 0 1.008-.445 1.008-.984 0-.562-.445-1.008-1.008-1.008z"/>
  </svg>
);

export default function ContactPage() {
  return (
    <section className="bg-[#fcfaf8] py-16 md:py-24 px-5 md:px-8 min-h-screen relative overflow-hidden">
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0c3b2e 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-12 md:mb-16">
          <h4 className="text-[#8a7967] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Touch With Us
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0c3b2e]">
            How Can We Help?
          </h1>
        </div>

        {/* --- Top Info Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Location Card */}
          <div className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center shadow-xl shadow-gray-100/50 border border-gray-100 transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-[#346244] flex items-center justify-center text-white mb-6 shadow-md">
              <MapPin size={28} />
            </div>
            <h3 className="font-bold text-[#0c3b2e] text-lg mb-2 tracking-wide">LOCATION</h3>
            <p className="text-gray-600">No: 125/ 20, Armand Cresent Estate Katiyala Rd Demanhandiya negombo</p>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center shadow-xl shadow-gray-100/50 border border-gray-100 transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-[#346244] flex items-center justify-center text-white mb-6 shadow-md">
              <Phone size={28} />
            </div>
            <h3 className="font-bold text-[#0c3b2e] text-lg mb-2 tracking-wide">CONTACT NO.</h3>
            <p className="text-gray-600">+94 77 788 3379</p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center shadow-xl shadow-gray-100/50 border border-gray-100 transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-[#346244] flex items-center justify-center text-white mb-6 shadow-md">
              <Mail size={28} />
            </div>
            <h3 className="font-bold text-[#0c3b2e] text-lg mb-2 tracking-wide">EMAIL ADDRESS</h3>
            <p className="text-gray-600">sameerarosary@gmail.com</p>
          </div>

        </div>

        {/* --- Social Icons Row --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"><FacebookIcon size={20} /></a>
          <a href="#" aria-label="YouTube" className="w-12 h-12 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"><YoutubeIcon size={20} /></a>
          <a href="#" aria-label="TripAdvisor" className="w-12 h-12 rounded-full bg-[#34E0A1] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"><TripAdvisorIcon size={20} /></a>
          <a href="#" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"><LinkedinIcon size={20} fill="currentColor" /></a>
        </div>

        {/* --- Map and Form Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Left: Google Map */}
          <div className="w-full h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-xl border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126685.25301826505!2d79.80373809635905!3d7.199468699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee08b0fb6c5b%3A0xcdafaeb1bf6c2db6!2sReal%20Lanka%20Holidays%20(Taxies%20%26%20Negombo%20Cooking%20Classes%20%26%20Water%20Sport%20Provider)!5e0!3m2!1sen!2slk!4v1713009586111!5m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right: Contact Form - UPDATED WITH FORMSUBMIT */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-gray-100/50 border border-gray-100">
            {/* Added action and method POST pointing to the new email */}
            <form action="https://formsubmit.co/sameerarosary@gmail.com" method="POST" className="space-y-5">
              
              {/* Optional: Disables the ugly captcha from FormSubmit if you prefer */}
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  className="w-full px-5 py-4 bg-[#fcfaf8] text-gray-900 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#346244] focus:border-transparent outline-none transition-all placeholder-gray-400"
                  required
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  className="w-full px-5 py-4 bg-[#fcfaf8] text-gray-900 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#346244] focus:border-transparent outline-none transition-all placeholder-gray-400"
                  required
                />
              </div>

              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number" 
                className="w-full px-5 py-4 bg-[#fcfaf8] text-gray-900 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#346244] focus:border-transparent outline-none transition-all placeholder-gray-400"
              />

              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                className="w-full px-5 py-4 bg-[#fcfaf8] text-gray-900 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#346244] focus:border-transparent outline-none transition-all placeholder-gray-400"
                required
              />

              <textarea 
                name="message"
                placeholder="Message" 
                rows="5"
                className="w-full px-5 py-4 bg-[#fcfaf8] text-gray-900 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#346244] focus:border-transparent outline-none transition-all placeholder-gray-400 resize-none"
                required
              ></textarea>

              {/* Dummy reCAPTCHA Box (Kept for visual design purposes) */}
              <div className="w-full md:w-72 bg-[#f9f9f9] border border-gray-300 rounded-lg p-3 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-6 h-6 rounded border-gray-300 text-[#346244] focus:ring-[#346244]" required />
                  <span className="text-sm font-medium text-gray-700">I'm not a robot</span>
                </div>
                <div className="flex flex-col items-center opacity-70">
                  <CheckSquare size={24} className="text-blue-500 mb-1" />
                  <span className="text-[8px] text-gray-500">reCAPTCHA</span>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-[#163828] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#0c3b2e] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 mt-4"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}